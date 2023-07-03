import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Card, TypePackageEnum } from "./PackageSlice";
import { collection, doc, setDoc } from "firebase/firestore";
import { storage } from "../../firebase";

export enum StatusProcess {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

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
  statusSetPackage: StatusProcess;
}

const initialState: ISubjects = {
  subjects: [],
  thisSubjectId: "",
  idUser: "",
  statusSetPackage: StatusProcess.LOADING,
};

export type TthunkPackage = {
  subject: TSubject;
  idPackage: string;
};

export const setPackageDB = createAsyncThunk(
  "subjects/setPackageDB",
  async (args: TthunkPackage) => {
    await setDoc(doc(storage, "packages", args.idPackage), {
      title: args.subject.title,
      type: args.subject.type,
      cards: args.subject.cards,
    });
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
  extraReducers: (builder) => {
    builder.addCase(setPackageDB.pending, (state) => {
      state.statusSetPackage = StatusProcess.LOADING;
      console.log("loading");
    });
    builder.addCase(setPackageDB.fulfilled, (state, action) => {
      state.statusSetPackage = StatusProcess.SUCCESS;
      // state.items = action.payload;
      console.log("success");
    });
    builder.addCase(setPackageDB.rejected, (state, action) => {
      state.statusSetPackage = StatusProcess.ERROR;
      console.log("error", action.error);
    });
  },
});

export const { setSubject, setIdSubject, clearSubjects, setIdUser } =
  subjectsSlices.actions;

export default subjectsSlices.reducer;
