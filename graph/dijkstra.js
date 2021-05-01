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

  priorityQueue.insert(...data);
  return priorityQueue;
}

// 그래프를 배열화
function convertGraphToArray(graph, startNode) {
  const mapStartNodeToZero = (startPoint) => (point) => {
    if (point === startPoint) return [point, 0];
    else return [point, Infinity];
  };

  const extractedArrayFromGraphNodeKeys = Object.keys(graph).map(
    mapStartNodeToZero(startNode)
  );

  return extractedArrayFromGraphNodeKeys;
}

dijkstra(graph, "A");
