function solution(n) {
  const answer = n
    .toString()
    .split("")
    .map((x) => +x)
    .reverse();

  return answer;
}

console.log("test:", solution(12345));
