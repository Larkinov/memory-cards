import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Card, TypePackageEnum } from "./PackageSlice";

export type TSubject = {
  title: string;
  type: TypePackageEnum;
  cards: Card[];
  id: number;
};

export interface ISubjects {
  subjects: TSubject[];
  thisSubjectId: number;
}

const initialState: ISubjects = {
  subjects: [
    { title: "", type: TypePackageEnum.SIMPLE_PACK, cards: [], id: 0 },
  ],
  thisSubjectId: 0,
};

export const subjectsSlices = createSlice({
  name: "subjects",
  initialState,
  reducers: {
    setSubject: (state, action: PayloadAction<TSubject>) => {
      state.subjects[state.thisSubjectId].title = action.payload.title;
      state.subjects[state.thisSubjectId].type = action.payload.type;
      state.subjects[state.thisSubjectId].cards = action.payload.cards;
    },
    setIdSubject: (state, action: PayloadAction<number>) => {
      state.thisSubjectId = action.payload;
    },
  },
});

export const { setSubject, setIdSubject } = subjectsSlices.actions;

export default subjectsSlices.reducer;
