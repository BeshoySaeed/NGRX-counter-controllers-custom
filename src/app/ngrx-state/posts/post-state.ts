import { Post } from './../../models/post.mode';

export interface postsState {
  postsList: Post[];
  post: Post | null;
}

export const postsInitialState: postsState = {
  postsList: [
    { id: 1, title: 'first post', description: 'first post description' },
    { id: 2, title: 'second post', description: 'second post description' },
  ],
  post: { id: 1, title: 'first post', description: 'first post description' },
};
