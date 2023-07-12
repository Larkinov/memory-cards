import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Card } from "./PackageSlice";


export interface IGame {
  endGame:boolean;
  endRead:boolean;
  victory:boolean;
}

const initialState: IGame = {
    endGame:false,
    endRead:false,
    victory:false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setEndGame: (state, action: PayloadAction<boolean>) => {
      state.endGame = action.payload;
    },
    setEndRead: (state, action: PayloadAction<boolean>) => {
      state.endRead = action.payload;
    },
    setVictory: (state, action: PayloadAction<boolean>) => {
      state.victory = action.payload;
    },

  },
});

export const {
  setEndGame,
  setEndRead,
  setVictory
} = gameSlice.actions;

export default gameSlice.reducer;
