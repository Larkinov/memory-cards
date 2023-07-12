import { Stack} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

import React from "react";

type HealthProps = {
    wrong:number;
}
const HealthUI: React.FC<HealthProps> = ({wrong}) => {
  return (
    <>
      <Stack
        position={"absolute"}
        sx={{ top: "110px", left: "40px" }}
        direction={"row"}
      >
        {wrong < 3 ?  <FavoriteIcon color="error" /> : <HeartBrokenIcon color="error"/>}
        {wrong < 2 ?  <FavoriteIcon color="error" /> : <HeartBrokenIcon color="error"/>}
        {wrong < 1 ?  <FavoriteIcon color="error" /> : <HeartBrokenIcon color="error"/>}
      </Stack>
    </>
  );
};

export default HealthUI;
