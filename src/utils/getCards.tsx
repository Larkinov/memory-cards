import { Card } from "../redux/slices/SubjectsSlice";

export const getCards = (
  cards: Card[],
  random: boolean,
  full: boolean,
  length: number
): Card[] => {
  let array: Card[] = [];

  cards.map((elem) => {
    array.push(elem);
  });
  if (random) {
    let currentIndex = cards.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  if (full || array.length <= length) {
    return array;
  } else {
    let newArray: Card[] = [];
    for (let i = 0; i < length; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
};
