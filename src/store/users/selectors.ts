import {RootState} from '../store';
import { createSelector } from "@reduxjs/toolkit";
import {User} from "../../types/users";

export const selectUsersRoot = (state: RootState) => state.users;

export const selectUsers = createSelector([selectUsersRoot], (usersState) => usersState.data);

export const selectUsersMap = createSelector([selectUsers], (users) => {
  const usersMap: Record<number, User> = {};
  users.forEach(user => {
    usersMap[user.id] = user
  });
  return usersMap
});

const selectUserId = (_: RootState, userId: number) => userId;
export const selectCurrentUser = createSelector(
  [selectUsersMap, selectUserId],
  (users, userId) => users[userId]
);

export const selectLoading = createSelector([selectUsersRoot], (usersState) => usersState.loading);
export const selectError = createSelector([selectUsersRoot], (usersState) => usersState.error);
