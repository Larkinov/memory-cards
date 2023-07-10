import React from "react";
import Grid from "@mui/material/Grid";

import BasicCard, { HeightCard, WidthCard } from "../../UI/BasicCard";

import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import DeleteSubject from "./DeleteSubject";

const Cards: React.FC = () => {
  const { thisSubjectId } = useSelector((state: RootState) => state.subjects);
  const { subjects } = useSelector((state: RootState) => state.subjects);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(()=>{
      if(thisSubjectId){
        setVisible(true);
      }
  },[thisSubjectId])

  return (
    <>
      {visible && <DeleteSubject />} 
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
                id={card.id}
              />
            </Grid>
          ))
        )}
    </>
  );
};

export default Cards;
