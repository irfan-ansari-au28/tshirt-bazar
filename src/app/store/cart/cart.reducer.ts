import { createReducer, on } from '@ngrx/store';

import { Product } from 'src/app/interface/product.interface';
import { addToCart, loadCartItems, removeFromCart } from './cart.actions';

export interface cartState {
  cartItems: Array<Product>;
}

export const cartInitialState: cartState = {
  cartItems: [],
};

export const cartReducer = createReducer(
  cartInitialState,
  on(addToCart, (state, { product }) => ({
    ...state,
    cartItems: [...state.cartItems, product],
  })),

  on(removeFromCart, (state, { id }) => ({
    ...state,
    cartItems: state.cartItems.filter((product) => product.id != id),
  })),

  on(loadCartItems, (state) => ({ ...state }))
);
