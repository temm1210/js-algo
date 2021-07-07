function solution(k, rates) {
  let profit = k;
  let nextMinDollar = 0;
  let nextMaxDollar = 0;

  for (let i = 0; i < rates.length - 1; ) {
    while (i < rates.length) {
      if (rates[i] > rates[i + 1]) {
        nextMinDollar = rates[i + 1];
        i++;
      } else break;
    }

    while (i < rates.length) {
      if (rates[i] < rates[i + 1]) {
        nextMaxDollar = rates[i + 1];
        i++;
      } else break;
    }

    profit -= nextMinDollar;
    profit += nextMaxDollar;
  }

  if (nextMaxDollar === 0) {
    return k;
  } else {
    return profit;
  }
}

console.log(
  "test:",
  solution(1000, [1200, 1000, 1100, 1200, 900, 1000, 1500, 900, 750, 1100])
);
