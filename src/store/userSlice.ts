import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../types/UserSlice";

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  isAdmin: false,

};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ name: string; email: string , role:string}>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isAdmin = action.payload.role === "ADMIN"

    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;