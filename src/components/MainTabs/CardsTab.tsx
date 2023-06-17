import React from "react";
import Grid from "@mui/material/Grid/Grid";

import {useSelector} from "react-redux";

import BasicCard from "../BasicCard";
import { RootState } from "../../redux/store";

const CardsTab: React.FC = () => {

  const {title, cards} = useSelector((state:RootState)=> state.subjects);

  React.useEffect(()=>{
  },[title])  

  return (
    <Grid
      container
      sx={{overflow: "auto",}}
      p={1}
      spacing={1}
      mt={0}
    >
      {cards.map((elem,index)=>(
        <Grid item xs={4}>
        <BasicCard name={elem.name} key={index}/>
      </Grid>
      ))}
      
    </Grid>
  );
};

export default CardsTab;
