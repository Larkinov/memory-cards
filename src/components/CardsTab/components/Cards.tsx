import React from "react";
import Grid from "@mui/material/Grid";

import BasicCard, { HeightCard, WidthCard } from "../../UI/BasicCard";

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

type CardsProps = {
  isEdit:boolean;
}

const Cards: React.FC<CardsProps> = ({isEdit}) => {
    const { thisSubjectId } = useSelector((state: RootState) => state.subjects);
    const { subjects } = useSelector((state: RootState) => state.subjects);

  return (
    <>
      {subjects
        .filter((subject) => {
          let f = false;
          if (subject.id === thisSubjectId) {
            f = true;
          }
          return f;
        })
        .map((elem) =>
          elem.cards.map((card) => (
            <Grid item xs={4}>
              <BasicCard
                name={card.name}
                description={card.description}
                withButton={true}
                key={card.id}
                height={HeightCard.MEDIUM}
                width={WidthCard.FULL}
                isDelete={isEdit}
              />
            </Grid>
          ))
        )}
    </>
  );
};

export default Cards;
