import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import FourCard from "../components/Games/FourCard";
import { TypeMemorizeEnum } from "../redux/slices/SettingsSlice";
import GameLayout from "../components/Games/GameLayout";
import ListCardGame from "../components/Games/ListCardGame";

const GamePage: React.FC = () => {
  const { typeMemorize } = useSelector((state: RootState) => state.settings);

  switch (typeMemorize) {
    case TypeMemorizeEnum.FOUR_CARD:
      return (
        <>
          <GameLayout>
            <FourCard />
          </GameLayout>
        </>
      );
    case TypeMemorizeEnum.LIST_CARD:
      return (
        <>
          <GameLayout>
            <ListCardGame/>
          </GameLayout>
        </>
      );
  }
};

export default GamePage;
