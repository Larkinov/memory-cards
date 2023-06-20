import styles from "./MainTabs.module.scss";
import React from "react";
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

import CardsTab from "./CardsTab";
import SettingsTab from "./SettingsTab";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className={styles.tabPanel}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MainTabs: React.FC = () => {
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
              style={{ textDecoration: "none", color: "inherit", marginTop:"10px" }}
            >
              <Button color="success" variant="contained">
                Начать
              </Button>
            </Link>

            <Tab label="Карточки" {...a11yProps(1)} />
            <Tab label="Настройки" {...a11yProps(2)} />
            <Tab label="Редактировать" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={1}>
          <CardsTab />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SettingsTab />
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Three
        </TabPanel>
      </Grid>
    </Grid>
  );
};

export default MainTabs;
