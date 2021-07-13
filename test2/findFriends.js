const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

// BFS
const friendsGraph = {};
function solution(arr) {
  const visited = [];
  const needVisitQueue = [];

  friendsGraph[arr[0]] = friendsGraph[arr[0]]
    ? [...friendsGraph[arr[0]], arr[1]]
    : [arr[1]];

  friendsGraph[arr[1]] = friendsGraph[arr[1]]
    ? [...friendsGraph[arr[1]], arr[0]]
    : [arr[0]];

  const root = Object.keys(friendsGraph)[0];
  needVisitQueue.push(root);

  console.log("friendsGraph:", friendsGraph);

  while (needVisitQueue.length) {
    const nextNeedVisitVertex = needVisitQueue.pop();
    const isVisited = visited.includes(nextNeedVisitVertex);

    if (isVisited) continue;

    needVisitQueue.push(...friendsGraph[nextNeedVisitVertex]);
    visited.push(nextNeedVisitVertex);
  }

  console.log("visited:", visited.length);
}

// union-find
function solution2(friendArr) {
  const [f1, f2] = friendArr;

  if (!nodes[f1]) {
    nodes[f1].parent = f1;
    nodes[f1].networkCount = 1;
  }

  if (!nodes[f2]) {
    nodes[f2].parent = f2;
    nodes[f2].networkCount = 1;
  }

  union(f1, f2);
}

rl.on("line", function (friends) {
  /**********************************/
  const friendArr = friends.split(" ");
  solution(friendArr);

  /**********************************/
}).on("close", function () {
  console.log(input);
  process.exit();
});
