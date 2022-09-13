import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
import {RestApiError} from "../../api/restApi"

export const getUsers = createAsyncThunk<any[]>(
  "@@users/getUsers",
  async () => {
    try {
      return await api.get("/users");
    } catch (error) {
      return error;
    }
  },
);
