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

const nodes = {};

//
// f1: {
//   parent:f1,
//   networkCount:1
// }
// union-find
function solution2(friendArr) {
  const [f1, f2] = friendArr;

  if (!nodes[f1]) {
    nodes[f1] = {};
    nodes[f1].parent = f1;
    nodes[f1].networkCount = 1;
  }

  if (!nodes[f2]) {
    nodes[f2] = {};
    nodes[f2].parent = f2;
    nodes[f2].networkCount = 1;
  }

  union(f1, f2);

  console.log("result:", nodes[f1].networkCount);
}

function union(f1, f2) {
  const f1Parent = find(f1);
  const f2Parent = find(f2);

  if (f1Parent !== f2Parent) {
    nodes[f2].parent = f1;
    nodes[f1].networkCount += nodes[f2].networkCount;
    nodes[f2].networkCount = nodes[f1].networkCount;
  }
}

function find(f) {
  if (f === nodes[f].parent) {
    return f;
  }
  // path compression
  const parent = find(nodes[f].parent);
  nodes[f].parent = parent;
  return nodes[f].parent;
}

rl.on("line", function (friends) {
  /**********************************/
  const friendArr = friends.split(" ");
  // solution(friendArr);
  solution2(friendArr);

  /**********************************/
}).on("close", function () {
  console.log(input);
  process.exit();
});
