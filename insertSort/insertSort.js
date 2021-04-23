// 바로다음 인덱스와 비교한 후 뒤에 인덱스 값이 작다면 자리를 체인지
// 그 다음 인덱스와 다음 인덱스값을 비교한후 체인지....
// 정렬되어있는 배열에 새로운 데이터를 삽입 후 정렬해야한다면 해당 알고리즘이 가장 최적의 속도를 자랑함

const arr = [];

for (let i = 0; i < 15; i++) {
  arr[i] = Math.floor(Math.random() * 300);
}

console.log(arr);

for (let i = 1; i <= arr.length - 1; i++) {
  for (let j = i + 1; j >= 0; j--) {
    if (arr[j - 1] > arr[j]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    } else break;
  }
}

console.log(arr);
