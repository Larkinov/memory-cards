import React from "react";
import Grid from "@mui/material/Grid/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { GameModeEnum,setTypeMemorize, TypeMemorizeEnum} from "../../redux/slices/SettingsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setTypeSetting } from "../../utils/localSettings";

const TypeGame: React.FC = () => {
  const { gameMode, typeMemorize } = useSelector((state: RootState) => state.settings);

  const dispatch = useDispatch();

  const [isDisabled, setIsDisabled] = React.useState(false);
  const [typeModeState, setTypeModeState] =
    React.useState<TypeMemorizeEnum>(typeMemorize);

  const changeModeGame = (e: React.ChangeEvent<HTMLInputElement>) => {
    let type = (e.target as HTMLInputElement).value as TypeMemorizeEnum;
    setTypeModeState(type);
    setTypeSetting(type)
    dispatch(setTypeMemorize(type));
  };

  React.useEffect(()=>{
        if(gameMode===GameModeEnum.MODE_MEMORIZE){
            setIsDisabled(false);
        }else{
            setIsDisabled(true);
        }
  },[gameMode])

  return (
    <>
      <Grid item xs={12} md={6} xl={4}>
        <FormControl>
          <FormLabel id="mode-game">Режим запоминания</FormLabel>
          <RadioGroup
            aria-labelledby="mode-game"
            defaultValue={TypeMemorizeEnum.FOUR_CARD}
            name="mode-game"
            value={typeModeState}
            onChange={changeModeGame}
          >
            <FormControlLabel
              value={TypeMemorizeEnum.FOUR_CARD}
              control={<Radio />}
              label="Четыре карты"
              disabled={isDisabled}
            />
          </RadioGroup>
        </FormControl>
      </Grid>
    </>
  );
};

export default TypeGame;
