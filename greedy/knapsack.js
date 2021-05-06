// 주어진 용량에 맞게 아이템을 하나씩 추가했을시의 최대 가치구하기
// 아이템은 쪼개질수있음

const capacity = 30;

// 첫번째는 무게, 두번째는 가치
const items = [
  [30, 5],
  [25, 8],
  [10, 10],
  [20, 10],
  [15, 12],
];

function calcMaxFullfilItem(capacity, items) {
  const result = [];
  let totalWorth = 0;
  let totalCapacity = capacity;

  // 무게대비 가치가 가장큰 순서대로 정렬
  items.sort((a, b) => (a[1] / a[0] < b[1] / b[0] ? 1 : -1));

  for (const item of items) {
    if (totalCapacity - item[0] >= 0) {
      totalWorth += item[1];
      totalCapacity -= item[0];
      result.push([item[0], item[1], 1]);
    } else {
      const fraction = totalCapacity / item[0];
      const fractionItem = item[1] * fraction;
      totalCapacity = 0;
      totalWorth += fractionItem;
      result.push([item[0], item[1], fractionItem]);
    }
  }

  return { totalWorth, result };
}

console.log(calcMaxFullfilItem(capacity, items));
