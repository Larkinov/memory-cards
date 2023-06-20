import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Button, Grid, Stack } from "@mui/material";
import ReadMode from "../components/Games/ReadMode";
import { Link } from "react-router-dom";
import { Card } from "../redux/slices/SubjectsSlice";

const GamePage: React.FC = () => {
  const { timer, gameMode, fullPackage, countCards, randomCards } = useSelector(
    (state: RootState) => state.settings
  );
  const { cards } = useSelector((state: RootState) => state.subjects);
  const [endGame, setEndGame] = React.useState(false);
  const [restart, setRestart] = React.useState(false);

  const shuffleCards = (cards: Card[]): Card[] => {
    let currentIndex = cards.length,
      randomIndex,
      array: Card[] = [];

    cards.map((elem)=>{
      array.push(elem);
    })

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
    }
    return array;
  };

  React.useEffect(() => {
    setEndGame(false);
  }, [restart]);

  return (
    <>
      <Grid
        container
        sx={{ mt: 2, ml: 2, height: "90vh" }}
        alignItems={"center"}
        spacing={2}
      >
        {endGame ? (
          <Grid item xs={12}>
            <Stack spacing={2} alignItems={"center"} sx={{ mb: "10%" }}>
              <Button
                variant="outlined"
                sx={{ width: "20vw" }}
                onClick={() => setRestart(!restart)}
              >
                Начать сначала
              </Button>
              <Button variant="outlined" sx={{ width: "20vw" }}>
                <Link
                  to={"/"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Главное меню
                </Link>
              </Button>
            </Stack>
          </Grid>
        ) : (
          <ReadMode
            cards={shuffleCards(cards)}
            endGame={(isEnd: boolean) => setEndGame(isEnd)}
          />
        )}
      </Grid>
    </>
  );
};

export default GamePage;
