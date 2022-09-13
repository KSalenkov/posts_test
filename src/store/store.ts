import {configureStore} from '@reduxjs/toolkit';
import users from './users/slice';
import posts from "./posts/slice";
import photos from "./photos/slice";

export const store = configureStore({
  reducer: {
    users,
    posts,
    photos
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
