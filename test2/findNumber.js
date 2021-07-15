function arrayToObjectWithKeyValueEqual(arr) {
  return arr.reduce((prev, curr) => {
    return { ...prev, [curr]: curr };
  }, {});
}

function solution(targetArr, checkArr) {
  let result = [];

  const targetObj = arrayToObjectWithKeyValueEqual(targetArr);

  checkArr.forEach((value) => {
    if (targetObj[value]) console.log(1);
    else console.log(0);
  });
  return result;
}

function solution2(targetArr, checkArr) {
  let result = [];

  const targetSet = new Set(targetArr);

  checkArr.forEach((value) => {
    if (targetSet.has(value)) console.log(1);
    else console.log(0);
  });
  return result;
}

console.log(solution([4, 1, 5, 2, 3], [1, 3, 7, 9, 5]));
console.log(solution2([4, 1, 5, 2, 3], [1, 3, 7, 9, 5]));
