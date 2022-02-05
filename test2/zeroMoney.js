function zeroMoney(types, target) {
  let totalCount = 0;

  types.sort((a, b) => b - a);

  for (let i = 0; i < types.length; i++) {
    const count = Math.floor(target / types[i]);

    if (count) {
      totalCount += count;
      target = target % types[i];
    }

    if (target === 0) break;
  }

  return totalCount;
}

console.log(
  zeroMoney([1, 5, 10, 50, 100, 500, 1000, 5000, 10000, 50000], 4790)
);
