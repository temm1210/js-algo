function solution(arr) {
  const positions = Array.from({ length: 10000 }).fill(0);
  const result = [];

  arr.forEach((number) => {
    positions[number] += 1;
  });

  for (let i = 0; i < positions.length; i++) {
    let j = positions[i];
    while (j > 0) {
      result.push(i);
      j--;
    }
  }

  console.log("result:", result);
}

console.log(
  solution([
    5, 1, 4, 3, 10, 9, 7, 11, 21, 16, 19, 24, 29, 55, 31, 30, 26, 38, 90, 102,
    42, 46, 57, 1000, 10000, 9248, 7627, 8492, 124, 874, 972, 89, 72, 9421,
    7624, 1892, 33, 479, 89, 99, 230,
  ])
);
