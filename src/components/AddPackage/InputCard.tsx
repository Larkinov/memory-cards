import { TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setThisId, setThisName } from "../../redux/slices/PackageSlice";

type InputProps = {
  id:number;
}

const InputCardName: React.FC<InputProps> = ({id}) => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
    dispatch(setThisName(e.target.value))
  };

  const onFocusInput = () => {
    dispatch(setThisId(id));
  }

  return (
    <>
      <TextField
        label={"Название карточки"}
        sx={{ m: "10px" }}
        onChange={onChangeInput}
        value={value}
        onFocus={onFocusInput}
      />
    </>
  );
};

export default React.memo(InputCardName);
