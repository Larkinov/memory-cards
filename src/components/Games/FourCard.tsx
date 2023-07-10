import React from "react";
import { Card } from "../../redux/slices/PackageSlice";
import { Button, Grid } from "@mui/material";
import BasicCard, { HeightCard, WidthCard } from "../UI/BasicCard";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { setEndRead } from "../../redux/slices/GameSlice";

type FourCardProps = {
  cards: Card[];
};

const FourCard: React.FC<FourCardProps> = ({ cards }) => {
  return (
    <>
      {cards.map((card) => (
        <Grid item xs={6} sx={{ zIndex: 1,}}>
          <BasicCard
            name={card.name}
            description={card.description}
            key={card.name}
            height={HeightCard.HEAVY}
            withButton={false}
            width={WidthCard.FULL}
            isDelete={false}
          />
        </Grid>
      ))}
    </>
  );
};

export default FourCard;
