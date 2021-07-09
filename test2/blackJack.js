function blackJack(numbers, max_value) {
  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      for (let n = j + 1; n < numbers.length; n++) {
        let sum = numbers[i] + numbers[j] + numbers[n];

        if (sum === max_value) {
          result = sum;
          break;
        }
        if (result < sum && sum < max_value) {
          result = sum;
        }
      }
    }
  }

  return result;
}

console.log("test:", blackJack([5, 6, 1, 3, 8], 21));
