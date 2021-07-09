// 음계

function solution(arr, targetIndex) {
  let result = 0;

  // 튜플형식으로 변환
  const convertArr = arr.reduce((prev, curr, index) => {
    return [...prev, [index, curr]];
  }, []);

  while (true) {
    const poppedValue = convertArr.reduce((prev, curr) => {
      return prev < curr[1] ? curr[1] : prev;
    }, 0);

    console.log(convertArr);
    if (poppedValue === convertArr[0][1]) {
      result++;
      if (targetIndex === convertArr[0][0]) break;
      convertArr.shift();
    } else {
      convertArr.push(convertArr.shift());
    }
  }

  return result;
}

console.log("solution:", solution([1, 2, 3, 4], 2));
