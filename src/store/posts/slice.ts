import {createSlice} from '@reduxjs/toolkit';
import {getPosts} from "./thunk";
import {Post} from "../../types/posts"
import {usersSlice} from "../users/slice";

interface PostsState {
  data: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  data: [],
  loading: false,
  error: null
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reset: (state) => {
      state.data = initialState.data;
      state.loading = initialState.loading;
      state.error = initialState.error;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.data = payload;
      })
      .addCase(getPosts.rejected, (state, {payload}) => {
        state.loading = false;
        if (payload) {
          state.error = payload;
        }
      })
  }
});

export const actions = postsSlice.actions;

export default postsSlice.reducer;
