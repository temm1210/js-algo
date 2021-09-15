function solution(n, k) {
  const arr = n.toString(k).split("");

  let leftQueue = [];
  let rightQueue = arr;
  let currentData = rightQueue.shift();
  let result = 0;

  while (currentData) {
    const nextData = rightQueue[0];
    const prevData = leftQueue[leftQueue.length - 1];

    if (currentData === "0" || currentData.includes("0")) {
      leftQueue.unshift(...currentData.split(""));
      currentData = rightQueue.shift();
      continue;
    }

    const shiftData = rightQueue.shift();

    console.log("prevData:", prevData);
    console.log("nextData:", nextData);
    console.log("currentData:", currentData);
    if (
      isPrime(+currentData) &&
      ((!nextData && !prevData) ||
        (nextData === "0" && !prevData) ||
        (prevData === "0" && !nextData) ||
        (nextData === "0" && prevData === "0"))
    ) {
      leftQueue = [];
      currentData = shiftData || undefined;
      result++;
    } else {
      currentData = shiftData ? currentData + shiftData : undefined;
    }
  }

  return result;
}

function isPrime(n) {
  if (!n || n <= 1) return false;

  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

// [211], [0,2,0]
// [2, 21, 211, 0], [2,0,...]
// [2,21,211,0,2], [0,1,0,1,1]
// [2,21,211,0,2,0], [1,0,1,1]
// [2,21,211,0,2,0,1 ], [0,1,1]
// [2,21,211,0,2,0,1,0 ], [1,1]
// [2,21,211,0,2,0,1,0,1], [1]
// [2,21,211,0,2,0,1,0,11], []

// 437674	3	3
// 110011	10	2
console.log(solution(9, 5));
