function solution(s) {
  let answer = s;

  const dict = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  Object.keys(dict).forEach((word) => {
    if (answer.includes(word)) {
      const replaceWord = `${word}`;
      const replace = new RegExp(replaceWord, "g");

      answer = answer.replace(replace, dict[word]);
    }
  });

  return +answer;
}

// "2three45sixseven"
// "23four5six7"
console.log(solution("2three45sixseven"));
