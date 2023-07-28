let winningArr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkEvery = (arr, block) => {
  let firstIndex = arr[0];
  let firstElement = block[firstIndex];

  //If first element is filled then only check that if other elements are equal or not
  if (firstElement) {
    //Iterate with every index of arr
    for (let i = 1; i < arr.length; i++) {
      let index = arr[i];

      //Check if all element are same
      if (block[index] !== firstElement) {
        return false;
      }
    }

    return firstElement;
  }

  return false;
};

export const checkWinner = (block) => {
  //check how many blocks are filled
  let filledBlocks = block.filter((e) => e).length;

  //If it more then 3 then only check for winner
  if (filledBlocks > 3) {
    for (let i = 0; i < winningArr.length; i++) {
      let result = checkEvery(winningArr[i], block);

      if (result) {
        return {
          msg: `${result} won the Match`,
          index: winningArr[i],
        };
      }
    }
  }

  //If Every block is filled then draw the match
  if (filledBlocks === 9) {
    return {
      msg: `Match Draw`,
      index: [],
    };
  }

  return false;
};
