import React from "react";
import ListSubjects from "../ListSubjects";
import MainTabs from "../MainTabs/MainTabs";

const MainPage:React.FC = () => {
  return (
    <>
      <ListSubjects />
      <MainTabs />
    </>
  );
};

export default MainPage;
