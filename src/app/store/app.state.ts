import { cartState } from './cart/cart.reducer';
import { User, UserState } from './users/users.reducer';

export interface AppState {
  cart: cartState;
  user: UserState;
}
