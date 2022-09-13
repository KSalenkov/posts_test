import {RootState} from '../store';
import { createSelector } from "@reduxjs/toolkit";
import {Photo} from "../../types/photo";

export const selectPhotosRoot = (state: RootState) => state.photos;

export const selectPhotos = createSelector([selectPhotosRoot], (photosState) => photosState.data);

const selectUserId = (_: RootState, userId: number) => userId;
export const selectCurrentPhoto = createSelector(
  [selectPhotos, selectUserId],
  (photos, userId) => photos.find(photo => photo.albumId === userId)
);

export const selectLoading = createSelector([selectPhotosRoot], (photosState) => photosState.loading);
export const selectError = createSelector([selectPhotosRoot], (photosState) => photosState.error);
