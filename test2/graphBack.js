function solution(count, points) {
  const graph = makeGraph(points);
  const nodes = Array.from({ length: count + 1 }).fill(false);

  let result = 0;

  const visitedQueue = [];
  const nextVisitQueue = [];

  nextVisitQueue.push(points[0][0]);

  for (let i = 1; i < nodes.length; i++) {
    const node = nodes[i];
    if (node) continue;

    nextVisitQueue.push(i);
    result++;

    while (nextVisitQueue.length) {
      const startNode = nextVisitQueue.pop();

      if (visitedQueue.includes(startNode)) continue;

      nodes[startNode] = true;
      visitedQueue.push(startNode);
      nextVisitQueue.push(...graph[startNode]);
    }
  }

  return result;
}

function makeGraph(nodes) {
  return nodes.reduce((prev, curr) => {
    const [v1, v2] = curr;
    prev[v1] = [...(prev[v1] ?? []), v2];
    prev[v2] = [...(prev[v2] ?? []), v1];
    return prev;
  }, {});
}

console.log(
  solution(6, [
    [1, 2],
    [2, 5],
    [5, 1],
    [3, 4],
    [4, 6],
    [5, 4],
    [2, 4],
    [2, 3],
  ])
);
