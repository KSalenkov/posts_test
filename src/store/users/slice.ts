import {createSlice} from '@reduxjs/toolkit';
import {getUsers} from "./thunk";
import {User} from "../../types/users"

interface UsersState {
  data: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  data: [],
  loading: false,
  error: null
};

export const usersSlice = createSlice({
  name: 'users',
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
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.data = [];
      })
      .addCase(getUsers.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.data = payload;
      })
      .addCase(getUsers.rejected, (state, {payload}) => {
        state.loading = false;
        if (payload) {
          state.error = payload;
        }
      })
  }
});

export const actions = usersSlice.actions;

export default usersSlice.reducer;
