import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AuthUI from "../Auth/AuthUI";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setSubjects } from "../../redux/slices/SubjectsSlice";
import MainSettings from "./MainSettings";
import { getSubjectsData } from "../../utils/localUserData";
import { useDispatch } from "react-redux";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);
  const { email } = useSelector((state: RootState) => state.user);
  const { subjects } = useSelector((state: RootState) => state.subjects);

  React.useEffect(() => {
    if (email !== "login") {
      if (subjects.length === 0) {
        let subjects = getSubjectsData();
        if (subjects) {
          dispatch(setSubjects(subjects));
        }
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
          <MainSettings />
        </Toolbar>
      </AppBar>
      <AuthUI isOpen={isOpen} setIsOpen={setIsOpen} />
    </Box>
  );
};

export default Header;
