import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IGame {
  currentTab: number;
  theme:any;
}

const initialState: IGame = {
  currentTab: 1,
  theme:"",
};

export const InterfaceSlice = createSlice({
  name: "interfaceUI",
  initialState,
  reducers: {
    setCurrentTab: (state, action: PayloadAction<number>) => {
      state.currentTab = action.payload;
    },
    setTheme: (state, action: PayloadAction<any>) => {
      state.theme = action.payload;
    },
  },
});

export const { setCurrentTab, setTheme } = InterfaceSlice.actions;

export default InterfaceSlice.reducer;
