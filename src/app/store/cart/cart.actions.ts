import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/interface/product.interface';

export const addToCart = createAction(
  '[Cart Page] Add to Cart',
  props<{ product: Product }>()
);

export const removeFromCart = createAction(
  '[Cart page] Remove from Cart',
  props<{ id: number }>()
);

export const loadCartItems = createAction('[Cart Page] Load Cart Items');
