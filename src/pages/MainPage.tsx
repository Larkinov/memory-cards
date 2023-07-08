import React from "react";
import ListSubjects from "../components/ListSubjects";
import MainPanel from "../components/MainPanel";
import NotAuth from "../components/UI/NotAuth";

const MainPage: React.FC = () => {
  return (
    <>
      <ListSubjects />
      <MainPanel />
      <NotAuth />
    </>
  );
};

export default MainPage;
