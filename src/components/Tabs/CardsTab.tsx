import React from "react";
import Grid from "@mui/material/Grid/Grid";

import { useSelector } from "react-redux";

import BasicCard, { HeightCard, WidthCard } from "../BasicCard";
import { RootState } from "../../redux/store";

const CardsTab: React.FC = () => {
  const { cards } = useSelector((state: RootState) => state.subjects);

  React.useEffect(() => {}, [cards]);

  return (
    <Grid container sx={{ overflow: "auto" }} p={1} spacing={1} mt={0}>
      {cards.map((elem) => (
        <Grid item xs={4}>
          <BasicCard
            name={elem.name}
            withButton={true}
            key={elem.id}
            height={HeightCard.MEDIUM}
            width={WidthCard.FULL}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardsTab;
