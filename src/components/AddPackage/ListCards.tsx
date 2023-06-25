import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { TypePackageEnum } from "../../redux/slices/PackageSlice";
import Forms from "./Forms";
import BasicCard, { HeightCard } from "../BasicCard";
import { Grid } from "@mui/material";

const ListCards: React.FC = () => {
  const dispatch = useDispatch();
  const { type, cards } = useSelector((state: RootState) => state.package);

  const [withDesc, setWithDesc] = React.useState(false);

  React.useEffect(() => {
    if (type === TypePackageEnum.WITH_DESCRIPTION) {
      setWithDesc(true);
    } else {
      setWithDesc(false);
    }
  }, [type]);

  return (
    <>
      <Forms withDesc={withDesc} key={"0"}/>
      <Grid container spacing={1} sx={{
          height: "50vh",
          width: "85vw",
          border: "1px solid lightgray",
          overflow: "auto",
          pr:"8px"
        }}>
        

        {cards &&
          cards.map((elem) => (
            <Grid item xl={3} md={4} xs={6}>
              <BasicCard
                name={elem.name}
                key={elem.id}
                description={elem.description}
                height={HeightCard.MEDIUM}
              />
            </Grid>
          ))}
        </Grid>
    </>
  );
};

export default ListCards;
