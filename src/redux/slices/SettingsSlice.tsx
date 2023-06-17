import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export enum GameModeEnum {
    MODE_READ = "MODE_READ",
    MODE_MEMORIZE = "MODE_MEMORIZE",
}

export interface ISettings{
    gameMode:GameModeEnum,
    timer:number;
}

const initialState:ISettings = {
    gameMode:GameModeEnum.MODE_READ,
    timer:0,
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
        }
    },
})

export const {setMode, setTimer} = settingsSlice.actions;

export default settingsSlice.reducer;