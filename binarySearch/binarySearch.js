// 이진탐색

const quickSort = require("../quickSort/quickSort");

// const arr = [];

// for (let i = 0; i < 15; i++) {
//   arr[i] = Math.floor(Math.random() * 100);
// }

const arr = [
  526,
  275,
  999,
  981,
  147,
  734,
  734,
  10,
  98,
  566,
  986,
  46,
  999,
  510,
  676,
];

function binarySearch(arr, serachData, start = 0, end = arr.length - 1) {
  const pivotIndex = Math.floor((end + start) / 2);

  if (serachData === arr[pivotIndex]) return pivotIndex;

  if (serachData > arr[pivotIndex])
    return binarySearch(arr, serachData, pivotIndex + 1, end);
  if (serachData < arr[pivotIndex])
    return binarySearch(arr, serachData, start, pivotIndex - 1);

  return "값없음";
}

quickSort(arr);
console.log(arr);
console.log("찾은 데이터:", binarySearch(arr, 566));
