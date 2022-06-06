import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/interface/product.interface';
import { EventEmitter } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  // @Output() add = new EventEmitter<any>();

  constructor(private productsService: ProductsService) {}

  onClickToWhishlist() {
    this.productsService.addToCart(this.product);
    console.log(this.productsService.cartItems);

    console.log('product added');
  }

  ngOnInit(): void {}
}
