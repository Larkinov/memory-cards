import React from "react";
import Grid from "@mui/material/Grid/Grid";

import CountCard from "./CountCard";
import ModeGame from "./ModeGame";
import Timer from "./Timer";
import RandomCard from "./RandomCard";
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

export default React.memo(SettingsTab);
