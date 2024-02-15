import { fetchData } from './post-actions';
import { postsState } from './post-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const postFeatureSelector = createFeatureSelector<postsState>('post');

export const getPosts = createSelector(postFeatureSelector, (state) => {
  return state.postsList;
});
export const getPost = createSelector(postFeatureSelector, (state) => {
  return state.post;
});
