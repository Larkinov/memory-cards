import React from "react";
import ListItem from "@mui/material/ListItem/ListItem";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Stack } from "@mui/material";
import InputCardName from "./InputCard";
import InputDescription from "./InputDescription";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Card, pushCard } from "../../redux/slices/PackageSlice";
import { useDispatch } from "react-redux";

type ElemListProps = {
  withDesc: boolean;
  id: number;
};

const ElemList: React.FC<ElemListProps> = ({ withDesc, id }) => {
  const dispatch = useDispatch();
  const { thisId, thisName, thisDesc } = useSelector(
    (state: RootState) => state.package
  );

  const addCard = () => {
    let card: Card = { name: "", id: 0 };

    if (thisId !== undefined) {
      card.id=id;
      if (thisName) {
        card.name = thisName;
      }
      if (thisDesc) card.description = thisDesc;
    }
    if (card.name) dispatch(pushCard(card));
  };
  return (
    <ListItem disablePadding>
      <Stack width={"80%"}>
        <InputCardName id={id} />
        {withDesc && <InputDescription id={id} />}
      </Stack>

      <IconButton
        size="large"
        color="success"
        sx={{ position: "absolute", right: "4%" }}
        onClick={addCard}
      >
        <AddCircleIcon />
      </IconButton>
    </ListItem>
  );
};

export default ElemList;
