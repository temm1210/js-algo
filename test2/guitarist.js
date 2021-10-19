// i번째 곡을 연주하기 전이라면, i번 곡은 P+V[i]나 P-V[i] 로 연주

// 첫번째 인자는 최대볼륨의 값
// 두번째 인자는 시작할 볼륨값
// 세번째 인자는 순서대로 연주할 볼륨의 차이
function solution(max, firstVolume, volumes) {
  const row = volumes.length + 1;
  const col = max + 1;

  const matrix = Array.from({ length: row }, () =>
    Array.from({ length: col }, () => 0)
  );
  matrix[0][firstVolume] = 1;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j]) {
        const currVolume = volumes[i];
        const prevVolume = j;
        const minVolume = prevVolume - currVolume;
        const maxVolume = prevVolume + currVolume;

        if (minVolume >= 0) {
          matrix[i + 1][minVolume] = 1;
        }

        if (maxVolume <= max) {
          matrix[i + 1][maxVolume] = 1;
        }
      }
    }
  }

  const FAIL = -1;

  const result = matrix[volumes.length].reduce((fail, curr, index) => {
    if (curr) return index;
    return fail;
  }, FAIL);

  return result;
}

console.log(
  solution(
    243,
    40,
    [74, 39, 127, 95, 63, 140, 99, 96, 154, 18, 137, 162, 14, 88]
  )
);

// (10, 5, [5, 3, 7]) => 10
// (20, 8, [15, 2, 9, 10]) => -1
// (243, 40, [74, 39, 127, 95, 63, 140, 99, 96, 154, 18, 137, 162, 14, 88]) => 238
