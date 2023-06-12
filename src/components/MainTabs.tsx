import React from "react";
import Grid from "@mui/material/Grid/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PanelCards from "./PanelCards";

import styles from "./MainTabs.module.scss";
import { Button } from "@mui/material";

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
  const [value, setValue] = React.useState(0);

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
            <Button color="success" variant="contained" >Начать</Button>
            <Tab label="Карточки" {...a11yProps(0)} />
            <Tab label="Режим" {...a11yProps(1)} />
            <Tab label="Редактировать" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={1}>
          <PanelCards />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Three
        </TabPanel>
      </Grid>
    </Grid>
  );
};

export default MainTabs;
