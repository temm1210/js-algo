function solution(password) {
  let result = "";
  const leftStack = [];
  const rightStack = [];

  const BACK_SPACE = "-";
  const LEFT_ARROW = "<";
  const RIGHT_ARROW = ">";

  for (let i = 0; i < password.length; i++) {
    const oneLetter = password[i];

    if (oneLetter === BACK_SPACE) {
      leftStack.pop();
    } else if (oneLetter === LEFT_ARROW) {
      rightStack.push(leftStack.pop());
    } else if (oneLetter === RIGHT_ARROW) {
      leftStack.push(rightStack.pop());
    } else {
      leftStack.push(oneLetter);
    }
  }
  result = [...leftStack, ...rightStack.reverse()].join("");
  return result;
}

console.log(solution("<<BP<A>>Cd-"));
