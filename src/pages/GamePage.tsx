import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Grid } from "@mui/material";
import ReadMode from "../components/Games/ReadMode";
import { getCards } from "../utils/getCards";
import EndGame from "../components/Games/components/EndGame";
import TimerUI from "../components/Games/components/TimerUI";
import { TSubject } from "../redux/slices/SubjectsSlice";
import { TypePackageEnum } from "../redux/slices/PackageSlice";
import { useDispatch } from "react-redux";
import { setEndGame, setEndRead } from "../redux/slices/GameSlice";
import FourCard from "../components/Games/FourCard";

const GamePage: React.FC = () => {
  const { gameMode, fullPackage, countCards, randomCards } = useSelector(
    (state: RootState) => state.settings
  );
  const { thisSubjectId, subjects } = useSelector(
    (state: RootState) => state.subjects
  );
  const dispatch = useDispatch();

  const { endGame, endRead } = useSelector((state: RootState) => state.game);
  const { isTime } = useSelector((state: RootState) => state.settings);
  const [restart, setRestart] = React.useState(false);

  const getThisSubject = () => {
    let x: TSubject = {
      title: "",
      id: "",
      cards: [],
      type: TypePackageEnum.SIMPLE_PACK,
    };
    subjects.forEach((subject) => {
      if (subject.id === thisSubjectId) {
        x = subject;
      }
    });
    return x;
  };
  const subject: TSubject = getThisSubject();
  const cards = React.useRef(
    getCards(subject.cards, randomCards, fullPackage, countCards)
  );
  React.useEffect(() => {
    dispatch(setEndRead(false));
    dispatch(setEndGame(false));
  }, [restart]);

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
              <FourCard cards={cards.current} />
            ) : (
              <EndGame restart={restart} setRestart={setRestart} />
            )}
          </>
        )}
      </Grid>
    </>
  );
};

export default GamePage;
