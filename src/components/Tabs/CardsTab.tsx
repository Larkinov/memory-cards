import React from "react";
import Grid from "@mui/material/Grid/Grid";

import { useSelector } from "react-redux";

import BasicCard, { HeightCard, WidthCard } from "../BasicCard";
import { RootState } from "../../redux/store";

const CardsTab: React.FC = () => {
  const { thisSubjectId } = useSelector((state: RootState) => state.subjects);
  const { subjects } = useSelector((state: RootState) => state.subjects);
  const { email } = useSelector((state: RootState) => state.user);
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
          {subjects.forEach((subject) => {
            
            if (subject.id === thisSubjectId) {
              console.log(subject);
              
              subject.cards.map((elem) => (
                <Grid item xs={4}>
                  <BasicCard
                    name={elem.name}
                    withButton={true}
                    key={elem.id}
                    height={HeightCard.MEDIUM}
                    width={WidthCard.FULL}
                    isDelete={false}
                  />
                </Grid>
              ));
            }
          })}
        </>
      )}
    </Grid>
  );
};

export default CardsTab;
