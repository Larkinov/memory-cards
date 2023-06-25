import { TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setThisDesc } from "../../redux/slices/PackageSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type InputProps = {
  id: number;
};

const InputDescription: React.FC<InputProps> = ({ id }) => {
  const dispatch = useDispatch();
  const {cards} = useSelector((state:RootState)=>state.package);
  const [value, setValue] = React.useState("");

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
    dispatch(setThisDesc(e.target.value));
  };


  React.useEffect(()=>{
    setValue("");    
  },[cards])

  return (
    <>
      <TextField
        label={"Описание карточки"}
        sx={{ m: "10px" }}
        onChange={onChangeInput}
        value={value}
      />
    </>
  );
};

export default React.memo(InputDescription);
