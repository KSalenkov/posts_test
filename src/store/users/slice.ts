import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {getUsers} from "./thunk"

interface UsersState {
  users: any[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null
};

export const tasksSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, {payload}) => {
        state.loading = false;
        console.log("payload store", payload)
      })
  }
});

export const actions = tasksSlice.actions;

export default tasksSlice.reducer;
