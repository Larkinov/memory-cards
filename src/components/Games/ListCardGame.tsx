import React from "react";
import { Button, Grid, Stack, Paper } from "@mui/material";
import BasicCard, { HeightCard, WidthCard } from "../UI/BasicCard";
import CountCards from "./components/CountCards";
import HealthUI from "./components/HealthUI";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getRandomArray } from "../../utils/getRandomCards";
import { useDispatch } from "react-redux";
import { setEndGame, setVictory } from "../../redux/slices/GameSlice";
import { useMediaQuery, useTheme } from "@mui/material";

const ListCardGame: React.FC = () => {
  const delay = 800;
  const iter = React.useRef(0);
  const countWrong = React.useRef(0);
  const [render, setRender] = React.useState(false);
  const [end, setEnd] = React.useState(false);
  const { gameCards } = useSelector((state: RootState) => state.game);
  const listCards = React.useRef(getRandomArray(gameCards));
  const dispatch = useDispatch();
  const themeState = useTheme();
  const matchesSM = useMediaQuery(themeState.breakpoints.up("sm"));

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

  React.useEffect(() => {
  }, [window.innerWidth]);

  return (
    <>
      <CountCards iter={iter.current} length={gameCards.length} />
      <HealthUI wrong={countWrong.current} />
      <Paper sx={{ width: "100%", boxShadow:"none"}}>
        <Grid item xs={12}  m={!matchesSM ? "0 20%" : "0 30%"} mt={!matchesSM ? "12%" : "6%"}>
          <Stack direction={"column"} sx={{ zIndex: 1 }}>
            {listCards.current.map((card) => (
              <Button
                sx={{ width: "100%", height: "100%" }}
                onClick={() => onClickCard(card.id)}
              >
                <BasicCard
                  name={card.name}
                  description={""}
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
      </Paper>
    </>
  );
};

export default ListCardGame;
