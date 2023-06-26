import React from "react";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Stack } from "@mui/material";
import InputCardName from "./InputCard";
import InputDescription from "./InputDescription";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  Card,
  TypePackageEnum,
  pushCard,
  setThisDesc,
  setThisId,
  setThisName,
} from "../../redux/slices/PackageSlice";
import { useDispatch } from "react-redux";

type FormProps = {
  withDesc: boolean;
};

const Forms: React.FC<FormProps> = ({ withDesc,}) => {
  const { type } = useSelector((state: RootState) => state.package);
  const dispatch = useDispatch();
  const { thisId, thisName, thisDesc} = useSelector((state: RootState) => state.package);

  const [errorName, setErrorName] = React.useState(false);
  const [errorDesc, setErrorDesc] = React.useState(false);
  const addCard = () => {
    let card: Card = { name: thisName , id: thisId, description:thisDesc};

    let dispatchCard = () => {
      dispatch(pushCard(card));
      dispatch(setThisDesc(""));
      dispatch(setThisName(""));
      dispatch(setThisId(thisId));
    };

    if (card.name) {      
      if (type === TypePackageEnum.SIMPLE_PACK) {
        dispatchCard();
        dispatch(setThisId(thisId+1));
      } else {
        if (card.description) {
          dispatchCard();
          dispatch(setThisId(thisId+1));
        }else{
          setErrorDesc(true);
        }
      }
    }else{
      setErrorName(true);
      if(card.description){
        setErrorDesc(true);
      }
    }
  };


  return (
    <>
      <Stack
        direction={"row"}
        width={"100%"}
        alignItems={"center"}
        sx={{ mb: "10px" }}
      >
        <Stack width={"100%"}>
          <InputCardName isError={errorName} onFocus={()=>setErrorName(false)} />
          {withDesc && <InputDescription isError={errorDesc} onFocus={()=>setErrorDesc(false)}  />}
        </Stack>

        <IconButton
          size="large"
          color="success"
          onClick={addCard}
          sx={{ width: "52px", height: "52px", mr: "10px" }}
        >
          <AddCircleIcon sx={{ width: "26px", height: "26px" }} />
        </IconButton>
      </Stack>
    </>
  );
};

export default Forms;
