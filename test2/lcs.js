function solution(s1, s2) {
  const splitString1 = s1.split("");
  const splitString2 = s2.split("");

  const rowLength = splitString1.length + 1;
  const colLength = splitString2.length + 1;

  const matrix = Array.from({ length: rowLength }, () =>
    Array.from({ length: colLength }, () => 0)
  );

  for (let i = 1; i < colLength; i++) {
    for (let j = 1; j < rowLength; j++) {
      if (splitString2[i - 1] === splitString1[j - 1]) {
        matrix[i][j] = matrix[i - 1][j] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i][j - 1], matrix[i - 1][j]);
      }
    }
  }

  return matrix[rowLength - 1][colLength - 1];
}

//          0 A C A Y K P
// 0        0 0 0 0 0 0 0
// 1(C)     0 0 1 1 1 1 1
// 2(A)     0 1 1 2 2 2 2
// 3(P)     0 1 1 2 2 2 3
// 4(C)     0 1 2 2 2 2 3
// 5(A)     0 1 2 3 3 3 3
// 6(K)     0 1 2 3 3 4 4

console.log(solution("ACAYKP", "CAPCAK"));
// 0.00055533
