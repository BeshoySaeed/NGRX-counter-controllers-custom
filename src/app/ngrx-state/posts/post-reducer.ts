import { createReducer, on } from '@ngrx/store';
import { postsInitialState } from './post-state';
import * as postActions from './post-actions';
import { Post } from 'src/app/models/post.mode';

export const postReducer = createReducer(
  postsInitialState,
  on(postActions.addNewPost, (state, action) => {
    let post: Post = { ...action.post };
    console.log(post);
    post.id = state.postsList.length + 1;
    return {
      ...state,
      postsList: [...state.postsList, post],
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
  }),
  on(postActions.editPost, (state, action) => {
    const index = state.postsList.findIndex((x) => x.id === action.post.id);
    if (index !== -1) {
      const updatedPostsList = [...state.postsList];
      updatedPostsList[index] = { ...action.post };
      return {
        ...state,
        postsList: updatedPostsList,
      };
    } else {
      return {
        ...state,
      };
    }
  })
);
