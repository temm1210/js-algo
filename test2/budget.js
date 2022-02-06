function solution(budgets, c, totalBudget) {
  budgets.sort((a, b) => a - b);
  let min = 1;
  let max = budgets[c - 1];
  let result = 0;

  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    if (isSatisfy(budgets, mid, totalBudget)) {
      min = mid + 1;
      result = mid;
    } else {
      max = mid - 1;
    }
  }

  console.log(result);
}

function isSatisfy(budgets, limitBudgetPer, totalBudget) {
  const sum = budgets.reduce(
    (total, budget) => total + Math.min(budget, limitBudgetPer),
    0
  );

  console.log("limitBudgetPer:", limitBudgetPer);
  console.log("sum:", sum);
  return sum <= totalBudget;
}

const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s+/)
  .map((v) => +v);
const M = input.pop();

solution(input, N, M);

// [70, 80, 30, 40, 100], 450 => 100
// [310,200,240,110, 160], 700 => 147
// [120 ,110, 140, 150], 485 => 127
// [400,290,160,210,120 ,110, 300,115, 140, 150,180,260,320, 340, 60,50, 20, 220, 340,225,215, 315, 275, 175, 410,510], 4000 => 181
// console.log(solution([120, 110, 140, 150], 4, 485));
