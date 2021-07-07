function solution(array, commands) {
  const result = [];
  for (let i = 0; i < commands.length; i++) {
    const data = resolve(array, commands[i]);

    result.push(data);
  }

  return result;
}

function resolve(array, commands) {
  const [start, end, target] = commands;

  const result = array.slice(start - 1, end).sort((a, b) => a - b);

  return result[target - 1];
}
console.log(
  "solution:",
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);
