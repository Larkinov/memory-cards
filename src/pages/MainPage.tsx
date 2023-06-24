import React from "react";
import ListSubjects from "../components/ListSubjects";
import MainPanel from "../components/MainPanel";

const MainPage: React.FC = () => {

  return (
    <>
      <ListSubjects />
      <MainPanel />
    </>
  );
};

export default MainPage;
