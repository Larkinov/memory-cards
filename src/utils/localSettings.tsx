import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import {
  GameModeEnum,
  ISettings,
  setIsTime,
  setCountCards,
  setFullPackage,
  setMode,
  setRandomCards,
  setTimer
} from "../redux/slices/SettingsSlice";

export const loadingSettings = (dispatch: Dispatch<AnyAction>) => {
  if (localStorage.getItem("firstLoading") !== "1") {
    setDefaultSettings();
    localStorage.setItem("firstLoading","1")
  } else {
    let x: ISettings = getSettings();
    dispatch(setIsTime(x.isTime));
    dispatch(setCountCards(x.countCards));
    dispatch(setFullPackage(x.fullPackage));
    dispatch(setMode(x.gameMode));
    dispatch(setRandomCards(x.randomCards));
    dispatch(setTimer(x.timer));
  }
};

export const setSettings = (settings: ISettings) => {
  setCountCardsSetting(settings.countCards);
  setPackageSetting(settings.fullPackage);
  setModeSetting(settings.gameMode);
  setRandomSetting(settings.randomCards);
  setIsTimeSetting(settings.isTime);
  setTimeSetting(settings.timer);
};

export const setDefaultSettings = () => {
  localStorage.setItem("gameMode", GameModeEnum.MODE_READ);
  localStorage.setItem("time", "0");
  localStorage.setItem("countCards", "10");
  localStorage.setItem("fullPackage", "true");
  localStorage.setItem("randomCards", "false");
  localStorage.setItem("isTime", "false");
};

export const setModeSetting = (mode: GameModeEnum) => {
  localStorage.setItem("gameMode", mode);
};
export const setTimeSetting = (time: number) => {
  localStorage.setItem("time", String(time));
};
export const setCountCardsSetting = (countCards: number) => {
  localStorage.setItem("countCards", String(countCards));
};
export const setPackageSetting = (fullPackage: boolean) => {
  let x;
  if (fullPackage) x = "true";
  else x = "false";
  localStorage.setItem("fullPackage", x);
};
export const setRandomSetting = (randomCards: boolean) => {
  let x;
  if (randomCards) x = "true";
  else x = "false";
  localStorage.setItem("randomCards", x);
};
export const setIsTimeSetting = (isTime: boolean) => {
  let x;
  if (isTime) x = "true";
  else x = "false";
  localStorage.setItem("isTime", x);
};

export const getModeSetting = (): GameModeEnum => {
  let x = localStorage.getItem("gameMode") as GameModeEnum;
  return x;
};
export const getTimeSetting = (): number => {
  let x = Number(localStorage.getItem("time"));
  return x;
};
export const getCountCardsSetting = (): number => {
  let x = Number(localStorage.getItem("countCards"));
  return x;
};
export const getPackageSetting = (): boolean => {
  let x = localStorage.getItem("fullPackage");
  if (x === "true") return true;
  else return false;
};
export const getRandomSetting = (): boolean => {
  let x = localStorage.getItem("randomCards");
  if (x === "true") return true;
  else return false;
};
export const getIsTimeSetting = (): boolean => {
  let x = localStorage.getItem("isTime");
  if (x === "true") return true;
  else return false;
};

export const getSettings = (): ISettings => {
  let x: ISettings = {
    gameMode: getModeSetting(),
    timer: getTimeSetting(),
    countCards: getCountCardsSetting(),
    fullPackage: getPackageSetting(),
    randomCards: getRandomSetting(),
    isTime: getIsTimeSetting(),
  };
  return x;
};
