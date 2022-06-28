import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { cartState } from './cart.reducer';

export const selectCart = (state: any) => state.cart;

// export const selectCartItems = createSelector(
//   selectCart,
//   (state: cartState) => state.cartItems
// );
