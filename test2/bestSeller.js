function solution(books) {
  const dict = books.reduce((prev, curr) => {
    if (prev[curr]) prev[curr] += 1;
    else prev[curr] = 1;

    return prev;
  }, {});

  const maxBook = Object.keys(dict).reduce((a, b) => {
    return dict[a] > dict[b] ? a : b;
  });

  return maxBook;
}

console.log(solution(["kimtop", "top", "top", "top", "top"]));
