import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

type EmailUIProps = {
  email: string;
  setEmail: Function;
};

const EmailUI: React.FC<EmailUIProps> = ({ email, setEmail }) => {
  return (
    <FormControl>
      <TextField
        label="E-mail"
        value={email}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(event.target.value);
        }}
      />
    </FormControl>
  );
};

export default EmailUI;
