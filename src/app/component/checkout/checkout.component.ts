import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCart } from 'src/app/store/cart/cart.selector';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  constructor(private store: Store) {}

  products$: any;
  cart$: any;

  ngOnInit(): void {
    // this.store
    //   .select((state) => state.cart.cartItems)
    //   .subscribe((val) => (this.products$ = val));

    // this.store
    //   .select((state) => state)
    //   .subscribe((val) => (this.products = val));
    // this.products$ = this.products.cart.cartItems;

    this.store.select(selectCart).subscribe((val) => {
      // console.log('QQQQ', val.cartItems);
      this.products$ = val.cartItems;
    });
  }
}
