import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Card, TypePackageEnum } from "./PackageSlice";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
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
  statusDeletePackage: StatusProcess;
}

const initialState: ISubjects = {
  subjects: [],
  thisSubjectId: "",
  idUser: "",
  statusSetPackage: StatusProcess.EMPTY,
  statusFetchPackage: StatusProcess.EMPTY,
  statusDeletePackage: StatusProcess.EMPTY,
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
      idSubject: args.idSubject,
    });
    let pack = {
      subject: args.subject,
      id: args.idSubject,
    };
    return pack;
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

export const deletePackageDB = createAsyncThunk(
  "subjects/deletePackageDB",
  async (idDoc: string) => {
    await deleteDoc(doc(storage, "packages", idDoc));
    return idDoc;
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
    setStatusDeletePackage: (state, action: PayloadAction<StatusProcess>) => {
      state.statusDeletePackage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setPackageDB.pending, (state) => {
      state.statusSetPackage = StatusProcess.LOADING;
    });
    builder.addCase(setPackageDB.fulfilled, (state, action) => {
      state.statusSetPackage = StatusProcess.SUCCESS;
      let pack = action.payload;
      state.subjects.push({
        id: pack.id,
        cards: pack.subject.cards,
        type: pack.subject.type,
        title: pack.subject.title,
      });
    });
    builder.addCase(setPackageDB.rejected, (state) => {
      state.statusSetPackage = StatusProcess.ERROR;
    });
    builder.addCase(fetchPackageDB.pending, (state) => {
      state.statusFetchPackage = StatusProcess.LOADING;
    });
    builder.addCase(fetchPackageDB.fulfilled, (state, action) => {
      state.statusFetchPackage = StatusProcess.SUCCESS;
      action.payload.map((subject) => {
        let sub: TSubject = {
          type: subject.type,
          title: subject.title,
          cards: subject.cards,
          id: subject.idSubject,
        };
        state.subjects.push(sub);
      });
    });
    builder.addCase(fetchPackageDB.rejected, (state) => {
      state.statusFetchPackage = StatusProcess.ERROR;
    });
    builder.addCase(deletePackageDB.fulfilled, (state, action) => {
      state.statusDeletePackage = StatusProcess.SUCCESS;
      state.subjects = state.subjects.filter((sub) => {
        if (sub.id !== action.payload) {
          return true;
        } else {
          return false;
        }
      });
    });
    builder.addCase(deletePackageDB.rejected, (state) => {
      state.statusDeletePackage = StatusProcess.ERROR;
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
  setStatusDeletePackage,
} = subjectsSlices.actions;

export default subjectsSlices.reducer;
