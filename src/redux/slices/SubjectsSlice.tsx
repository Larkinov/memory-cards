import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Card, TypePackageEnum } from "./PackageSlice";
import { collection, doc, setDoc } from "firebase/firestore";
import { storage } from "../../firebase";

export type TSubject = {
  title: string;
  type: TypePackageEnum;
  cards: Card[];
  id: string;
};

export interface ISubjects {
  subjects: TSubject[];
  thisSubjectId: string;
  idUser: string;
}

const initialState: ISubjects = {
  subjects: [],
  thisSubjectId: "",
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
      state.subjects.push(action.payload);
    },
    setIdSubject: (state, action: PayloadAction<string>) => {
      state.thisSubjectId = action.payload;
    },
    setIdUser: (state, action: PayloadAction<string>) => {
      state.idUser = action.payload;
    },
    clearSubjects: (state) => {
      state.idUser = "";
      state.subjects = [];
      state.thisSubjectId = "";
    },
  },
});

export const {
  setSubject,
  setIdSubject,
  clearSubjects,
  setIdUser,
} = subjectsSlices.actions;

export default subjectsSlices.reducer;
