import {
  decreaseCounter,
  fetchCounter,
  increaseCounter,
  increaseDecreaseCustom,
  resetCounter,
} from './counter-action';
import { InitialCounterState } from './initial-state';
import { createReducer, on } from '@ngrx/store';

export const counterReducer = createReducer(
  InitialCounterState,
  on(fetchCounter, (state) => {
    return {
      ...state,
    };
  }),
  on(increaseCounter, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decreaseCounter, (state) => {
    if (state.counter > 0) {
      return {
        ...state,
        counter: state.counter - 1,
      };
    } else {
      return {
        ...state,
      };
    }
  }),
  on(resetCounter, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(increaseDecreaseCustom, (state, action) => {
    console.log(action.value, state);
    return {
      ...state,
      counter: state.counter + +action.value,
    };
  })
);
