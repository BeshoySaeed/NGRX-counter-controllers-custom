import { createReducer, on } from '@ngrx/store';
import { postsInitialState } from './post-state';
import * as postActions from './post-actions';
import { Post } from 'src/app/models/post.mode';

export const postReducer = createReducer(
  postsInitialState,
  on(postActions.addNewPost, (state, action) => {
    console.log(action);
    return {
      ...state,
      postsList: [...state.postsList, action.post],
    };
  }),
  on(postActions.deletePost, (state, action) => {
    const filteredPostsList = state.postsList.filter((x) => x.id !== action.id);
    return {
      ...state,
      postsList: filteredPostsList,
    };
  }),
  on(postActions.getPostById, (state, action) => {
    let post: Post | undefined = state.postsList.find(
      (x) => x.id === action.id
    );
    return {
      ...state,
      post: post ? { ...post } : null,
    };
  })
);
