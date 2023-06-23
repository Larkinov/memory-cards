import React from "react";
import Grid from "@mui/material/Grid/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { GameModeEnum, setMode } from "../../redux/slices/SettingsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setModeSetting } from "../../utils/localSettings";

const ModeGame: React.FC = () => {
  const { gameMode } = useSelector((state: RootState) => state.settings);

  const dispatch = useDispatch();
  const [gameModeState, setGameModeState] =
    React.useState<GameModeEnum>(gameMode);

  const changeModeGame = (e: React.ChangeEvent<HTMLInputElement>) => {
    let mode = (e.target as HTMLInputElement).value as GameModeEnum;
    setGameModeState(mode);
    setModeSetting(mode)
    dispatch(setMode(mode));
  };

  return (
    <>
      <Grid item xs={12} md={6} xl={4}>
        <FormControl>
          <FormLabel id="mode-game">Режим игры</FormLabel>
          <RadioGroup
            aria-labelledby="mode-game"
            defaultValue={GameModeEnum.MODE_READ}
            name="mode-game"
            value={gameModeState}
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
    </>
  );
};

export default ModeGame;
