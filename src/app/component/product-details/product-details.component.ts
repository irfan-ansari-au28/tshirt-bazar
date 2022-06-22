import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductsService } from 'src/app/service/products.service';
import { addToCart, removeFromCart } from 'src/app/store/cart/cart.actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  cartItems$: any = [];
  id!: number;
  btn!: any;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private store: Store<any>,
    private router: Router
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.id = productIdFromRoute;
    this.cartItems$ = this.store.select((state) => state.cart.cartItems);
    this.cartItems$.subscribe((val: any) => (this.btn = val));
    this.product = this.productService.products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  onAddToCart() {
    this.store.dispatch(addToCart({ product: this.product }));
  }

  onRemoveFromCart() {
    this.store.dispatch(removeFromCart({ id: this.id }));
  }

  onGoToCart() {
    this.router.navigate(['/checkout']);
  }
}
