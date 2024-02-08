import { CounterState } from './initial-state';
import {
  createFeatureSelector,
  createSelector,
  createSelectorFactory,
} from '@ngrx/store';

const counterSelectorFeature = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(
  counterSelectorFeature,
  (state: CounterState) => {
    return state.counter;
  }
);

export const getMessage = createSelector(
  counterSelectorFeature,
  (state: CounterState) => {
    return state.message;
  }
);
