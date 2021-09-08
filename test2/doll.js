function solution(board, moves) {
  let count = 0;
  const basket = [];

  moves.forEach((move) => {
    const COL = move - 1;

    for (let i = 0; i < board.length; i++) {
      const doll = board[i][COL];

      if (doll !== 0) {
        if (doll === basket[basket.length - 1]) {
          count += 2;
          basket.pop();
        } else {
          basket.push(doll);
        }

        board[i][COL] = 0;
        break;
      }
    }
  });

  return count;
}

console.log(
  "test:",
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
