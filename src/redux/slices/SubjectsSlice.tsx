import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Card, TypePackageEnum } from "./PackageSlice";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { storage } from "../../firebase";

export enum StatusProcess {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
  EMPTY = "empty",
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
  statusFetchPackage: StatusProcess;
}

const initialState: ISubjects = {
  subjects: [],
  thisSubjectId: "",
  idUser: "",
  statusSetPackage: StatusProcess.EMPTY,
  statusFetchPackage: StatusProcess.EMPTY,
};

export type TthunkPackage = {
  subject: TSubject;
  idUser: string;
  idSubject: string;
};

export const setPackageDB = createAsyncThunk(
  "subjects/setPackageDB",
  async (args: TthunkPackage) => {
    await setDoc(doc(storage, "packages", args.idSubject), {
      title: args.subject.title,
      type: args.subject.type,
      cards: args.subject.cards,
      idUser: args.idUser,
    });
    return args.subject;
  }
);

export const fetchPackageDB = createAsyncThunk(
  "subjects/fetchPackageDB",
  async (idUser: string) => {
    const q = query(
      collection(storage, "packages"),
      where("idUser", "==", idUser)
    );
    const querySnapshot = await getDocs(q);
    let docs: Array<any> = [];
    querySnapshot.forEach((doc) => {
      docs.push(doc.data());
    });
    return docs;
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
    setStatusSetPackage: (state, action: PayloadAction<StatusProcess>) => {
      state.statusSetPackage = action.payload;
    },
    setStatusFetchPackage: (state, action: PayloadAction<StatusProcess>) => {
      state.statusFetchPackage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setPackageDB.pending, (state) => {
      state.statusSetPackage = StatusProcess.LOADING;
    });
    builder.addCase(setPackageDB.fulfilled, (state, action) => {
      state.statusSetPackage = StatusProcess.SUCCESS;
      state.subjects.push(action.payload);
    });
    builder.addCase(setPackageDB.rejected, (state) => {
      state.statusSetPackage = StatusProcess.ERROR;
    });
    builder.addCase(fetchPackageDB.pending, (state, action) => {
      state.statusFetchPackage = StatusProcess.LOADING;
      
    });
    builder.addCase(fetchPackageDB.fulfilled, (state, action) => {
      state.statusFetchPackage = StatusProcess.SUCCESS;
      action.payload.map((subject,index)=>{
        let sub:TSubject = {
          type:subject.type,
          title:subject.title,
          cards:subject.cards,
          id:subject.idUser+"id"+index,
        }
        state.subjects.push(sub);
      })
    });
    builder.addCase(fetchPackageDB.rejected, (state, action) => {
      state.statusFetchPackage = StatusProcess.ERROR;
      console.log("error", action.error);
    });
  },
});

export const {
  setSubject,
  setIdSubject,
  clearSubjects,
  setIdUser,
  setStatusFetchPackage,
  setStatusSetPackage,
} = subjectsSlices.actions;

export default subjectsSlices.reducer;
