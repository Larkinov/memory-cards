import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

type CountCardsProps = {
  iter: number;
  length: number;
};

const CountCards: React.FC<CountCardsProps> = ({ iter, length }) => {
  const {isTime} = useSelector((state:RootState)=>state.settings);
  let right;
  if(isTime){
    right = "140px";
  }else{
    right = "20px";
  }
  return (
    <>
      <Typography
        position={"absolute"}
        sx={{ top: "100px", left: "50%"}}
        variant="h6"
      >
        {iter + 1} / {length}
      </Typography>
    </>
  );
};

export default CountCards;
