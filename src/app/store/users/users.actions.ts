import { createAction, props } from '@ngrx/store';
import { User } from './users.reducer';

export const addUser = createAction(
  '[LogIn Page] Add User',
  props<{ user: User }>()
);
