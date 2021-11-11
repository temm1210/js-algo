function solution(s) {
  const inputString = s.split("");
  const stack = [];

  inputString.forEach((char) => {
    if (char === stack[stack.length - 1]) stack.pop();
    else stack.push(char);
  });

  if (stack.length) return 0;
  else return 1;
}

console.log(solution("baabaa"));
