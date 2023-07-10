import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { setEndGame } from "../../../redux/slices/GameSlice";


const TimerUI: React.FC = () => {
  const { timer } = useSelector((state: RootState) => state.settings);
  const [timerState, setTimerState] = React.useState<number>(timer);
  const dispatch = useDispatch();
  let visibility = false;
  if (timer > 0) {
    visibility = true;
  }

  React.useEffect(() => {    
    if (timerState - 1 >= 0) {
      setTimeout(() => {
        setTimerState(timerState - 1);
      }, 1000);
    } else {
      
      setTimeout(() => {
        dispatch(setEndGame(true));
      }, 1000);
    }
  }, [timerState]);

  return (
    <>
      {visibility && (
        <Box position={"absolute"} right={"10px"} top={"10%"}>
          <Typography variant="h5">Время: {timerState}</Typography>
        </Box>
      )}
    </>
  );
};

export default TimerUI;
