function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = arr.length / 2;
  const leftArr = mergeSort(arr.slice(0, mid));
  const rightArr = mergeSort(arr.slice(mid));

  let j = 0;
  let i = 0;
  let k = 0;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k++] = leftArr[i++];
    } else {
      arr[k++] = rightArr[j++];
    }
  }

  if (!leftArr[i]) {
    while (j < rightArr.length) {
      arr[k++] = rightArr[j++];
    }
  } else if (!rightArr[j]) {
    while (i < leftArr.length) {
      arr[k++] = leftArr[i++];
    }
  }

  return arr;
}

console.log(
  "mergeSort:",
  mergeSort([
    482, 1, 10, 4, 812848989, 827, 8162, 152, 427, 546, 84, 32, 772, 7812, 152,
    234, 42, 46, 82, 62, 75, 222,
  ])
);

// console.log("solution:", mergeSort([6, 24, 1, 3, 2, 7]));
