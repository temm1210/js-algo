function solution(dirs) {
  let CURRENT_X = 0;
  let CURRENT_Y = 0;

  const visitedPaths = new Set();

  dirs.split("").forEach((command) => {
    let PREV_X = CURRENT_X;
    let PREV_Y = CURRENT_Y;
    if (command === "U") {
      CURRENT_Y++;
    } else if (command === "D") {
      CURRENT_Y--;
    } else if (command === "R") {
      CURRENT_X++;
    } else {
      CURRENT_X--;
    }

    if (Math.abs(CURRENT_X) > 5 || Math.abs(CURRENT_Y) > 5) {
      CURRENT_X = PREV_X;
      CURRENT_Y = PREV_Y;
      return;
    }

    visitedPaths.add(`${PREV_X},${PREV_Y} ${CURRENT_X},${CURRENT_Y}`);
    visitedPaths.add(`${CURRENT_X},${CURRENT_Y} ${PREV_X},${PREV_Y}`);
  });

  return visitedPaths.size / 2;
}

// "ULURRDLLU" =>7
// "LULLLLLLU" => 7
console.log("test:", solution("LULLLLLLU"));
