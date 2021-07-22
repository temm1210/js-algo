let result = 0;

function solution(matrixSize, row, col) {
  const size = Math.pow(2, matrixSize);
  const rowLength = size;
  const colLength = size;

  const matrix = Array.from({ length: rowLength }, () =>
    Array.from({ length: colLength }, () => 0)
  );

  zSearch(matrix, 0, 0, size);

  console.log("matrix:", matrix);
  return matrix[row][col];
}
// 00 -> 01 -> 10 -> 11

// currentRow = 0 -> 1
// currentCol = 2 -> 3
// 02 -> 03 -> 12 -> 13
function zSearch(matrix, row, col, size) {
  let startRow = row;
  let startCol = col;

  if (size === 2) {
    for (let i = startRow; i <= startRow + 1; i++) {
      for (let j = startCol; j <= startCol + 1; j++) {
        matrix[i][j] = result++;
      }
    }

    return;
  }

  const halfSize = size / 2;
  zSearch(matrix, startRow, startCol, halfSize);
  zSearch(matrix, startRow, startCol + halfSize, halfSize);
  zSearch(matrix, startRow + halfSize, startCol, halfSize);
  zSearch(matrix, startRow + halfSize, startCol + halfSize, halfSize);
}

console.log(solution(3, 7, 7));

// 8(3)       4(2)             16(4)
// 00(1),         00,
// 02,         02,
// 20,         20,
// 22--,         22
// 04(1),
// 06,
// 24,
// 26--,
// 40(1),
// 42,
// 60,
// 62--,
// 44(1),
// 46,
// 64
// 66--
