import React from "react";
import { Card } from "../../redux/slices/SubjectsSlice";
import { Button, Grid } from "@mui/material";
import BasicCard, { HeightCard } from "../BasicCard";

type ReadModeProps = {
  cards: Card[];
  endGame: Function;
};

const ReadMode: React.FC<ReadModeProps> = ({ cards, endGame }) => {
  const [iter, setIter] = React.useState(0);

  const nextCards = () => {
    if (iter + 1 < cards.length) {
      setIter(iter + 1);
    } else {
      endGame(true);
    }
  };
  const prevCards = () => {
    if (iter - 1 >= 0) {
      setIter(iter - 1);
    }
  };

  return (
    <>
      <Grid item xs={12} sx={{ zIndex: 1, m: "20%" }}>
        {cards.length && (
          <BasicCard
            name={cards[iter].name}
            key={cards[iter].name}
            height={HeightCard.HEAVY}
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
