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
  setIdSubject,
  setSubject,
} from "../redux/slices/SubjectsSlice";
import { clearInitialState } from "../redux/slices/PackageSlice";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const ListSubjects: React.FC = () => {
  const dispatch = useDispatch();
  const { subjects } = useSelector((state: RootState) => state.subjects);
  const [open, setOpen] = React.useState(false);

  const onClickSubject = (elem: TSubject, id: number) => {
    dispatch(setIdSubject(id));
    // dispatch(setSubject(elem));
  };

  const openAddPanel = () => {
    setOpen(true);
    dispatch(clearInitialState());
  };

  

  return (
    <Grid item xl={2} md={3} xs={4} sx={{ height: "100%" }}>
      <List
        sx={{ height: "100%", border: "1px solid lightgray", overflow: "auto" }}
      >
        <Typography variant="h6" align="center" fontWeight={400}>
          Темы
        </Typography>

        {subjects.map(
          (elem, index) =>
            elem.title && (
              <ListItem disablePadding key={index}>
                <ListItemButton
                  onClick={() => onClickSubject(elem as TSubject, index)}
                >
                  <ListItemText primary={elem.title} />
                </ListItemButton>
              </ListItem>
            )
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
