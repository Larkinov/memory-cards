import React from "react";
import Grid from "@mui/material/Grid/Grid";
import FormLabel from "@mui/material/FormLabel";
import { Switch, Slider, Stack, Typography } from "@mui/material";

import {
  setFullPackage,
  setCountCards,
} from "../../redux/slices/SettingsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setCountCardsSetting, setPackageSetting } from "../../utils/localSettings";

const CountCard: React.FC = () => {

const {fullPackage,countCards} = useSelector((state:RootState)=>state.settings);

  const [isFull, setIsFull] = React.useState<boolean>(fullPackage);
  const [count, setCount] = React.useState<number>(countCards);

  const dispatch = useDispatch();

  const changeFullPackage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFull(e.target.checked);
    setPackageSetting(e.target.checked);
    if (e.target.checked) {
      dispatch(setFullPackage(true));
    } else {
      dispatch(setFullPackage(false));
    }
  };

  const changeCountCards = (event: Event, newValue: number | number[]) => {
    setCount(newValue as number);
    setCountCardsSetting(newValue as number);
    dispatch(setCountCards(newValue as number));
  };
  return (
    <>
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
            max={40}
            step={4}
            disabled={isFull}
            valueLabelDisplay="auto"
            aria-label="Volume"
            value={count}
            onChange={changeCountCards}
          />
          <Typography>50</Typography>
        </Stack>
      </Grid>
    </>
  );
};

export default CountCard;
