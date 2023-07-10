import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export interface IGame {
  endGame:boolean;
  endRead:boolean;
}

const initialState: IGame = {
    endGame:false,
    endRead:false,
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
  },
});

export const {
  setEndGame,
  setEndRead,
} = gameSlice.actions;

export default gameSlice.reducer;
