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

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);


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
            Login
          </Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
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
