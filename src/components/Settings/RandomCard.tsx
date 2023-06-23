import React from "react";
import Grid from "@mui/material/Grid/Grid";
import FormLabel from "@mui/material/FormLabel";
import { Switch } from "@mui/material";

import { setRandomCards } from "../../redux/slices/SettingsSlice";
import { useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { setRandomSetting } from "../../utils/localSettings";

const RandomCard: React.FC = () => {
  const { randomCards } = useSelector((state: RootState) => state.settings);

  const [isRandom, setIsRandom] = React.useState<boolean>(randomCards);

  const dispatch = useDispatch();

  const changeIsRandom = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsRandom(e.target.checked);
    setRandomSetting(e.target.checked)
    dispatch(setRandomCards(e.target.checked));
  };

  return (
    <>
      <Grid item xs={12} md={6} xl={4} display="flex" direction="column">
        <FormLabel component="legend">Случайный порядок</FormLabel>
        <Switch
          checked={isRandom}
          onChange={changeIsRandom}
          sx={{ mb: "0.5rem" }}
        />
      </Grid>
    </>
  );
};

export default RandomCard;
