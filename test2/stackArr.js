function printOperation(targetArr, n) {
  const stack = [];
  const result = [];

  let plus = "+";
  let minus = "-";

  let j = 0;

  for (let i = 0; i < targetArr.length; i++) {
    const data = targetArr[i];

    while (data >= j + 1) {
      stack.push(j + 1);
      j++;
      result.push(plus);
    }

    if (stack[stack.length - 1] === data) {
      stack.pop();
      result.push(minus);
    } else {
      console.log("NO");
      return;
    }
  }

  console.log("result:", result);
}

printOperation([4, 3, 6, 8, 7, 5, 2, 1], 8);
