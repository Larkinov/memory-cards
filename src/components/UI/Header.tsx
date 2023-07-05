import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AuthUI from "../Auth/AuthUI";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { getUserData } from "../../utils/localUserData";
import { IUser, setUser } from "../../redux/slices/UserSlice";
import { useDispatch } from "react-redux";
import { fetchPackageDB } from "../../redux/slices/SubjectsSlice";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  const { email } = useSelector((state: RootState) => state.user);
  const [login, setLogin] = React.useState("login");

  React.useEffect(() => {
    
    if (getUserData()) {
      let login = localStorage.getItem("email");
      if (login) {
        let userID: string | null = localStorage.getItem("userID");
        dispatch(
          setUser({
            email: login.slice(0, login.indexOf("@", 0)),
            id: userID,
            token: "",
          } as IUser)
        );
        setLogin(login.slice(0, login.indexOf("@", 0)));

        if (userID) {
          appDispatch(fetchPackageDB(userID));
        }
      }
    } else {
      if (email) {
        let login = email;
        setLogin(login.slice(0, login.indexOf("@", 0)));
      } else {
        setLogin("login");
      }
    }
  }, [email]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
              Memory Cards
            </Link>
          </Typography>
          <Button color="inherit" onClick={() => setIsOpen(true)}>
            {login}
          </Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: "5px" }}
          >
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <AuthUI isOpen={isOpen} setIsOpen={setIsOpen} />
    </Box>
  );
};

export default Header;
