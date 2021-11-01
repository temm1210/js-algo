// dp
// 최대의 높이로 쌓을수있는 벽돌

const AREA = 0;
const HEIGHT = 1;

function solution(bricks) {
  const sortedDataByWeight = bricks.sort((a, b) => a[2] - b[2]);
  sortedDataByWeight.unshift([0, 0, 0]);

  const brickCount = sortedDataByWeight.length;
  const maxHeightArr = Array.from({ length: brickCount }).fill(0);

  for (let i = 1; i < brickCount; i++) {
    const currBrick = sortedDataByWeight[i];
    const currBrickArea = currBrick[AREA];
    let height = 0;

    for (let j = 0; j < i; j++) {
      const prevBrick = sortedDataByWeight[j];
      const prevBrickArea = prevBrick[AREA];

      if (currBrickArea > prevBrickArea) {
        const calcHeight = currBrick[HEIGHT] + maxHeightArr[j];
        if (height < calcHeight) height = calcHeight;
      }
    }

    maxHeightArr[i] = height;
  }

  return Math.max(...maxHeightArr);
}

//     넓이  높이  무게
// 1  [25,    3,    4],
// 2  [4,     4,    6],
// 3  [9,     2,    3],
// 4  [16,    2,    5],
// 5  [1,     5,    2],

//                          0       1       2               3               4                                                   5
// 0  [0,     0,    0]      0       0       0               0               0                                                   0
// 5  [1,     5,    2],     0       5       0               0               0                                                   0 ( 0 밑에 쌓을수 있는지)
// 3  [9,     2,    3],     0       5       7(2<7)          0               0                                                   0 ( max(0번 블록 밑에 바로 쌓았을때 최대높이, 5번 블록밑에 쌓을때 최대높이) )
// 1  [25,    3,    4],     0       5       7               10(3< 8 < 10)   0                                                   0
// 4  [16,    2,    5],     0       5       7               10              9(2 < 7 < 9)                                        0
// 2  [4,     4,    6],

// 위에쌓을벽돌
console.log(
  solution([
    [25, 3, 4],
    [4, 4, 6],
    [9, 2, 3],
    [16, 2, 5],
    [1, 5, 2],
  ])
);
