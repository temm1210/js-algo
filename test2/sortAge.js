function solution(persons) {
  const results = persons
    .map((person) => person)
    .sort((p1, p2) => p1[0] - p2[0]);

  console.log("result:", results);
}

console.log(
  solution([
    [21, "Dohyun"],
    [21, "Junkyu"],
    [20, "Sunyoung"],
  ])
);
