// 첫번째인자는 각각의 집 사이의 거리
// 두번째인자는 설치해야하는 공유기의 개수

function solution(d, s) {
  const sortedDistance = d.sort();

  let min = sortedDistance[0];
  let max = sortedDistance[sortedDistance.length - 1] - min;
  let result = 0;

  //   1,2,4,8,9
  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    let prevDistance = sortedDistance[0];
    let count = 1;
    for (let i = 1; i < sortedDistance.length; i++) {
      if (Math.abs(prevDistance - sortedDistance[i]) >= mid) {
        count++;
        prevDistance = sortedDistance[i];
      }
    }

    if (count < s) {
      max = mid - 1;
    } else if (count > s) {
      min = mid + 1;
    } else {
      if (mid >= result) {
        result = mid;
      }
      min = mid + 1;
    }
  }

  return result;
}

console.log("solution:", solution([1, 2, 8, 4, 9], 3));
