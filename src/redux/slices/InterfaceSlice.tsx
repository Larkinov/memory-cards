import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IGame {
  currentTab: number;
}

const initialState: IGame = {
  currentTab: 1,
};

export const InterfaceSlice = createSlice({
  name: "interfaceUI",
  initialState,
  reducers: {
    setCurrentTab: (state, action: PayloadAction<number>) => {
      state.currentTab = action.payload;
    },
  },
});

export const { setCurrentTab } = InterfaceSlice.actions;

export default InterfaceSlice.reducer;
