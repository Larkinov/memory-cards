import React from "react";
import { useDispatch } from "react-redux";

import Grid from "@mui/material/Grid/Grid";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Typography from "@mui/material/Typography";

import AddPackage from "./AddPackage/AddPackage";
import {
  TSubject,
  clearSubjects,
  setIdSubject,
} from "../redux/slices/SubjectsSlice";
import { clearInitialState } from "../redux/slices/PackageSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setCurrentTab } from "../redux/slices/InterfaceSlice";

const ListSubjects: React.FC = () => {
  const dispatch = useDispatch();
  const { subjects } = useSelector((state: RootState) => state.subjects);
  const [open, setOpen] = React.useState(false);
  const { email } = useSelector((state: RootState) => state.user);

  const onClickSubject = (elem: TSubject) => {
    dispatch(setIdSubject(elem.id));
    dispatch(setCurrentTab(1));
  };

  const openAddPanel = () => {
    setOpen(true);
    dispatch(clearInitialState());
  };

  React.useEffect(() => {
    if (email) {
    } else {
      dispatch(clearSubjects());
    }
  }, [email]);

  return (
    <Grid item xl={2} md={3} xs={4} sx={{ height: "100%" }}>
      <List
        sx={{ height: "100%", border: "1px solid lightgray", overflow: "auto", ml:"10px"}}
      >
        <Typography variant="h6" align="center" fontWeight={400}>
          Темы
        </Typography>
        {email ? (
          <>
            {subjects.map(
              (elem, index) =>
                elem.title && (
                  <ListItem disablePadding key={index}>
                    <ListItemButton
                      onClick={() => onClickSubject(elem as TSubject)}
                    >
                      <ListItemText primary={elem.title} />
                    </ListItemButton>
                  </ListItem>
                )
            )}
          </>
        ) : (
          <Typography variant="body1" align="center" fontWeight={400}>
            Добавьте первый пакет!
          </Typography>
        )}

        <ListItem disablePadding>
          <IconButton
            size="large"
            color="success"
            sx={{ position: "absolute", left: "40%", top: "40%" }}
            onClick={() => openAddPanel()}
          >
            <AddCircleIcon />
          </IconButton>
        </ListItem>
      </List>
      <AddPackage isOpen={open} setOpen={setOpen} />
    </Grid>
  );
};

export default ListSubjects;
