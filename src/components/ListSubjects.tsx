import React from "react";
import {useDispatch} from "react-redux";

import Grid from "@mui/material/Grid/Grid";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import data from "../DefaultCardsData.json";
import { ISubject, setSubject } from "../redux/slices/SubjectsSlice";

const ListSubjects: React.FC = () => {

  const dispatch = useDispatch();

  const onClickSubject = (pack:ISubject) => {
    dispatch(setSubject(pack));
  }

  return (
    <Grid item xl={2} md={3} xs={4} sx={{ height: "100%" }}>
      <List
        sx={{ height: "100%", border: "1px solid lightgray", overflow: "auto" }}
      >
        {data.data.map((elem, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton onClick={()=> onClickSubject(elem)}>
              <ListItemText primary={elem.title} />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem disablePadding>
          <IconButton
            size="large"
            color="success"
            sx={{ position: "absolute", left: "40%", top: "40%" }}
          >
            <AddCircleIcon />
          </IconButton>
        </ListItem>
      </List>
    </Grid>
  );
};

export default ListSubjects;
