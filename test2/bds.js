const answer = [];

function solution(nodes, startNode) {
  const graph = nodes.reduce((obj, node) => {
    const [n1, n2] = node;
    obj[n1] = [...(obj[n1] || []), n2];
    obj[n2] = [...(obj[n2] || []), n1];
    return obj;
  }, {});

  dfs(graph, startNode);
  bfs(graph, startNode);
  console.log(answer.join("\n").replace(/,/g, " "));
}

function bfs(graph, startNode) {
  const nextVisitQueue = [startNode];
  const visitedQueue = [];

  while (nextVisitQueue.length) {
    const node = nextVisitQueue.shift();

    if (visitedQueue.includes(node)) continue;
    visitedQueue.push(node);

    if (!graph[node]) break;
    graph[node].sort((a, b) => a - b);
    nextVisitQueue.push(...graph[node]);
  }
  answer.push(visitedQueue);
}

function dfs(graph, startNode) {
  const nextVisitStack = [startNode];
  const visitedQueue = [];

  while (nextVisitStack.length) {
    const node = nextVisitStack.pop();

    if (visitedQueue.includes(node)) continue;

    visitedQueue.push(node);

    if (!graph[node]) break;
    graph[node].sort((a, b) => b - a);
    nextVisitStack.push(...graph[node]);
  }

  answer.push(visitedQueue);
}

const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [V, E, S] = n.split(" ").map((v) => +v);
const nodes = input.map((v) => v.split(" ").map((W) => +W));

solution(nodes, S);

// 1
// [1, 2],
// [1, 3],
// [1, 4],
// [2, 4],
// [3, 4],

// 3
// [5, 4],
// [5, 2],
// [1, 2],
// [3, 4],
// [3, 1],

// 1
// [2, 3],

// solution([[2, 3]], 1);
