import { useMediaQuery, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ModeTheme } from "../../redux/slices/InterfaceSlice";
import { FontEnum, getTheme } from "../../utils/getTheme";

const useMyTheme = () => {
  let themeState = useTheme();
  const matchesMD = useMediaQuery(themeState.breakpoints.up("md"));
  const matchesSM = useMediaQuery(themeState.breakpoints.up("sm"));
  const matchesXS = useMediaQuery(themeState.breakpoints.up("xs"));

  const { theme } = useSelector((state: RootState) => state.interfaceUI);

  switch (theme) {
    case ModeTheme.DARK_THEME:
      if (matchesMD) {
        themeState = getTheme(true, FontEnum.MD_FONT);
      } else {
        if (matchesSM) {
          themeState = getTheme(true, FontEnum.SM_FONT);
        } else {
          if (matchesXS) {
            themeState = getTheme(true, FontEnum.XS_FONT);
          } else {
            themeState = getTheme(true);
          }
        }
      }
      break;
    case ModeTheme.LIGHT_THEME:
      if (matchesMD) {
        themeState = getTheme(false, FontEnum.MD_FONT);
      } else {
        if (matchesSM) {
          themeState = getTheme(false, FontEnum.SM_FONT);
        } else {
          if (matchesXS) {
            themeState = getTheme(false, FontEnum.XS_FONT);
          } else {
            themeState = getTheme(false);
          }
        }
      }
  }
  return themeState;
};

export default useMyTheme;
