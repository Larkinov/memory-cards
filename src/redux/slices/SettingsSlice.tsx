import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum GameModeEnum {
    MODE_READ = "MODE_READ",
    MODE_MEMORIZE = "MODE_MEMORIZE",
}

export interface ISettings{
    gameMode:GameModeEnum,
    timer:number;
    countCards:number;
    fullPackage:boolean;
    randomCards:boolean;
}

const initialState:ISettings = {
    gameMode:GameModeEnum.MODE_READ,
    timer:120,
    countCards:10,
    fullPackage:true,
    randomCards:false,
} 

export const settingsSlice = createSlice({
    name:"settings",
    initialState,
    reducers:{
        setMode:(state,action:PayloadAction<GameModeEnum>)=> {
            state.gameMode = action.payload;
        },
        setTimer:(state,action:PayloadAction<number>)=> {
            state.timer = action.payload;
        },
        setCountCards:(state,action:PayloadAction<number>)=> {
            state.countCards = action.payload;
        },
        setFullPackage:(state,action:PayloadAction<boolean>)=> {
            state.fullPackage = action.payload;
        },
        setRandomCards:(state,action:PayloadAction<boolean>)=> {
            state.randomCards = action.payload;
        }
    },
})

export const {setMode, setTimer, setCountCards, setFullPackage, setRandomCards} = settingsSlice.actions;

export default settingsSlice.reducer;