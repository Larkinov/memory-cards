import React from "react";
import Grid from "@mui/material/Grid/Grid";
import FormLabel from "@mui/material/FormLabel";
import { Switch, Slider, Stack, Typography } from "@mui/material";

import { setTimer, GameModeEnum, setIsTime } from "../../redux/slices/SettingsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setIsTimeSetting, setTimeSetting } from "../../utils/localSettings";

const Timer: React.FC = () => {
  const {gameMode, isTime, timer} = useSelector((state:RootState)=>state.settings);

  const [isTimerState, setIsTimerState] = React.useState<boolean>(isTime);
  const lastIsTimerState = React.useRef(isTime);
  const lastTime = React.useRef(timer);
  const [gameTime, setGameTime] = React.useState<number>(timer);

  const dispatch = useDispatch();
  const [isReadMode, setIsReadMode] = React.useState(true);

  const changeIsTimer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTimerState(e.target.checked);
    setIsTimeSetting(e.target.checked);
    dispatch(setIsTime(e.target.checked));
    lastIsTimerState.current = e.target.checked;
    if (e.target.checked) {
      dispatch(setTimer(lastTime.current));
      setTimeSetting(lastTime.current);
    } else {
      dispatch(setTimer(0));
      setTimeSetting(0);
    }
  };

  const changeGameTime = (event: Event, newValue: number | number[]) => {
    let value = newValue as number;
    setGameTime(value);
    setTimeSetting(value);
    dispatch(setTimer(value));
    lastTime.current = value;
  };

  React.useEffect(()=>{
    if(gameMode===GameModeEnum.MODE_READ){      
      setIsReadMode(true);
      setIsTimerState(false);
      setIsTimeSetting(false);
      setTimeSetting(0);
      dispatch(setTimer(0));
      dispatch(setIsTime(false));
    }else{
      setIsReadMode(false);
      setIsTimerState(lastIsTimerState.current);
      setIsTimeSetting(lastIsTimerState.current);
      dispatch(setTimer(lastTime.current));
      setTimeSetting(lastTime.current);
      dispatch(setIsTime(lastIsTimerState.current));
    }
  },[gameMode])

  return (
    <>
      <Grid item xs={12} md={6} xl={4} display="flex" direction="column">
        <FormLabel component="legend">Время</FormLabel>
        <Switch
        disabled={isReadMode}
          checked={isTimerState}
          onChange={changeIsTimer}
          sx={{ mb: "0.5rem" }}
        />
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Typography>30</Typography>
          <Slider
            sx={{ width: "65%" }}
            min={30}
            max={600}
            step={15}
            disabled={!isTimerState}
            valueLabelDisplay="auto"
            aria-label="Volume"
            value={gameTime}
            onChange={changeGameTime}
          />
          <Typography>600</Typography>
        </Stack>
      </Grid>
    </>
  );
};

export default Timer;
