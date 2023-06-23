import React from "react";
import ListSubjects from "../components/ListSubjects";
import MainTabs from "../components/MainPanel";

const MainPage: React.FC = () => {

  return (
    <>
      <ListSubjects />
      <MainTabs />
    </>
  );
};

export default MainPage;
