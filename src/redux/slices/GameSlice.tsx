import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Card } from "./PackageSlice";


export interface IGame {
  gameCards:Card[];
  endGame:boolean;
  endRead:boolean;
  victory:boolean;
}

const initialState: IGame = {
    endGame:false,
    endRead:false,
    victory:false,
    gameCards:[],
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
    setGameCards: (state, action: PayloadAction<Card[]>) => {
      state.gameCards = action.payload;
    },
  },
});

export const {
  setEndGame,
  setEndRead,
  setVictory,
  setGameCards
} = gameSlice.actions;

export default gameSlice.reducer;
