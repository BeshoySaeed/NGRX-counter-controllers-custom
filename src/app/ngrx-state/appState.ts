import { counterReducer } from './counter/counter-reducer';
import { CounterState } from './counter/counter-state';
import { postReducer } from './posts/post-reducer';
import { postsState } from './posts/post-state';

export interface AppState {
  counter: CounterState;
  posts: postsState;
}

export const AppReducer = {
  counter: counterReducer,
  post: postReducer,
};
