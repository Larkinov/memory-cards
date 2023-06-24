import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Card, TypePackageEnum } from "./PackageSlice";

export interface ISubject{
    title: string;
    type:TypePackageEnum;
    cards:Card[];
}

const initialState:ISubject = {
    title:"",
    type:TypePackageEnum.SIMPLE_PACK,
    cards:[],
} 

export const subjectsSlices = createSlice({
    name:"subjects",
    initialState,
    reducers:{
        setSubject:(state,action:PayloadAction<ISubject>)=> {
            state.title = action.payload.title;
            state.type = action.payload.type;
            state.cards = action.payload.cards;
        }
    },
})

export const {setSubject} = subjectsSlices.actions;

export default subjectsSlices.reducer;