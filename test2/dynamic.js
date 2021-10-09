function solution(maxWeight, cases) {
  const row = cases.length;
  const col = maxWeight;

  const matrix = Array.from({ length: row + 1 }, () =>
    Array.from({ length: col + 1 }, () => 0)
  );

  cases.forEach((c, index) => {
    const order = index + 1;
    const [inputWeight, value] = c;

    for (let i = 1; i < matrix[order].length; i++) {
      const prevValue = matrix[order - 1][i];

      if (inputWeight <= i) {
        matrix[order][i] = value;
        const remainingWeight = i - inputWeight;
        const remainWeightValue = matrix[order - 1][remainingWeight];

        const currValue = value + remainWeightValue;

        matrix[order][i] = Math.max(prevValue, currValue);
      } else matrix[order][i] = prevValue;
    }
  });

  console.table(matrix);

  return matrix[row][col];
}
//     0 1 2 3 4 5 6 7
// 0   0 0 0 0 0 0 0 0
// 1   0
// 2   0
// 3   0
// 4   0
console.log(
  solution(7, [
    [6, 13],
    [4, 8],
    [3, 6],
    [5, 12],
  ])
);
