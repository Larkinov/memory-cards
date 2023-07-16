import React from "react";
import { Card } from "../../redux/slices/PackageSlice";
import { Button, Grid, Stack } from "@mui/material";
import BasicCard, { HeightCard, WidthCard } from "../UI/BasicCard";
import CountCards from "./components/CountCards";
import HealthUI from "./components/HealthUI";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getRandomArray } from "../../utils/getRandomCards";
import { useDispatch } from "react-redux";
import { setEndGame, setVictory } from "../../redux/slices/GameSlice";

const ListCardGame: React.FC = () => {
  const delay = 800;
  const iter = React.useRef(0);
  const countWrong = React.useRef(0);
  const [render, setRender] = React.useState(false);
  const [end, setEnd] = React.useState(false);
  const { gameCards } = useSelector((state: RootState) => state.game);
  const listCards = React.useRef(getRandomArray(gameCards));
  const dispatch = useDispatch();

  const onClickCard = (idCardGame: number) => {
    if (iter.current + 1 >= gameCards.length) {
      setEnd(true);
    } else {
      if (gameCards[iter.current].id === idCardGame) {
        iter.current = iter.current + 1;
      } else {
        countWrong.current = countWrong.current + 1;
      }
      setRender(true);
    }
  };

  React.useEffect(() => {
    if (end) {
      dispatch(setVictory(true));
      setTimeout(() => {
        dispatch(setEndGame(true));
      }, delay);
    }
    setRender(false);
  }, [render, end]);

  return (
    <>
      <CountCards iter={iter.current} length={gameCards.length} />
      <HealthUI wrong={countWrong.current} />
      <Grid item xs={12} m={"0 30%"}>
        <Stack direction={"column"} sx={{ zIndex: 1 }}>
          {listCards.current.map((card) => (
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
                idGameCard={gameCards[iter.current].id}
                id={card.id}
              />
            </Button>
          ))}
        </Stack>
      </Grid>
    </>
  );
};

export default ListCardGame;
