import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

type FormProps = {
  textBtn: string;
};

const Form: React.FC<FormProps> = ({ textBtn }) => {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <Stack spacing={3} mt={"10px"} >
        <FormControl>
          <TextField
            label="E-mail"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
            }}
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            id="input-pass"
            value={pass}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPass(event.target.value);
            }}
            fullWidth
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button variant="contained">{textBtn}</Button>
      </Stack>
    </>
  );
};

export default Form;
