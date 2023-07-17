import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import {
  GameModeEnum,
  ISettings,
  setIsTime,
  setCountCards,
  setFullPackage,
  setMode,
  setRandomCards,
  setTimer,
  TypeMemorizeEnum,
  setTypeMemorize,
} from "../redux/slices/SettingsSlice";
import { ModeTheme } from "../redux/slices/InterfaceSlice";

export const loadingSettings = (dispatch: Dispatch<AnyAction>) => {
  if (localStorage.getItem("firstLoading") !== "1") {
    setDefaultSettings();
    localStorage.setItem("firstLoading", "1");
  } else {
    let x: ISettings = getSettings();
    dispatch(setIsTime(x.isTime));
    dispatch(setCountCards(x.countCards));
    dispatch(setFullPackage(x.fullPackage));
    dispatch(setMode(x.gameMode));
    dispatch(setRandomCards(x.randomCards));
    dispatch(setTimer(x.timer));
    dispatch(setTypeMemorize(x.typeMemorize));
  }
};

export const setSettings = (settings: ISettings) => {
  setCountCardsSetting(settings.countCards);
  setPackageSetting(settings.fullPackage);
  setModeSetting(settings.gameMode);
  setRandomSetting(settings.randomCards);
  setIsTimeSetting(settings.isTime);
  setTimeSetting(settings.timer);
  setTypeSetting(settings.typeMemorize);
};

export const setDefaultSettings = () => {
  localStorage.setItem("gameMode", GameModeEnum.MODE_READ);
  localStorage.setItem("time", "0");
  localStorage.setItem("countCards", "10");
  localStorage.setItem("fullPackage", "true");
  localStorage.setItem("randomCards", "false");
  localStorage.setItem("isTime", "false");
  localStorage.setItem("typeMemorize", TypeMemorizeEnum.FOUR_CARD);
  localStorage.setItem("theme", "light");
};

export const setModeSetting = (mode: GameModeEnum) => {
  localStorage.setItem("gameMode", mode);
};
export const setTypeSetting = (typeMemorize: TypeMemorizeEnum) => {
  localStorage.setItem("typeMemorize", typeMemorize);
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
export const getTypeSetting = (): TypeMemorizeEnum => {
  let x = localStorage.getItem("typeMemorize") as TypeMemorizeEnum;
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
    typeMemorize: getTypeSetting(),
  };
  return x;
};

export const setThemeSetting = (theme: ModeTheme) => {  
  switch (theme) {
    case ModeTheme.LIGHT_THEME:
      localStorage.setItem("theme", ModeTheme.LIGHT_THEME);
      break;
    case ModeTheme.DARK_THEME:
      localStorage.setItem("theme", ModeTheme.DARK_THEME);
      break;
  }
};

export const getThemeSetting = () => {
  return localStorage.getItem("theme");
}
