// 퀵정렬
// 공간복잡도를 최소화 할것

// const arr = [
//   526,
//   275,
//   999,
//   981,
//   147,
//   734,
//   734,
//   10,
//   98,
//   566,
//   986,
//   46,
//   999,
//   510,
//   676,
// ];

const arr = [];

for (let i = 0; i < 15; i++) {
  arr[i] = Math.floor(Math.random() * 100);
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return;

  const pivot = start;
  let leftIndex = start + 1;
  let rightIndex = end;

  while (leftIndex <= rightIndex) {
    while (leftIndex <= rightIndex && arr[leftIndex] <= arr[pivot]) {
      leftIndex++;
    }

    while (leftIndex <= rightIndex && arr[rightIndex] >= arr[pivot]) {
      rightIndex--;
    }

    if (leftIndex <= rightIndex)
      [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]];
    else [arr[pivot], arr[rightIndex]] = [arr[rightIndex], arr[pivot]];
  }

  quickSort(arr, start, rightIndex - 1);
  quickSort(arr, rightIndex + 1, end);
}

quickSort(arr);

console.log(arr);

module.exports = quickSort;
