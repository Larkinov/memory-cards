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
import { RootState } from "../../redux/store";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { email } = useSelector((state: RootState) => state.user);
  const [login, setLogin] = React.useState("login");

  React.useEffect(() => {
    if (email) {
      let login = email;
      setLogin(login.slice(0, login.indexOf("@", 0)));
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
