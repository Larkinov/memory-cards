import * as React from "react";
import SettingsIcon from "@mui/icons-material/Settings";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, createTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { ModeTheme, setTheme } from "../../redux/slices/InterfaceSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setThemeSetting } from "../../utils/localSettings";

export default function MainSettings() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const {theme} = useSelector((state:RootState)=>state.interfaceUI);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickTheme = () => {
    if(theme === ModeTheme.DARK_THEME){
      dispatch(setTheme(ModeTheme.LIGHT_THEME));
      setThemeSetting(ModeTheme.LIGHT_THEME);
    }else{
      dispatch(setTheme(ModeTheme.DARK_THEME));
      setThemeSetting(ModeTheme.DARK_THEME);
    }
  };

  React.useEffect(()=>{ 
  },[theme])

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <SettingsIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => onClickTheme()}>{theme===ModeTheme.DARK_THEME ? "Светлая тема" : "Темная тема"}</MenuItem>
      </Menu>
    </div>
  );
}
