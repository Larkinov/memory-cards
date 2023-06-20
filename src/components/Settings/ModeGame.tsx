import React from "react";
import Grid from "@mui/material/Grid/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { GameModeEnum, setMode } from "../../redux/slices/SettingsSlice";
import { useDispatch } from "react-redux";

const ModeGame: React.FC = () => {
  const dispatch = useDispatch();
  const [gameMode, setGameMode] = React.useState<GameModeEnum>(
    GameModeEnum.MODE_READ
  );

  const changeModeGame = (e: React.ChangeEvent<HTMLInputElement>) => {
    let mode = (e.target as HTMLInputElement).value as GameModeEnum;
    setGameMode(mode);
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
    </>
  );
};

export default ModeGame;
