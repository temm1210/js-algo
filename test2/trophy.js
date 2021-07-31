function solution(trophies) {
  function sideTrophyCount(trophies) {
    let prevTrophy = trophies[0];
    let result = 1;

    for (let i = 1; i < trophies.length; i++) {
      if (prevTrophy < trophies[i]) {
        result++;
        prevTrophy = trophies[i];
      }
    }

    return result;
  }

  const leftTrophyCount = sideTrophyCount(trophies);
  const rightTrophyCount = sideTrophyCount(trophies.reverse());

  console.log("leftTrophyCount:", leftTrophyCount);
  console.log("rightTrophyCount:", rightTrophyCount);
}

console.log(solution([3, 4, 6, 4, 3, 7, 2]));
