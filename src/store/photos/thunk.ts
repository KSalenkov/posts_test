import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
import {Post} from "../../types/posts";

export const getPosts = createAsyncThunk<Post[], undefined, { rejectValue: string }>(
  "@@posts/getPosts",
  async (_, thunkApi) => {
    try {
      return await api.get<Post[]>("/posts");
    } catch (error) {
      return thunkApi.rejectWithValue("Something went wrong");
    }
  },
);
