import React from "react";
import { Card } from "../../redux/slices/PackageSlice";
import { Button, Grid, Stack } from "@mui/material";
import BasicCard, { HeightCard, WidthCard } from "../UI/BasicCard";
import CountCards from "./components/CountCards";
import HealthUI from "./components/HealthUI";
import { getCards } from "../../utils/getCards";

type ListCardProps = {
  cards: Card[];
  cardsGame: Card[];
};

const ListCardGame: React.FC<ListCardProps> = ({ cards, cardsGame }) => {
  const iter = React.useRef(0);
  const countWrong = React.useRef(0);
  const onClickCard = (idCardGame: number) => {
    if (cards[iter.current].id === idCardGame) {
      console.log("yes!");
      iter.current = iter.current + 1;
    } else {
      console.log("no!");
    }
  };

  return (
    <>
      <CountCards iter={iter.current} length={cards.length} />
      <HealthUI wrong={countWrong.current} />
      <Grid item xs={12} m={"0 30%"}>
        <Stack direction={"column"} sx={{ zIndex: 1 }}>
          {cardsGame.map((card) => (
            <Button
              sx={{ width: "100%", height: "100%" }}
              onClick={() => onClickCard(card.id)}
            >
              <BasicCard
                name={card.name}
                description={card.description}
                key={card.name}
                height={HeightCard.SMALL}
                withButton={false}
                width={WidthCard.FULL}
                isDelete={false}
                cardColor=""
              />
            </Button>
          ))}
        </Stack>
      </Grid>
    </>
  );
};

export default ListCardGame;
