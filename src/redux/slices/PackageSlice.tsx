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
  thisCardId: number;
  thisName: string;
  thisDesc?: string;
}

const initialState: IPackage = {
  name: "",
  type: TypePackageEnum.SIMPLE_PACK,
  cards: [],
  thisCardId: 0,
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
      let x = state.cards.filter((elem)=>{
        if(elem.id===action.payload){
          return false;
        } else{
          return true;
        }
      })
      state.cards = x;
    },

    setThisCardId: (state, action: PayloadAction<number>) => {
      state.thisCardId = action.payload;
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
      state.thisCardId = 0;
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
  setThisCardId,
  clearInitialState,
} = PackageSlice.actions;

export default PackageSlice.reducer;
