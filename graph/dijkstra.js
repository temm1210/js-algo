const PriorityQueue = require("../priorityQueue/priorityQueue");

const graph = {
  A: { B: 8, C: 1, D: 2 },
  B: {},
  C: { B: 5, D: 2 },
  D: { E: 3, F: 5 },
  E: { F: 1 },
  F: { A: 5 },
};

// 우선순위큐 생성
function factoryPriorityQueue(data, comparator) {
  const priorityQueue = new PriorityQueue(comparator);

  priorityQueue.insert(data);
  return priorityQueue;
}

// 그래프를 배열화
function convertGraphToObject(graph) {
  const initObjectFromGraphNodeKeys = Object.keys(graph).reduce(
    (prev, curr) => {
      const obj = { [curr]: Infinity };
      return { ...prev, ...obj };
    },
    {}
  );

  return initObjectFromGraphNodeKeys;
}

// 다익스트라 알고리즘
function dijkstra(graph, startNode) {
  // 각각의 인접한 노드끼리 거리를 저장한 객체
  const graphObject = convertGraphToObject(graph);

  // 첫번째 거리는 0으로 초기화
  graphObject[startNode] = 0;

  // 시작점에서 다음노드까지 거리를 저장한 큐
  const priorityQueue = factoryPriorityQueue(
    [startNode, graphObject[startNode]],
    (a, b) => a[1] < b[1]
  );

  // console.log("graphObject:", graphObject);

  while (!priorityQueue.isEmpty()) {
    // 우선순위큐의 가장 작은값이 나옴
    const [node, weight] = priorityQueue.pop();

    // 우선순위큐 사용의 장점(우선순위 큐에 graphObject보다 큰 거리값이 들어가 있다면 뒤의 계산과정 불필요)
    // 최소거리를 계산하는게목적(그리디)
    if (graphObject[node] < weight) continue;

    Object.keys(graph[node]).forEach((adjacentNode) => {
      // 인접노드 거리계산
      const newDistance = graph[node][adjacentNode] + weight;

      if (newDistance < graphObject[adjacentNode]) {
        graphObject[adjacentNode] = newDistance;
        priorityQueue.insert([adjacentNode, newDistance]);
      }
    });
  }

  console.log("graphObjec2t:", graphObject);
}

dijkstra(graph, "A");

// 우선순위 큐에는 "시작지점"부터 특정노드까지의 총 거리가 저장되어있음
// infinite값으로 초기화된 graph객체는 "시작지점" 부터가 아니라 각각 이전노드로 부터의 거리들이 저장되어있음 -> 이 값들을 업데이트 해나감
// 우선순위 큐를 사용하면 불필요한 계산을 줄일 수 있음(우선 순위큐가 최소거리만 계속 계산하도록 도와줘서 최소거리보다 큰 값은 계산스킵이 가능함)
