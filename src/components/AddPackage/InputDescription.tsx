import { TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setThisDesc } from "../../redux/slices/PackageSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type InputProps = {
  isError: boolean;
  onFocus: Function;
};

const InputDescription: React.FC<InputProps> = ({ isError, onFocus }) => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state: RootState) => state.package);
  const [value, setValue] = React.useState("");
  const [errorText, setErrorText] = React.useState("");

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    dispatch(setThisDesc(value));
  };

  React.useEffect(() => {
    if (isError) {
      setErrorText("Это поле не может быть пустым!");
    } else {
      setErrorText("");
    }
  }, [isError]);

  React.useEffect(() => {
    setValue("");
  }, [cards]);

  return (
    <>
      <TextField
        label={"Описание карточки"}
        sx={{ m: "10px" }}
        onChange={onChangeInput}
        value={value}
        onBlur={onBlur}
        error={isError}
        helperText={errorText}
        onFocus={()=>onFocus(false)}
      />
    </>
  );
};

export default React.memo(InputDescription);
