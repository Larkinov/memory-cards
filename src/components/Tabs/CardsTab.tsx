import React from "react";
import Grid from "@mui/material/Grid/Grid";

import { useSelector } from "react-redux";

import BasicCard, { HeightCard, WidthCard } from "../BasicCard";
import { RootState } from "../../redux/store";

const CardsTab: React.FC = () => {
  const { thisSubjectId } = useSelector((state: RootState) => state.subjects);
  const { subjects } = useSelector((state: RootState) => state.subjects);
  const [isError, setIsError] = React.useState(false);
  React.useEffect(() => {
    if (subjects.length === 0) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }, [subjects.length]);

  return (
    <Grid container sx={{ overflow: "auto" }} p={1} spacing={1} mt={0}>
      {isError && (
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
                    isDelete={false}
                  />
                </Grid>
              ))
            )}
        </>
      )}
    </Grid>
  );
};

export default CardsTab;
