function solution(islands, target) {
  const [startNode, endNode] = target;
  const weights = islands.map((island) => island[2]);
  const graph = makeGraph(islands);

  let min = Math.min(...weights);
  let max = Math.max(...weights);

  let result = 0;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (isSatisfy(graph, startNode, endNode, mid)) {
      min = mid + 1;
      result = mid;
      console.log(mid);
    } else {
      max = mid - 1;
    }
  }

  return result;
}

// bfs
function isSatisfy(graph, startNode, endNode, weight) {
  const needToVisit = [startNode];
  const visited = [startNode];

  while (needToVisit.length) {
    const needToVisitNode = needToVisit.pop();
    const nextVisitNode = graph[needToVisitNode];
    const nextVisitNodes = Object.keys(nextVisitNode);

    // 다음 방문할 노드들에 대해서 중량이 weight보다 클 경우에만 탐색을 계속진행
    nextVisitNodes.forEach((node) => {
      const numberNode = +node;
      if (
        !visited.includes(numberNode) &&
        nextVisitNode[numberNode] >= weight
      ) {
        needToVisit.push(numberNode);
        visited.push(numberNode);
      }
    });
  }

  console.log("visited:", visited);
  // 최종노드를 weight를 만족하면서 방문했다면 true를 반환
  return visited.includes(endNode);
}

function makeGraph(arr) {
  const graphObj = arr.reduce((graph, curr) => {
    const [start, end, weight] = curr;

    return {
      ...graph,
      [start]: { ...graph[start], [end]: weight },
      [end]: { ...graph[end], [start]: weight },
    };
  }, {});

  return graphObj;
}

console.log(
  "solution:",
  solution(
    [
      [1, 2, 9],
      [3, 1, 2],
      [2, 3, 5],
    ],
    [1, 3]
  )
);

// console.log(
//   "solution:",
//   solution(
//     [
//       [1, 2, 2],
//       [3, 1, 3],
//       [2, 3, 2],
//     ],
//     [1, 3]
//   )
// );
