import React from "react";
import { Card } from "../../redux/slices/PackageSlice";
import { Button, Grid } from "@mui/material";
import BasicCard, { HeightCard, WidthCard } from "../UI/BasicCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { setEndRead } from "../../redux/slices/GameSlice";

type ReadModeProps = {
  cards: Card[];
};

const ReadMode: React.FC<ReadModeProps> = ({ cards}) => {
  const [iter, setIter] = React.useState(0);
  const dispatch = useDispatch();

  const nextCards = () => {
    if (iter + 1 < cards.length) {
      setIter(iter + 1);
    } else {
      dispatch(setEndRead(true));
    }
  };
  const prevCards = () => {
    if (iter - 1 >= 0) {
      setIter(iter - 1);
    }
  };
  

  return (
    <>
      <Grid item xs={12} sx={{ zIndex: 1, m: "20%", mt:"10%" }}>
        {cards.length && (
          <BasicCard
            name={cards[iter].name}
            description={cards[iter].description}
            key={cards[iter].name}
            height={HeightCard.HEAVY}
            withButton={false}
            width={WidthCard.FULL}
            isDelete={false}
          />
        )}
      </Grid>
      <Button
        sx={{
          position: "fixed",
          right: "1%",
          left: "50%",
          top: "10%",
          bottom: "1%",
        }}
        onClick={nextCards}
      />
      <Button
        sx={{
          position: "fixed",
          right: "50%",
          left: "1%",
          top: "10%",
          bottom: "1%",
        }}
        onClick={prevCards}
      />
    </>
  );
};

export default ReadMode;
