import React from "react";
import Grid from "@mui/material/Grid/Grid";

import CountCard from "../Settings/CountCard";
import ModeGame from "../Settings/ModeGame";
import Timer from "../Settings/Timer";
import RandomCard from "../Settings/RandomCard";
import InfoSettings from "../UI/InfoSettings";

const SettingsTab: React.FC = () => {
  return (
    <Grid container sx={{ overflow: "auto" }} p={1} spacing={2} mt={0}>
      <InfoSettings/>
      <ModeGame />
      <CountCard />
      <RandomCard/>
      <Timer />
    </Grid>
  );
};

export default SettingsTab;
