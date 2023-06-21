import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Grid} from "@mui/material";
import ReadMode from "../components/Games/ReadMode";
import { getCards } from "../utils/getCards";
import EndGame from "../components/UI/EndGame";
import TimerUI from "../components/UI/TimerUI";

const GamePage: React.FC = () => {
  const {gameMode, fullPackage, countCards, randomCards } = useSelector(
    (state: RootState) => state.settings
  );
  const { cards } = useSelector((state: RootState) => state.subjects);
  const [endGame, setEndGame] = React.useState(false);
  const [restart, setRestart] = React.useState(false);

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
          <EndGame restart={restart} setRestart={setRestart}/>
        ) : (
          <>
            <TimerUI endGame={(isEnd: boolean) => setEndGame(isEnd)}/>
            <ReadMode
              cards={getCards(cards, randomCards, fullPackage, countCards)}
              endGame={(isEnd: boolean) => setEndGame(isEnd)}
            />
          </>
        )}
      </Grid>
    </>
  );
};

export default GamePage;
