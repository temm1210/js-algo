function solution(number) {
  const stringNumber = number.toString();
  const arr = stringNumber.split("").sort((a, b) => b - a);
  const result = Number(arr.join(""));

  console.log("result:", result);
}

function solution2(number) {
  const result = [];
  const position = Array.from({ length: 10 }).fill(0);
  const arr = number
    .toString()
    .split("")
    .map((x) => +x);

  arr.forEach((number) => {
    position[number] += 1;
  });

  for (let i = position.length - 1; i >= 0; i--) {
    for (let j = position[i]; j > 0; j--) {
      result.push(i);
    }
  }

  console.log("result:", result);
}

console.log(solution2(5819240));
