import React from "react";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

import CardsTab from "./CardsTab/CardsTab";
import SettingsTab from "./Settings/SettingsTab";
import TabPanel from "./UI/TabPanel";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MainPanel: React.FC = () => {
  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      item
      xl={10}
      md={9}
      xs={8}
      sx={{ height: "100%", position: "relative" }}
    >
      <Grid item xs={12} sx={{ height: "100%", mb: "100px" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Link
              to={"game"}
              style={{
                textDecoration: "none",
                color: "inherit",
                marginTop: "10px",
              }}
            >
              <Button color="success" variant="contained">
                Начать
              </Button>
            </Link>

            <Tab label="Карточки" {...a11yProps(1)} />
            <Tab label="Настройки" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={1}>
          <CardsTab />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SettingsTab />
        </TabPanel>
      </Grid>
    </Grid>
  );
};

export default MainPanel;
