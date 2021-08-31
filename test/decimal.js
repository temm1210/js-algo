// 소수구하기
// 배열인덱스를 배수값으로 이용
// n의 배수(2 * n)인덱스에 해당하는값은 전부 다른값으로 변경

function solution(n) {
  let result = 0;
  const arr = Array.from({ length: n }).fill(0);

  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      console.log("i:", i);
      if (arr[i] === 0) {
        result++;
      }

      for (let j = i; j <= n; j += i) {
        arr[j] = 1;
      }
    }
  }

  console.log("result:", result);
}

1, 2, 4, 5, 10, 20;
console.log("solution:", solution(17));
