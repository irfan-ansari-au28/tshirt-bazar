import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/interface/product.interface';
import { removeFromCart } from 'src/app/store/cart/cart.actions';
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
  totalAmount!: number;

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('');
  mobile = new FormControl('');
  pin = new FormControl('');

  getErrorMessage() {
    if (this.name.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
    this.store.select(selectCart).subscribe((val) => {
      this.products$ = val.cartItems;
      console.log(this.products$);
    });

    // const initialValue = this.products$[0].actualPrice;
    // const sumWithInitial = this.products$.reduce(
    //   (previousValue: number, currentValue: number) =>
    //     previousValue + currentValue,
    //   initialValue
    // );
    // console.log(sumWithInitial);
  }

  onClickRemove(productId: Product) {
    this.store.dispatch(removeFromCart({ id: +productId }));
  }

  onPlaceOrder() {
    console.log(
      'order placed',
      this.name.value,
      this.email.value,
      this.mobile.value,
      this.pin.value
    );
  }
}
