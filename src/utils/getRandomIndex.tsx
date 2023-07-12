export const getRandomIndex = (arrLength: number, curIndex: number) => {
  let indices: number[] = [curIndex];
  while (indices.length < 4) {
    let random = Math.floor(Math.random() * arrLength);
    if (!indices.includes(random)) {
      indices.push(random);
    }
  }


  let currentIndex = indices.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [indices[currentIndex], indices[randomIndex]] = [
      indices[randomIndex],
      indices[currentIndex],
    ];
  }  
  return indices;
};
