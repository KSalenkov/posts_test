import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
import {User} from "../../types/users";

export const getUsers = createAsyncThunk<User[], undefined, { rejectValue: string }>(
  "@@users/getUsers",
  async (_, thunkApi) => {
    try {
      return await api.get<User[]>("/users");
    } catch (error) {
      return thunkApi.rejectWithValue("Something went wrong");
    }
  },
);
