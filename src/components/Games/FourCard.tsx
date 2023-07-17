import React from "react";
import { Button, Grid } from "@mui/material";
import BasicCard, { HeightCard, WidthCard } from "../UI/BasicCard";
import { useDispatch } from "react-redux";
import { setEndGame, setVictory } from "../../redux/slices/GameSlice";
import CountCards from "./components/CountCards";
import HealthUI from "./components/HealthUI";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { getRandomFour } from "../../utils/getRandomCards";

const FourCard: React.FC = () => {
  const delay = 800;
  const { gameCards } = useSelector((state: RootState) => state.game);
  const [render, setRender] = React.useState(false);
  const iter = React.useRef(0);
  const countWrong = React.useRef(0);
  const fourCard = React.useRef(getRandomFour(gameCards, iter.current));
  const dispatch = useDispatch();
  const [end, setEnd] = React.useState(false);

  const onClickCard = (idCard: number) => {
    if (iter.current + 1 >= gameCards.length) {
      setTimeout(() => {
        setRender(true);
        setEnd(true);
      }, delay);
    } else {
      if (gameCards[iter.current].id === idCard) {
        iter.current = iter.current + 1;
        fourCard.current = getRandomFour(gameCards, iter.current);
      } else {
        countWrong.current = countWrong.current + 1;
      }
    }
    setTimeout(() => {
      setRender(true);
    }, delay);
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
      {fourCard.current.map((elem) => (
        <Grid item xs={6} sx={{ zIndex: 1 }}>
          {elem && (
            <>
              <Button
                sx={{ width: "100%", height: "100%" }}
                onClick={() => onClickCard(elem.id)}
              >
                <BasicCard
                  name={elem.name}
                  description={""}
                  key={elem.name}
                  height={HeightCard.HEAVY}
                  withButton={false}
                  width={WidthCard.FULL}
                  isDelete={false}
                  id={elem.id}
                  idGameCard={gameCards[iter.current].id}
                />
              </Button>
            </>
          )}
        </Grid>
      ))}
    </>
  );
};

export default FourCard;
