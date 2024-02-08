export interface CounterState {
  counter: number;
  message: string;
}

export const InitialCounterState: CounterState = {
  counter: 0,
  message: 'empty for now',
};
