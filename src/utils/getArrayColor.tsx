export const getArrayColor = (index: number, color: string) => {
  let array = ["", "", "", ""];
  switch (index) {
    case 0:
      array = [color, "", "", ""];
      break;
    case 1:
      array = ["", color, "", ""];
      break;
    case 2:
      array = ["", "", color, ""];
      break;
    case 3:
      array = ["", "", "", color];
      break;
  }
  return array;
};
