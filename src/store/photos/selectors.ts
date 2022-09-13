import {RootState} from '../store';
import { createSelector } from "@reduxjs/toolkit";
import {Post} from "../../types/posts";

export const selectPostsRoot = (state: RootState) => state.posts;

export const selectPosts = createSelector([selectPostsRoot], (postsState) => postsState.data);

export const selectUniqPosts = createSelector([selectPosts], (posts) => {
  const uniqPosts: Record<number, Post> = {};
  posts.forEach(post => {
    if (!uniqPosts[post.userId]) {
      uniqPosts[post.userId] = post;
    }
  });
  return Object.values(uniqPosts)
});

export const selectLoading = createSelector([selectPostsRoot], (postsState) => postsState.loading);
export const selectError = createSelector([selectPostsRoot], (postsState) => postsState.error);
