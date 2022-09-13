import {createSlice} from '@reduxjs/toolkit';
import {getPhotos} from "./thunk";
import {Photo} from "../../types/photo"
import {postsSlice} from "../posts/slice";

interface PhotosState {
  data: Photo[];
  loading: boolean;
  error: string | null;
}

const initialState: PhotosState = {
  data: [],
  loading: false,
  error: null
};

export const photosSlice = createSlice({
  name: 'photos',
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
      .addCase(getPhotos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPhotos.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.data = payload;
      })
      .addCase(getPhotos.rejected, (state, {payload}) => {
        state.loading = false;
        if (payload) {
          state.error = payload;
        }
      })
  }
});

export const actions = photosSlice.actions;

export default photosSlice.reducer;
