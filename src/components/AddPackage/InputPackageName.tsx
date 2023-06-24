import { TextField } from "@mui/material";
import React from "react";

const InputPackageName: React.FC = () => {
  const [value, setValue] = React.useState("");

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  return (
    <>
      <TextField
        fullWidth
        label="Название пакета"
        onChange={(e) => onChangeInput(e)}
        value={value}
        sx={{mt:"10px", mb:"20px", width:"100%"}}
      />
    </>
  );
};

export default InputPackageName;
