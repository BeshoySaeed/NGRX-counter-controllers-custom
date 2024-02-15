import { createAction, props } from '@ngrx/store';

export const fetchCounter = createAction('[counter] getCounter');
export const increaseCounter = createAction('[counter] increment');
export const decreaseCounter = createAction('[counter] decrement');
export const resetCounter = createAction('[counter] reset');
export const increaseDecreaseCustom = createAction(
  '[counter] custom',
  props<{ value: number }>()
);
