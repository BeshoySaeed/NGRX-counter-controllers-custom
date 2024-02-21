import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/post.mode';

export const fetchData = createAction('[post] fetchData');
export const successDataResponse = createAction('[post] successDataResponse');
export const failureDataResponse = createAction('[post] failureDataResponse');
const GET_POST_BY_ID = '[post] getOnePost';
const ADD_NEW_POST = '[post] addNewPost';
const DELETE_POST = '[post] removeThePost';
const EDIT_POST = '[post] editPost';

export const getPostById = createAction(
  GET_POST_BY_ID,
  props<{ id: number | string }>()
);

export const addNewPost = createAction(ADD_NEW_POST, props<{ post: Post }>());

export const deletePost = createAction(
  DELETE_POST,
  props<{ id: number | string }>()
);

export const editPost = createAction(EDIT_POST, props<{ post: Post }>());
