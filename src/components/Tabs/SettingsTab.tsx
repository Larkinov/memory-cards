import React from "react";
import Grid from "@mui/material/Grid/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Switch, Slider, Stack, Typography } from "@mui/material";

import {
  GameModeEnum,
  setTimer,
  setMode,
  setFullPackage,
  setCountCards,
} from "../../redux/slices/SettingsSlice";
import { useDispatch } from "react-redux";

const SettingsTab: React.FC = () => {
  const [isFull, setIsFull] = React.useState<boolean>(true);
  const lastCount = React.useRef(0);
  const [count, setCount] = React.useState<number>(10);
  const [isTimer, setIsTimer] = React.useState<boolean>(false);
  const lastTimer = React.useRef(30);
  const [gameTime, setGameTime] = React.useState<number>(120);
  const [gameMode, setGameMode] = React.useState<GameModeEnum>(
    GameModeEnum.MODE_READ
  );

  const dispatch = useDispatch();

  const changeIsTimer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTimer(e.target.checked);
    if (e.target.checked) {
      dispatch(setTimer(lastTimer.current));
    } else {
      dispatch(setTimer(0));
    }
  };
  const changeFullPackage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFull(e.target.checked);
    if (e.target.checked) {
      dispatch(setFullPackage(true));
    } else {
      dispatch(setFullPackage(false));
    }
  };

  const changeCountCards = (event: Event, newValue: number | number[]) => {
    setCount(newValue as number);
    dispatch(setCountCards(newValue as number));
  };
  const changeGameTime = (event: Event, newValue: number | number[]) => {
    let value = newValue as number;
    setGameTime(value);
    dispatch(setTimer(value));
    lastTimer.current = value;
  };

  const changeModeGame = (e: React.ChangeEvent<HTMLInputElement>) => {
    let mode = (e.target as HTMLInputElement).value as GameModeEnum;
    setGameMode(mode);
    dispatch(setMode(mode));
  };

  return (
    <Grid container sx={{ overflow: "auto" }} p={1} spacing={2} mt={0}>
      <Grid item xs={12} md={6} xl={4}>
        <FormControl>
          <FormLabel id="mode-game">Режим игры</FormLabel>
          <RadioGroup
            aria-labelledby="mode-game"
            defaultValue={GameModeEnum.MODE_READ}
            name="mode-game"
            value={gameMode}
            onChange={changeModeGame}
          >
            <FormControlLabel
              value={GameModeEnum.MODE_READ}
              control={<Radio />}
              label="Чтение"
            />
            <FormControlLabel
              value={GameModeEnum.MODE_MEMORIZE}
              control={<Radio />}
              label="Запоминание"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6} xl={4} display="flex" direction="column">
        <FormLabel component="legend">Количество слов</FormLabel>

        <FormLabel component="legend" sx={{ mt: 0.5 }}>
          <Switch checked={isFull} onChange={changeFullPackage} />
          Весь пакет
        </FormLabel>
        <Stack spacing={2} direction="row" sx={{ mt: 0.5 }} alignItems="center">
          <Typography>4</Typography>
          <Slider
            sx={{ width: "65%" }}
            min={4}
            max={50}
            step={2}
            disabled={isFull}
            valueLabelDisplay="auto"
            aria-label="Volume"
            value={count}
            onChange={changeCountCards}
          />
          <Typography>50</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} xl={4} display="flex" direction="column">
        <FormLabel component="legend">Время</FormLabel>
        <Switch
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
    </Grid>
  );
};

export default SettingsTab;
