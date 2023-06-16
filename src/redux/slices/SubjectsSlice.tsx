import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Card = {
    name:string;
    description?:string;
}

export interface ISubject{
    title: string;
    type:string;
    cards:Card[];
}

const initialState:ISubject = {
    title:"",
    type:"",
    cards:[],
} 

export const subjectsSlices = createSlice({
    name:"subjects",
    initialState,
    reducers:{
        setSubject:(state,action)=> {
            state.title = action.payload.title;
            state.type = action.payload.type;
            state.cards = action.payload.cards;
        }
    },
})

export const {setSubject} = subjectsSlices.actions;

export default subjectsSlices.reducer;