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
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { setGameCards } from "../redux/slices/GameSlice";
import { getThisSubject } from "../utils/getThisSubject";
import { setCurrentTab } from "../redux/slices/InterfaceSlice";
import { useMediaQuery, useTheme } from "@mui/material";
import SubjectsTab from "./ListSubjects/components/SubjectsTab";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MainPanel: React.FC = () => {
  const themeState = useTheme();
  const matchesSM = useMediaQuery(themeState.breakpoints.up("sm"));
  const { currentTab } = useSelector((state: RootState) => state.interfaceUI);
  const { thisSubjectId, subjects } = useSelector(
    (state: RootState) => state.subjects
  );
  const dispatch = useDispatch();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(setCurrentTab(newValue));
  };

  const onClickStart = () => {
    let subject = getThisSubject(subjects, thisSubjectId);
    dispatch(setGameCards(subject.cards));
  };

  React.useEffect(() => {}, [window.innerWidth]);

  return (
    <Grid
      container
      item
      sm={9}
      xs={12}
      sx={{ height: "100%", position: "relative",}}
    >
      <Grid
        item
        xs={12}
        sx={{ height: "102%", border: "1px solid lightgray",}}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={currentTab}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ ml: "10px" }}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Link
              to={thisSubjectId ? "game" : "#"}
              style={{
                textDecoration: "none",
                marginTop: "10px",
              }}
            >
              <Button
                color="success"
                variant="contained"
                disabled={thisSubjectId ? false : true}
                onClick={() => onClickStart()}
              >
                Начать
              </Button>
            </Link>
            {!matchesSM && <Tab label="Темы" {...a11yProps(1)} />}
            <Tab label="Карточки" {...a11yProps(2)} />
            <Tab label="Настройки" {...a11yProps(3)} />
          </Tabs>
        </Box>
        {!matchesSM && (
          <TabPanel value={currentTab} index={1}>
            <SubjectsTab />
          </TabPanel>
        )}
        <TabPanel value={currentTab} index={matchesSM ? 1 : 2}>
          <CardsTab />
        </TabPanel>
        <TabPanel value={currentTab} index={matchesSM ? 2 : 3}>
          <SettingsTab />
        </TabPanel>
      </Grid>
    </Grid>
  );
};

export default MainPanel;
