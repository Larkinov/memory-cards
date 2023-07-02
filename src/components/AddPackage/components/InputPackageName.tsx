import { TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setName } from "../../../redux/slices/PackageSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

type InputProps = {
  isError:boolean;
  onFocus:Function;
}

const InputPackageName: React.FC<InputProps> = ({isError, onFocus}) => {
  const {name} = useSelector((state:RootState)=>state.package);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const [errorText, setErrorText] = React.useState("");

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    dispatch(setName(value));
  };


  React.useEffect(()=>{
      if(isError){
          setErrorText("Это поле не может быть пустым!");
      }else{
        setErrorText("");        
      }
  },[isError])

  return (
    <>
      <TextField
        label="Название пакета"
        onChange={(e) => onChangeInput(e)}
        value={value}
        sx={{ mt: "10px", mb: "20px", width: "100%" }}
        onBlur={onBlur}
        error = {isError}
        helperText={errorText}
        onFocus={()=>onFocus(false)}
      />
    </>
  );
};

export default InputPackageName;
