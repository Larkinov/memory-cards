import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum ModeTheme {
  DARK_THEME = "DARK_THEME",
  LIGHT_THEME = "LIGHT_THEME",
}

export interface IGame {
  currentTab: number;
  theme:ModeTheme;
}

const initialState: IGame = {
  currentTab: 1,
  theme:localStorage.getItem("theme") as ModeTheme,
};

export const InterfaceSlice = createSlice({
  name: "interfaceUI",
  initialState,
  reducers: {
    setCurrentTab: (state, action: PayloadAction<number>) => {
      state.currentTab = action.payload;
    },
    setTheme: (state, action: PayloadAction<ModeTheme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setCurrentTab, setTheme } = InterfaceSlice.actions;

export default InterfaceSlice.reducer;
