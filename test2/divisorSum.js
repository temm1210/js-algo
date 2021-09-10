function solution(left, right) {
  let sum = 0;

  for (let target = left; target <= right; target++) {
    // 1과 자기자신은 무조건 포함
    let divisor = target === 1 ? 1 : 2;

    for (let j = 2; j < target; j++) {
      if (target % j === 0) {
        divisor++;
      }
    }

    if (divisor % 2 === 0) sum += target;
    else sum -= target;
  }

  return sum;
}

console.log(solution(1, 2));
