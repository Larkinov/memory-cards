import React from "react";
import Grid from "@mui/material/Grid/Grid";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const ListSubjects: React.FC = () => {
  return (
    <Grid item xl={2} md={3} xs={4} sx={{ height: "100%" }}>
      <List
        sx={{ height: "100%", border: "1px solid lightgray", overflow: "auto" }}
      >
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Тема 2" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Тема 2" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <IconButton
            size="large"
            color="success"
            sx={{ position: "absolute", left: "40%", top: "40%",}}
          >
            <AddCircleIcon />
          </IconButton>
        </ListItem>
      </List>
    </Grid>
  );
};

export default ListSubjects;
