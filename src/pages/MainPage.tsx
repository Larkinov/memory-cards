import React from "react";
import ListSubjects from "../components/ListSubjects";
import MainTabs from "../components/MainPanel";
import { setDefaultSettings } from "../utils/localSettings";

const MainPage: React.FC = () => {

  // const firstLoading = () => {
  //   if (localStorage.getItem("first") === "1") {
      
  //   } else {
  //     localStorage.setItem("first", "1");
  //     setDefaultSettings();
  //   }
  // };

  // firstLoading();

  return (
    <>
      <ListSubjects />
      <MainTabs />
    </>
  );
};

export default MainPage;
