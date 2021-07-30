function solution(count) {
  let result = 0;
  let i = 1;

  while (count !== 0) {
    if (i > count) i = 1;
    count -= i;
    i++;
    result++;
  }

  return result;
}

console.log(solution(14));

// 13

// 1 2 3 4 1 2
