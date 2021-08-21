function solution(passwords, s) {
  const splitFromS = s
    .split("#")
    .filter(Boolean)
    .map((x) => +x);

  let count = 0;

  for (let i = 0; i < passwords.length; i++) {
    const [apartment, password] = passwords[i];

    let j = 0;
    while (j < splitFromS.length) {
      if (splitFromS[j] === apartment) {
        if (splitFromS[j + 1] === password) {
          count++;
        }
      }
      j += 2;
    }
  }

  console.log("count:", count);
}

console.log(
  "test:",
  solution(
    [
      [101, 9999],
      [102, 1111],
    ],
    "101#9999#102#1111#101#9999#101#9999#"
  )
);
