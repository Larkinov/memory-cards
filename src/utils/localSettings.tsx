import { GameModeEnum } from "../redux/slices/SettingsSlice";
export const setDefaultSettings = () => {
  localStorage.setItem("gameMode", GameModeEnum.MODE_READ);
  localStorage.setItem("time", "0");
  localStorage.setItem("countCards", "10");
  localStorage.setItem("fullPackage", "true");
  localStorage.setItem("randomCards", "false");
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
export const setFullSetting = (fullPackage: boolean) => {
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
export const getFullSetting = (): boolean => {
  let x = localStorage.getItem("fullPackage");
  if (x === "true") return true;
  else return false;
};
export const getRandomSetting = (): boolean => {
  let x = localStorage.getItem("randomCards");
  if (x === "true") return true;
  else return false;
};
