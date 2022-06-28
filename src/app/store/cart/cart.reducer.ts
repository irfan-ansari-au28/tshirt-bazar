import { createReducer, on } from '@ngrx/store';

import { Product } from 'src/app/interface/product.interface';
import { addToCart, loadCartItems, removeFromCart } from './cart.actions';

export interface cartState {
  cartItems: Array<Product>;
}

export const cartInitialState: cartState = {
  cartItems: [
    {
      id: 0,
      name: 'HRX by Hrithik Roshan',
      img: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      type: 'Printed T-shirt',
      discountedPrice: 0,
      actualPrice: 688,
      wishlist: false,
      cart: false,
      rating: 4,
      size: [
        {
          type: 'S',
          stock: 10,
        },
        {
          type: 'M',
          stock: 0,
        },
        {
          type: 'L',
          stock: 1,
        },
        {
          type: 'XL',
          stock: 2,
        },
        {
          type: 'XXL',
          stock: 5,
        },
      ],
      selectedSize: '',
      idealFor: 'M',
    },
  ],
};

export const cartReducer = createReducer(
  cartInitialState,
  on(addToCart, (state, { product }) => ({
    ...state,
    cartItems: [...state.cartItems, product],
  })),

  on(removeFromCart, (state, { id }) => {
    console.log(id, 'id form reducer');

    return {
      ...state,
      cartItems: state.cartItems.filter((product) => product.id != id),
    };
  }),

  on(loadCartItems, (state) => ({ ...state }))
);
