import { Typography } from "@mui/material";
import React from "react";

type CountCardsProps = {
  iter: number;
  length: number;
};

const CountCards: React.FC<CountCardsProps> = ({ iter, length }) => {
  return (
    <>
      <Typography
        position={"absolute"}
        sx={{ top: "100px", right: "20px" }}
        variant="h6"
      >
        {iter + 1} / {length}
      </Typography>
    </>
  );
};

export default CountCards;
