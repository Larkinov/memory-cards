import React from "react";
import Grid from "@mui/material/Grid/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import BasicCard from "./BasicCard";

const PanelCards: React.FC = () => {
  return (
    <Grid container item xl={10} md={9} xs={8} sx={{ height: "100%" }}>
      <Grid item xs={12}>
        <Stack
          direction="row"
          justifyContent="center"
          mb={"10px"}
          mt={"5px"}
          spacing={6}
        >
          <Button variant="contained">Начать</Button>
          <Button variant="contained">Режим</Button>
          <Button variant="contained">Редактировать</Button>
        </Stack>
      </Grid>

      <Grid
        container
        sx={{ height: "96%", border: "1px solid lightgray", overflow: "auto" }}
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
    </Grid>
  );
};

export default PanelCards;
