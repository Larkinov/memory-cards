import { TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setThisName } from "../../redux/slices/PackageSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type InputProps = {
  id:number;
}

const InputCardName: React.FC<InputProps> = ({id}) => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const {cards} = useSelector((state:RootState)=>state.package);

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
    dispatch(setThisName(e.target.value))
  };

  React.useEffect(()=>{
    setValue("");    
  },[cards])

  return (
    <>
      <TextField
        label={"Название карточки"}
        sx={{ m: "10px", }}
        onChange={onChangeInput}
        value={value}
      />
    </>
  );
};

export default React.memo(InputCardName);
