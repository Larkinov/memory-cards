import * as React from "react";
import SettingsIcon from "@mui/icons-material/Settings";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton, createTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { setTheme } from "../../redux/slices/InterfaceSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function MainSettings() {
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const isDark = React.useRef(false);
  const dispatch = useDispatch();
  const {theme} = useSelector((state:RootState)=>state.interfaceUI);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickTheme = () => {
    
    if (isDark.current) {
      dispatch(setTheme(darkTheme));
    } else {        
      dispatch(setTheme(lightTheme));
    }
  };

  React.useEffect(()=>{
    isDark.current = !isDark.current;    
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
        <MenuItem onClick={() => onClickTheme()}>Темная тема</MenuItem>
      </Menu>
    </div>
  );
}
