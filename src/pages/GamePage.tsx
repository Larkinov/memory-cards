import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Grid } from "@mui/material";
import ReadMode from "../components/Games/ReadMode";
import { getCards } from "../utils/getCards";
import EndGame from "../components/UI/EndGame";
import TimerUI from "../components/UI/TimerUI";
import { TSubject } from "../redux/slices/SubjectsSlice";
import { TypePackageEnum } from "../redux/slices/PackageSlice";

const GamePage: React.FC = () => {
  const { gameMode, fullPackage, countCards, randomCards } = useSelector(
    (state: RootState) => state.settings
  );
  const { thisSubjectId, subjects } = useSelector(
    (state: RootState) => state.subjects
  );
  const { isTime } = useSelector((state: RootState) => state.settings);
  const [endGame, setEndGame] = React.useState(false);
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

  console.log(endGame, "endgame");

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
          <EndGame restart={restart} setRestart={setRestart} />
        ) : (
          <>
            {isTime && (
              <TimerUI endGame={(isEnd: boolean) => setEndGame(isEnd)} />
            )}
            <ReadMode
              cards={getCards(
                subject.cards,
                randomCards,
                fullPackage,
                countCards
              )}
              endGame={(isEnd: boolean) => setEndGame(isEnd)}
            />
          </>
        )}
      </Grid>
    </>
  );
};

export default GamePage;
