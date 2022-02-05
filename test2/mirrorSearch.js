function solution(mirror) {
  let result = 0;

  const startNode = [0, 0];
  const rowLength = mirror.length - 1;
  const colLength = mirror[0].length - 1;

  let nextVisitQueue = [];

  nextVisitQueue.push(startNode);

  while (nextVisitQueue.length) {
    const size = nextVisitQueue.length;
    result++;

    for (let i = 0; i < size; i++) {
      const [row, col] = nextVisitQueue.shift();

      if (row === rowLength && col === colLength) {
        return result;
      }
      if (row < 0 || col < 0 || row > rowLength || col > colLength) continue;

      if (!mirror[row][col]) continue;

      mirror[row][col] = 0;
      console.table(mirror);

      nextVisitQueue.push([row + 1, col]);
      nextVisitQueue.push([row - 1, col]);
      nextVisitQueue.push([row, col + 1]);
      nextVisitQueue.push([row, col - 1]);
    }
  }
}

// 9
// [1,1,0,1,1,0],
// [1,1,0,1,1,0],
// [1,1,1,1,1,1],
// [1,1,1,1,0,1],

// 15
// [1, 0, 1, 1, 1, 1],
// [1, 0, 1, 0, 1, 0],
// [1, 0, 1, 0, 1, 1],
// [1, 1, 1, 0, 1, 1],

// 38
// [1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1],
// [1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1],

// 13
// [1,0,1,1,1,1,1],
// [1,1,1,0,0,0,1],
// [1,0,0,0,0,0,1],
// [1,0,0,0,0,0,1],
// [1,0,0,0,0,0,1],
// [1,0,0,0,0,0,1],
// [1,1,1,1,1,1,1],
console.log(
  solution([
    [1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
  ])
);

// function solution2(mirror) {
//   const startNode = [0, 0];
//   const rowLength = mirror.length - 1;
//   const colLength = mirror[0].length - 1;
//   const endNode = [rowLength, colLength];

//   console.log("result:", find(startNode, endNode, mirror, 0));
// }

// let result2 = 0;
// function find(start, end, mirror, result) {
//   if (start === end) return result2;

//   const [x, y] = start;
//   const [x1, y1] = end;

//   if (x < 0 || y < 0 || x > x1 || y > y1) return 0;
//   if (!mirror[x][y]) return 0;

//   if (x === x1 && y === y1) {
//     return result2++;
//   }

//   //   console.log("start:", start);

//   mirror[x][y] = 0;
//   result2++;
//   find([x + 1, y], end, mirror, result + 1);
//   find([x, y + 1], end, mirror, result + 1);
//   find([x - 1, y], end, mirror, result + 1);
//   find([x, y - 1], end, mirror, result + 1);

//   //   find([x + 1, y], end, mirror, result + 1) +
//   //     find([x, y + 1], end, mirror, result + 1) +
//   //     find([x - 1, y], end, mirror, result + 1) +
//   //     find([x, y - 1], end, mirror, result + 1);

//   return result2;
// }

// console.log(
//   solution2([
//     [1, 1, 0, 1, 1, 0],
//     [1, 1, 0, 1, 1, 0],
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 0, 1],
//   ])
// );
