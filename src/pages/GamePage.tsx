import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getCards } from "../utils/getCards";
import FourCard from "../components/Games/FourCard";
import { TypeMemorizeEnum } from "../redux/slices/SettingsSlice";
import GameLayout from "../components/Games/GameLayout";
import ListCardGame from "../components/Games/ListCardGame";

const GamePage: React.FC = () => {
  const { fullPackage, countCards, randomCards, typeMemorize } = useSelector(
    (state: RootState) => state.settings
  );
  const { gameCards } = useSelector((state: RootState) => state.game);

  const cards = React.useRef(
    getCards(gameCards, randomCards, fullPackage, countCards)
  );

  switch (typeMemorize) {
    case TypeMemorizeEnum.FOUR_CARD:
      return (
        <>
          <GameLayout>
            <FourCard cards={getCards(gameCards, randomCards, fullPackage, countCards)} />
          </GameLayout>
        </>
      );
    case TypeMemorizeEnum.LIST_CARD:
      return (
        <>
          <GameLayout>
            <ListCardGame
              cards={cards.current}
              cardsGame={getCards(gameCards, true, fullPackage, countCards)}
            />
          </GameLayout>
        </>
      );
  }
};

export default GamePage;
