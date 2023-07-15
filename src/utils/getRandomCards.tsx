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

export const getRandomIndex = (arrLength: number, curIndex: number) => {
    let indices: number[] = [curIndex];
    while (indices.length < 4) {
      let random = Math.floor(Math.random() * arrLength);
      if (!indices.includes(random)) {
        indices.push(random);
      }
    }
    getRandomArray(indices);
    return indices;
  };
  