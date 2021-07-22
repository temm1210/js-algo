function solution(coordinates) {
  const results = coordinates
    .map((coordinate) => coordinate)
    .sort((c1, c2) => c1[0] - c2[0])
    .sort((c1, c2) => c1[1] - c2[1]);

  console.log("result:", results);
}

console.log(
  solution([
    [3, 4],
    [1, 1],
    [1, -1],
    [2, 2],
    [3, 3],
  ])
);
