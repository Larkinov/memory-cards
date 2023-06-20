import React from "react";
import ListSubjects from "../components/ListSubjects";
import MainTabs from "../components/MainPanel";

import data from "../DefaultCardsData.json";


const MainPage: React.FC = () => {

  // const dispatch = useDispatch();

  const firstLoading = () => {
    if (localStorage.getItem("first") === "1") {
      console.log("yes!");
      console.log(data.data[0]);
      
    } else {
      localStorage.setItem("first", "1");
    }
  };

  firstLoading();

  return (
    <>
      <ListSubjects />
      <MainTabs />
    </>
  );
};

export default MainPage;
