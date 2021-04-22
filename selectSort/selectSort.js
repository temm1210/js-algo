// 가장작은 값을 찾아서 인덱스와 가장 작은값을 바꾸는 정렬
// 0번 인덱스와 가장 작은 값을 체인지
// 1번 인덱스와 가장 작은 값을 체인지
// 2번 인덱스와 가장 작은 값을 체인지..

const arr = [];

for (let i = 0; i < 15; i++) {
  arr[i] = Math.floor(Math.random() * 100);
}

console.log(arr);

for (let i = 0; i < arr.length - 1; i++) {
  let lowestIndex = i;

  for (let j = i + 1; j <= arr.length - 1; j++) {
    if (arr[lowestIndex] > arr[j]) {
      lowestIndex = j;
    }
  }

  [arr[i], arr[lowestIndex]] = [arr[lowestIndex], arr[i]];
}

console.log(arr);
