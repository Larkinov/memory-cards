import React from "react";
import Header from "./components/Header";
import Grid from "@mui/material/Grid/Grid";
import { Box } from "@mui/material";

import ListSubjects from "./components/ListSubjects";
import PanelCards from "./components/PanelCards";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Box height={"90vh"} mt={"10px"}>
        <Grid
          container
          spacing={2}
          height={"100%"}
        >
          <ListSubjects />
          <PanelCards />
        </Grid>
      </Box>
    </div>
  );
};

export default App;
