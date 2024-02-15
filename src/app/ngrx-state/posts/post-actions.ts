import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/post.mode';

export const fetchData = createAction('[post] fetchData');
export const successDataResponse = createAction('[post] successDataResponse');
export const failureDataResponse = createAction('[post] failureDataResponse');

export const getPostById = createAction(
  '[post] getOnePost',
  props<{ id: number | string }>()
);

export const addNewPost = createAction(
  '[post] addNewPost',
  props<{ post: Post }>()
);

export const deletePost = createAction(
  '[post] removeThePost',
  props<{ id: number | string }>()
);
