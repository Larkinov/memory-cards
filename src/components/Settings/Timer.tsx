import React from "react";
import Grid from "@mui/material/Grid/Grid";
import FormLabel from "@mui/material/FormLabel";
import { Switch, Slider, Stack, Typography } from "@mui/material";

import { setTimer, GameModeEnum } from "../../redux/slices/SettingsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Timer: React.FC = () => {
  
  const [isTimer, setIsTimer] = React.useState<boolean>(false);
  const lastIsTimer = React.useRef(false);
  const lastTime = React.useRef(30);
  const [gameTime, setGameTime] = React.useState<number>(120);

  const dispatch = useDispatch();
  const gameMode = useSelector((state:RootState)=>state.settings.gameMode);
  const [isReadMode, setIsReadMode] = React.useState(true);

  const changeIsTimer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTimer(e.target.checked);
    lastIsTimer.current = e.target.checked;
    if (e.target.checked) {
      dispatch(setTimer(lastTime.current));
    } else {
      dispatch(setTimer(0));
    }
  };

  const changeGameTime = (event: Event, newValue: number | number[]) => {
    let value = newValue as number;
    setGameTime(value);
    dispatch(setTimer(value));
    lastTime.current = value;
  };

  React.useEffect(()=>{
    if(gameMode===GameModeEnum.MODE_READ){
      setIsReadMode(true);
      setIsTimer(false);
      dispatch(setTimer(0));
    }else{
      setIsReadMode(false);
      setIsTimer(lastIsTimer.current);
      dispatch(setTimer(lastTime.current));
    }
  },[gameMode])

  return (
    <>
      <Grid item xs={12} md={6} xl={4} display="flex" direction="column">
        <FormLabel component="legend">Время</FormLabel>
        <Switch
        disabled={isReadMode}
          checked={isTimer}
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
            disabled={!isTimer}
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
