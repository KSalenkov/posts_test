import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
import {Photo} from "../../types/photo";

export const getPhotos = createAsyncThunk<Photo[], undefined, { rejectValue: string }>(
  "@@photos/getPhotos",
  async (_, thunkApi) => {
    try {
      return await api.get<Photo[]>("/photos");
    } catch (error) {
      return thunkApi.rejectWithValue("Something went wrong");
    }
  },
);
