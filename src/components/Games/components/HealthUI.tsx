import { Stack} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

import React from "react";
import { useDispatch } from "react-redux";
import { setEndGame } from "../../../redux/slices/GameSlice";

type HealthProps = {
    wrong:number;
}
const HealthUI: React.FC<HealthProps> = ({wrong}) => {

  const dispatch = useDispatch();

  React.useEffect(()=>{
    if(wrong===3){
        setTimeout(() => {
          dispatch(setEndGame(true));
        }, 800);
    }
  },[wrong])
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
