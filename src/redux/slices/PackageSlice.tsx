import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum TypePackageEnum {
  SIMPLE_PACK = "SIMPLE_PACK",
  WITH_DESCRIPTION = "WITH_DESCRIPTION",
}

export type Card = {
  name: string;
  description?: string;
  id: number;
};

export interface IPackage {
  name: string;
  type: TypePackageEnum;
  cards: Card[];
  thisId: number;
  thisName: string;
  thisDesc?: string;
}

const initialState: IPackage = {
  name: "",
  type: TypePackageEnum.SIMPLE_PACK,
  cards: [],
  thisId: 0,
  thisName: "",
  thisDesc: "",
};

export const PackageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setType: (state, action: PayloadAction<TypePackageEnum>) => {
      state.type = action.payload;
    },
    pushCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },
    removeCard: (state, action: PayloadAction<number>) => {
      state.cards.splice(action.payload, 1);
    },

    setThisId: (state, action: PayloadAction<number>) => {
      state.thisId = action.payload;
    },
    setThisName: (state, action: PayloadAction<string>) => {
      state.thisName = action.payload;
    },
    setThisDesc: (state, action: PayloadAction<string>) => {
      state.thisDesc = action.payload;
    },
    clearInitialState: (state) => {
      state.name = "";
      state.type = TypePackageEnum.SIMPLE_PACK;
      state.cards = [];
      state.thisId = 0;
      state.thisName = "";
      state.thisDesc = "";
    },
  },
});

export const {
  setName,
  setType,
  pushCard,
  removeCard,
  setThisDesc,
  setThisName,
  setThisId,
  clearInitialState,
} = PackageSlice.actions;

export default PackageSlice.reducer;
