import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLoading: false,
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsersToStore: (state, actions) => {
      const { users, loaded } = actions.payload;
      state.users = users;
      state.isLoading = loaded;
    },
  },
});

export const { addUsersToStore } = usersSlice.actions;
export default usersSlice.reducer;