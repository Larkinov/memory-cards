import { TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setThisDesc, setThisId } from "../../redux/slices/PackageSlice";

type InputProps = {
  id: number;
};

const InputDescription: React.FC<InputProps> = ({ id }) => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
    dispatch(setThisDesc(e.target.value));
  };
  const onFocusInput = () => {
    dispatch(setThisId(id));
  };

  return (
    <>
      <TextField
        label={"Описание карточки"}
        sx={{ m: "10px" }}
        onChange={onChangeInput}
        value={value}
        onFocus={onFocusInput}
      />
    </>
  );
};

export default React.memo(InputDescription);
