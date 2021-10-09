function solution(arr) {
  const length = arr.length;
  const result = Array.from({ length }).fill(1);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) result[i] = Math.max(result[i], result[j] + 1);
    }
  }

  console.log(result);

  return Math.max(...result);
}

//     10       20      10      30      20      50
// 1)   1       1       1       1       1       1      10일때
// 2)   1       2       1       1       1       1      20일때
// 3)   1       2       1       1       1       1      10일때
// 4)   1       2       1       1       1       1      30일때(1. 10보다 큼( Max((1(현재 30일때 최대값) + 10일때 최대수), (1+ 20일때 최대수), (1+10일때 최대수)))

console.log("result:", solution([40, 20, 50, 10, 20, 10, 30, 50, 60]));

// [40, 20, 50, 10, 20, 10, 30, 50, 60];
// [10,20,10,30,20,50];
