import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  email: string;
  id: string;
  token: string;
}

const initialState: IUser = {
  email: "",
  id: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
    },

    clearUser: (state) => {
      state.email = "";
      state.id = "";
      state.token = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
