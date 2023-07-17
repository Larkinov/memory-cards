import { Card } from "../redux/slices/PackageSlice";

export const getRandomArray = (anyArray: any[]) => {
  let array: any[] = [];

  anyArray.map((elem) => {
    array.push(elem);
  });

  let currentIndex = anyArray.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

export const getRandomFour = (cards: Card[], idGameCard: number) => {
  let fourArr: Card[] = [];
  let rndCards = getRandomArray(cards);

  for (let i = 0; i < 4; i++) {
    fourArr.push(rndCards[i]);
  }
  
  if(!fourArr.includes(cards[idGameCard])){
    let rndIndex = Math.ceil(Math.random()*4);
    fourArr[rndIndex] = cards[idGameCard];
  }  

  return fourArr;
};
