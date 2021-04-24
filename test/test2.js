// n 홀수 -> 3xn+1, n짝수 -> n/2, n이 1이 될때까지 진행

function test(data) {
  if (data === 1) return;

  const isEven = data % 2 === 0;

  if (isEven) test(data / 2);
  else test(3 * data + 1);
}

test(3);
