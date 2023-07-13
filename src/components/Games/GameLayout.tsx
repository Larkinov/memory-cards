import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Grid } from "@mui/material";
import ReadMode from "../../components/Games/ReadMode";
import { getCards } from "../../utils/getCards";
import EndGame from "../../components/Games/components/EndGame";
import TimerUI from "../../components/Games/components/TimerUI";
import { useDispatch } from "react-redux";
import {
  setEndGame,
  setEndRead,
  setVictory,
} from "../../redux/slices/GameSlice";
import { GameModeEnum } from "../../redux/slices/SettingsSlice";
type GameLayoutProps = {
  children: React.ReactNode;
};

const GameLayout: React.FC<GameLayoutProps> = ({ children }) => {
  const { gameMode } = useSelector((state: RootState) => state.settings);
  const dispatch = useDispatch();

  const { endGame, endRead, gameCards } = useSelector(
    (state: RootState) => state.game
  );
  const { isTime, randomCards, fullPackage, countCards } = useSelector(
    (state: RootState) => state.settings
  );
  const [restart, setRestart] = React.useState(false);
  const cards = React.useRef(
    getCards(gameCards, randomCards, fullPackage, countCards)
  );
  React.useEffect(() => {
    dispatch(setEndRead(false));
    dispatch(setEndGame(false));
    dispatch(setVictory(false));
  }, [restart]);

  if (gameMode === GameModeEnum.MODE_READ) {
    return (
      <>
        <Grid
          container
          sx={{ mt: 2, ml: 2, height: "90vh" }}
          alignItems={"center"}
          spacing={2}
        >
          {!endRead ? (
            <ReadMode cards={cards.current} />
          ) : (
            <>
              <EndGame restart={restart} setRestart={setRestart} />
            </>
          )}
        </Grid>
      </>
    );
  }

  return (
    <>
      <Grid
        container
        sx={{ mt: 2, ml: 2, height: "90vh" }}
        alignItems={"center"}
        spacing={2}
      >
        {!endRead ? (
          <ReadMode cards={cards.current} />
        ) : (
          <>
            {isTime && <TimerUI />}
            {!endGame ? (
              children
            ) : (
              <EndGame restart={restart} setRestart={setRestart} />
            )}
          </>
        )}
      </Grid>
    </>
  );
};

export default GameLayout;
