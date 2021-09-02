// 코드컴파일

function solution(code) {
  const DOT_REGEX = /\./g;
  const blockCommands = {};
  const result = [];

  code.forEach((command) => {
    const depth = (command.match(DOT_REGEX) || []).length;
    const valueEscapedDot = command.replace(DOT_REGEX, "");
    const [key, _] = valueEscapedDot.split("=");

    if (!command.includes("print"))
      blockCommands[depth] = {
        ...blockCommands[depth],
        [key]: valueEscapedDot,
      };
    else {
      const variable = command.slice(-1).trim();
      const blockCommand = blockCommands[depth];

      if (blockCommand && blockCommand[variable]) {
        result.push(blockCommands[depth][variable]);
      } else {
        result.push(find(blockCommands, variable, depth));
      }
    }
  });

  return result.filter(Boolean);
}

function find(commands, target, fromIndex) {
  if (fromIndex < 0) return "error";
  if (commands[fromIndex] && commands[fromIndex][target])
    return commands[fromIndex][target];

  return find(commands, target, fromIndex - 1);
}

console.log(
  "test:",
  solution([
    "a=3",
    "..a=4",
    "..b=3",
    "..print a",
    ".......a=6",
    ".......print a",
    ".......print b",
    "..print a",
    "....a=7",
    "....print a",
    "print a",
    "print b",
    "a=4",
    "print a",
    "...print a",
  ])
);
