import { createReducer, on } from '@ngrx/store';

import { addUser } from './users.actions';

export interface User {
  email: string;
  password: string;
}

export interface UserState {
  users: Array<User>;
  isLoggedIn: boolean;
}

export const UserInitialState: UserState = {
  users: [],
  isLoggedIn: false,
};

export const userReducer = createReducer(
  UserInitialState,
  on(addUser, (state, { user }) => {
    console.log('user', user);

    return {
      ...state,
      users: [...state.users, user],
      isLoggedIn: true,
    };
  })
);
