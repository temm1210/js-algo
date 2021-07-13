function solution(n) {
  const arr = [];
  hanoi(n, 1, 2, 3, arr);
  return arr;
}

function hanoi(n, start, via, end, arr) {
  if (n === 1) arr.push([start, end]);
  else {
    hanoi(n - 1, start, end, via, arr);
    hanoi(1, start, via, end, arr);
    hanoi(n - 1, via, start, end, arr);
  }
}

console.log("test:", solution(2));
