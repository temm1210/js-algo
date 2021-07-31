function solution(text, target) {
  let result = 0;
  let index = 0;

  while (index + target.length <= text.length) {
    if (text.substr(index, target.length) === target) {
      result++;
      index += target.length;
    } else index++;
  }
  return result;
}

console.log(solution("abcabababac", "ba"));
