import React from "react";
import Grid from "@mui/material/Grid/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Switch, Slider } from "@mui/material";

const ModeTab: React.FC = () => {
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Grid container sx={{ overflow: "auto" }} p={1} spacing={2} mt={0}>
      <Grid item xs={12} md={6} xl={4}>
        <FormControl>
          <FormLabel id="mode-game">Режим игры</FormLabel>
          <RadioGroup
            aria-labelledby="mode-game"
            defaultValue="read"
            name="mode-game"
          >
            <FormControlLabel value="read" control={<Radio />} label="Чтение" />
            <FormControlLabel
              value="memorize"
              control={<Radio />}
              label="Запоминание"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6} xl={4}>
        <FormLabel component="legend">Время</FormLabel>
        <Switch defaultChecked />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
      </Grid>
    </Grid>
  );
};

export default ModeTab;
