// money는 예산
// cost는 각 층마다 비용
function solution(money, cost) {
  let count = 0;
  let arr = [];
  let copyMoney = money;

  for (let i = 0; i < cost.length - 1; i++) {
    let j = i + 1;
    while ((copyMoney -= cost[j++]) > 0) {
      count++;
    }

    copyMoney = money;
    arr.push(count);
    count = 0;
  }

  const max = Math.max(...arr);

  if (max === 0) {
    return 0;
  } else {
    return max;
  }
}

console.log(solution(100, [245, 317, 151, 192]));
