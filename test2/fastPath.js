// 가장 빠른 길 찾기
// BFS

function solution(maps) {
  let result = 0;

  const rowLength = maps.length;
  const colLength = maps[0].length;

  const visitedQueue = Array.from({ length: rowLength }, () =>
    Array.from({ length: colLength }, () => 0)
  );

  const needToVisitQueue = [];
  needToVisitQueue.push([0, 0]);

  while (needToVisitQueue.length) {
    const size = needToVisitQueue.length;
    result++;

    for (let i = 0; i < size; i++) {
      const position = needToVisitQueue.shift();
      const [row, col] = position;

      if (row === rowLength - 1 && col === colLength - 1) {
        return result;
      }

      if (row < 0 || col < 0 || row > rowLength - 1 || col > colLength - 1)
        continue;
      if (visitedQueue[row][col]) continue;
      if (!maps[row][col]) continue;

      visitedQueue[row][col] = true;

      needToVisitQueue.push([row + 1, col]);
      needToVisitQueue.push([row - 1, col]);
      needToVisitQueue.push([row, col + 1]);
      needToVisitQueue.push([row, col - 1]);
    }
  }

  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
