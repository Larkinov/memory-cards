import React from "react";
import {useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { TypePackageEnum } from "../../redux/slices/PackageSlice";
import Forms from "./Forms";
import BasicCard, { HeightCard } from "../BasicCard";
import { Grid, Typography } from "@mui/material";

type ListProps = {
  isError:boolean;
}

const ListCards: React.FC<ListProps> = ({isError}) => {
  const { type, cards } = useSelector((state: RootState) => state.package);

  const [withDesc, setWithDesc] = React.useState(false);
  const [textError, setTextError] = React.useState("");

  React.useEffect(() => {
    if (type === TypePackageEnum.WITH_DESCRIPTION) {
      setWithDesc(true);
    } else {
      setWithDesc(false);
    }
  }, [type]);

  React.useEffect(()=>{
    if(isError){
      setTextError("В пакете должна быть хотя бы одна карточка!");
    }else{
      setTextError("");
    }
  },[isError])



  return (
    <>
      <Forms withDesc={withDesc} key={"0"}/>
      <Grid
        container
        spacing={1}
        sx={{
          height: "45vh",
          width: "85vw",
          border: "1px solid lightgray",
          overflow: "auto",
          pr: "8px",
          pb: "8px",
        }}
      >
        {cards &&
          cards.map((elem) => (
            <Grid item xl={3} md={4} xs={6}>
              <BasicCard
                name={elem.name}
                key={elem.id}
                description={elem.description}
                height={HeightCard.MEDIUM}
                withButton={false}
              />
            </Grid>
          ))}
      </Grid>
      <Typography color={"error"} sx={{ fontSize: "12px" }}>
        {textError}
      </Typography>
    </>
  );
};

export default ListCards;
