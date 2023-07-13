import React from "react";
import { Card } from "../../redux/slices/PackageSlice";
import { Button, Grid } from "@mui/material";
import BasicCard, { HeightCard, WidthCard } from "../UI/BasicCard";
import { getRandomIndex } from "../../utils/getRandomIndex";
import { useDispatch } from "react-redux";
import { setEndGame, setVictory } from "../../redux/slices/GameSlice";
import { getArrayColor } from "../../utils/getArrayColor";
import CountCards from "./components/CountCards";
import HealthUI from "./components/HealthUI";

type FourCardProps = {
  cards: Card[];
};

const FourCard: React.FC<FourCardProps> = ({ cards }) => {
  const delay = 800;

  const [render, setRender] = React.useState(false);
  const iter = React.useRef(0);
  const countWrong = React.useRef(0);
  const [choices, setChoices] = React.useState(["", "", "", ""]);
  const curCard = React.useRef(0);
  const indices = React.useRef(getRandomIndex(cards.length, curCard.current));

  const dispatch = useDispatch();

  const onClickCard = (elem: number, index: number) => {
    if (elem === curCard.current) {
      if (curCard.current + 1 !== cards.length) {
        setChoices(getArrayColor(index, "green"));
        iter.current = iter.current + 1;
        setRender(true);
      } else {
        setChoices(getArrayColor(index, "green"));
        dispatch(setVictory(true));
        setTimeout(() => {
          dispatch(setEndGame(true));
        }, delay);
      }
    } else {
      countWrong.current = countWrong.current + 1;
      setChoices(getArrayColor(index, "red"));
      setTimeout(() => {
        if (countWrong.current >= 3) {
          dispatch(setEndGame(true));
        } else {
          setChoices(["", "", "", ""]);
        }
      }, delay);
    }
  };

  React.useEffect(() => {
    if (render) {
      setTimeout(() => {
        setChoices(["", "", "", ""]);
        curCard.current = curCard.current + 1;
        indices.current = getRandomIndex(cards.length, curCard.current);
        setRender(false);
      }, delay);
    }
  }, [render]);

  return (
    <>
      <CountCards iter={iter.current} length={cards.length} />
      <HealthUI wrong={countWrong.current} />
      {indices.current.map((elem, index) => (
        <Grid item xs={6} sx={{ zIndex: 1 }}>
          <Button
            sx={{ width: "100%", height: "100%" }}
            onClick={() => onClickCard(elem, index)}
          >
            <BasicCard
              name={cards[elem].name}
              description={cards[elem].description}
              key={cards[elem].name}
              height={HeightCard.HEAVY}
              withButton={false}
              width={WidthCard.FULL}
              isDelete={false}
              cardColor={choices[index]}
            />
          </Button>
        </Grid>
      ))}
    </>
  );
};

export default FourCard;
