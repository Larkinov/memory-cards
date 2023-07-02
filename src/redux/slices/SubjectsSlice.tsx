import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Card, TypePackageEnum } from "./PackageSlice";
import { collection, doc, setDoc } from "firebase/firestore";
import { storage } from "../../firebase";

export type TSubject = {
  title: string;
  type: TypePackageEnum;
  cards: Card[];
  id: number;
};

export interface ISubjects {
  subjects: TSubject[];
  thisSubjectId: number;
  idUser: string;
}

const initialState: ISubjects = {
  subjects: [
    { title: "", type: TypePackageEnum.SIMPLE_PACK, cards: [], id: 0 },
  ],
  thisSubjectId: 0,
  idUser: "",
};

type TthunkPackage = {
  subject: TSubject;
  id: string;
};

export const setPackageDB = createAsyncThunk(
  "subjects/setPackageDB",
  async (args: TthunkPackage) => {
    const packagesRef = collection(storage, "packages");
    try {
      await setDoc(doc(packagesRef, args.id), {
        title: args.subject.title,
        type: args.subject.type,
      });
    } catch (error) {
      console.log(error);
    }
  }
);

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
    setIdUser: (state, action: PayloadAction<string>) => {
      state.idUser = action.payload;
    },
  },
});

export const { setSubject, setIdSubject } = subjectsSlices.actions;

export default subjectsSlices.reducer;
