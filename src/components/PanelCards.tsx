import React from "react";
import Grid from "@mui/material/Grid/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import BasicCard from "./BasicCard";

const PanelCards: React.FC = () => {
  return (
    <Grid
      container
      sx={{overflow: "auto",}}
      p={1}
      spacing={1}
      mt={0}
    >
      <Grid item xs={4}>
        <BasicCard />
      </Grid>
      <Grid item xs={4}>
        <BasicCard />
      </Grid>
      <Grid item xs={4}>
        <BasicCard />
      </Grid>
      <Grid item xs={4}>
        <BasicCard />
      </Grid>
      <Grid item xs={4}>
        <BasicCard />
      </Grid>
      <Grid item xs={4}>
        <BasicCard />
      </Grid>
      <Grid item xs={4}>
        <BasicCard />
      </Grid>
      <Grid item xs={4}>
        <BasicCard />
      </Grid>
      <Grid item xs={4}>
        <BasicCard />
      </Grid>
      <Grid item xs={4}>
        <BasicCard />
      </Grid>
      <Grid item xs={4}>
        <BasicCard />
      </Grid>
      <Grid item xs={4}>
        <BasicCard />
      </Grid>
      <Grid item xs={4}>
        <BasicCard />
      </Grid>
    </Grid>
  );
};

export default PanelCards;
