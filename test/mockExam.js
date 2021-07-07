function solution(answers) {
  const acs = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const sum = acs.map((ac) => {
    return answers.reduce((prev, curr, index) => {
      if (curr === ac[index % ac.length]) return prev + 1;
      else return prev;
    }, 0);
  });

  const max = Math.max(...sum);

  return sum
    .map((s, index) => {
      if (max === s) return index + 1;
    })
    .filter(Boolean);
}

console.log("test:", solution([1, 3, 2, 4, 2]));
