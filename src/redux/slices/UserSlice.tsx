import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getEmail, getUserID, setUserData } from "../../utils/localUserData";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { StatusProcess } from "./SubjectsSlice";
import { setUserDB } from "../../firebase";

export interface IUser {
  email: string;
  id: string;
  token: string;
  statusLogOn: StatusProcess;
  statusSignUp: StatusProcess;
  statusExit: StatusProcess;
}

const initialState: IUser = {
  email: getEmail(),
  id: getUserID(),
  token: "",
  statusLogOn: StatusProcess.EMPTY,
  statusSignUp: StatusProcess.EMPTY,
  statusExit: StatusProcess.EMPTY,
};

type TLogOn = {
  email: string;
  pass: string;
};

type TDataUser = {
  email: string;
  id: string;
};

export const logOn = createAsyncThunk(
  "user/logOn",
  async ({ email, pass }: TLogOn) => {
    const auth = getAuth();
    let x: TDataUser = { email: "login", id: "" };
    await signInWithEmailAndPassword(auth, email, pass).then(({ user }) => {
      if (user.email)
        x = {
          id: user.uid,
          email: user.email,
          // token?
        };
    });
    return x;
  }
);

export const signUp = createAsyncThunk(
  "user/signUp",
  async ({ email, pass }: TLogOn) => {
    const auth = getAuth();
    let x: TDataUser = { email: "login", id: "" };
    await createUserWithEmailAndPassword(auth, email, pass).then(({ user }) => {
      if (user.email) {
        x = {
          id: user.uid,
          email: user.email,
          // token?
        };
        setUserDB(user.uid, user.email);
        setUserData(user.uid, user.email);
      }
    });
    return x;
  }
);

export const exitProfile = createAsyncThunk(
  "user/exitProfile",
  async () => {
    const auth = getAuth();
    await   signOut(auth)
    .then(() => {
    });
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
    },

    clearUser: (state) => {
      state.email = "login";
      state.id = "";
      state.token = "";
      state.statusLogOn = StatusProcess.EMPTY;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logOn.pending, (state) => {
      state.statusLogOn = StatusProcess.LOADING;
    });
    builder.addCase(logOn.fulfilled, (state, action) => {
      state.statusLogOn = StatusProcess.SUCCESS;
      let email = action.payload.email;
      state.email = email.slice(0, email.indexOf("@", 0));
      state.id = action.payload.id;
    });
    builder.addCase(logOn.rejected, (state) => {
      state.statusLogOn = StatusProcess.ERROR;
    });
    builder.addCase(signUp.pending, (state) => {
      state.statusSignUp = StatusProcess.LOADING;
      
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.statusSignUp = StatusProcess.SUCCESS;
      let email = action.payload.email;
      state.email = email.slice(0, email.indexOf("@", 0));
      state.id = action.payload.id;
    });
    builder.addCase(signUp.rejected, (state) => {
      state.statusSignUp = StatusProcess.ERROR;
    });
    builder.addCase(exitProfile.pending, (state) => {
      state.statusSignUp = StatusProcess.LOADING;
    });
    builder.addCase(exitProfile.fulfilled, (state) => {
      state.statusSignUp = StatusProcess.SUCCESS;
      state.email="login";
      state.id="";
      state.token="";
      state.statusLogOn= StatusProcess.EMPTY;
      state.statusSignUp= StatusProcess.EMPTY;
    });
    builder.addCase(exitProfile.rejected, (state) => {
      state.statusSignUp = StatusProcess.ERROR;
    });
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
