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
import { fetchPackageDB } from "../../redux/slices/SubjectsSlice";

const Header: React.FC = () => {
  const appDispatch = useAppDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  const { email, id } = useSelector((state: RootState) => state.user);
  const { subjects } = useSelector((state: RootState) => state.subjects);
  
  React.useEffect(() => {
    if (email !== "login") {
      if (subjects.length === 0) {
        appDispatch(fetchPackageDB(id));
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
            {email}
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
