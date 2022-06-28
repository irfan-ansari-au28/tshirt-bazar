import { Action, createReducer, on, State } from '@ngrx/store';

import * as CounterActions from './counter.actions';
import { CounterState, initialState } from './counter.state';

const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (State) => {
    return {
      ...State,
      counter: State.counter + 2,
    };
  }),
  on(CounterActions.decrement, (State) => {
    return {
      ...State,
      counter: State.counter - 2,
    };
  }),
  on(CounterActions.reset, (State) => {
    return {
      ...State,
      counter: 0,
    };
  })
);

export function reducer(state: CounterState | undefined, action: Action) {
  return counterReducer(state, action);
}
