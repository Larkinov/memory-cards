import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum GameModeEnum {
  MODE_READ = "MODE_READ",
  MODE_MEMORIZE = "MODE_MEMORIZE",
}

export enum TypeMemorizeEnum {
  FOUR_CARD = "FOUR_CARD",
}

export interface ISettings {
  gameMode: GameModeEnum;
  timer: number;
  isTime: boolean;
  countCards: number;
  fullPackage: boolean;
  randomCards: boolean;
  typeMemorize: TypeMemorizeEnum;
}

const initialState: ISettings = {
  gameMode: GameModeEnum.MODE_READ,
  timer: 120,
  isTime: false,
  countCards: 10,
  fullPackage: true,
  randomCards: false,
  typeMemorize: TypeMemorizeEnum.FOUR_CARD,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<GameModeEnum>) => {
      state.gameMode = action.payload;
    },
    setTimer: (state, action: PayloadAction<number>) => {
      state.timer = action.payload;
    },
    setCountCards: (state, action: PayloadAction<number>) => {
      state.countCards = action.payload;
    },
    setFullPackage: (state, action: PayloadAction<boolean>) => {
      state.fullPackage = action.payload;
    },
    setRandomCards: (state, action: PayloadAction<boolean>) => {
      state.randomCards = action.payload;
    },
    setIsTime: (state, action: PayloadAction<boolean>) => {
      state.isTime = action.payload;
    },
    setTypeMemorize: (state, action: PayloadAction<TypeMemorizeEnum>) => {
      state.typeMemorize = action.payload;
    },
  },
});

export const {
  setMode,
  setIsTime,
  setTimer,
  setCountCards,
  setFullPackage,
  setRandomCards,
  setTypeMemorize,
} = settingsSlice.actions;

export default settingsSlice.reducer;
