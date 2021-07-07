function solution(nums) {
  const newNums = Array.from(new Set(nums));
  const result = newNums.length;

  const n = nums.length / 2;

  if ((result > 0) & (result <= n)) return result;
  else if ((result > 0) & (result > n)) return n;
  else return 0;
}

console.log("result:", solution([3, 1, 2, 3]));
