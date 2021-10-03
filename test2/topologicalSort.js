class PriorityQueue {
  _data = [];
  _comparator;

  constructor(comparator = (a, b) => a < b) {
    this._comparator = comparator;
  }

  insert(data) {
    // 숫자 0이 false로 판단되기때문에 !data or !order형식으로 사용X
    if (data === null || data === undefined) {
      throw Error("data는 필수 값 입니다.");
    }
    this._push(data);
    this._heapifyUp(this._lastIndex());
  }

  pop() {
    if (!this.length()) return null;
    const popData = this._shift();
    this._heapifyDown(0);
    return popData;
  }

  length() {
    return this._data.length;
  }

  _push(data) {
    return this._data.push(data);
  }
  _shift() {
    return this._data.shift();
  }
  _heapifyUp(currentIndex) {
    if (currentIndex <= 0) return;

    const current = this._data[currentIndex];
    const parentIndex = this._getParentIndex(currentIndex);
    const parent = this._data[parentIndex];

    if (this._comparator(current, parent)) {
      this._swap(currentIndex, parentIndex);
      this._heapifyUp(parentIndex);
    }
  }

  _heapifyDown(currentIndex) {
    if (currentIndex >= this._lastIndex()) return;

    const current = this._data[currentIndex];
    const child = this._calcChildFromComparator(currentIndex);

    if (!child) return;

    if (this._comparator(child.data, current)) {
      this._swap(currentIndex, child.index);
      this._heapifyDown(child.index);
    }
  }

  _calcChildFromComparator(index) {
    const { leftChildIndex, rightChildIndex } = this._getChildrenIndex(index);

    const leftChild = this._data[leftChildIndex];
    const rightChild = this._data[rightChildIndex];

    if (leftChild && rightChild) {
      return this._comparator(leftChild, rightChild)
        ? { data: leftChild, index: leftChildIndex }
        : { data: rightChild, index: rightChildIndex };
    } else if (leftChild) {
      return { data: leftChild, index: leftChildIndex };
    } else return null;
  }

  _getChildrenIndex(index) {
    const childIndex = 2 * index;
    return { leftChildIndex: childIndex + 1, rightChildIndex: childIndex + 2 };
  }
  _getParentIndex(index) {
    return Math.floor(index / 2);
  }

  _lastIndex() {
    return this.length() - 1;
  }

  _swap(index1, index2) {
    [this._data[index1], this._data[index2]] = [
      this._data[index2],
      this._data[index1],
    ];
  }
}

// 위상정렬 문제
function solution(data, orders) {
  const questions = Array.from(Array(data).keys()).map((x) => x + 1);

  // 우선순위가 낮은 데이터들을 root에 배치
  // 선행조건이 해결된 순위가 같다면 문제의 난이도 순으로 배치
  const MinPriorityQueue = new PriorityQueue((a, b) => {
    if (a.prerequisite === b.prerequisite) return a.question < b.question;
    else return a.prerequisite < b.prerequisite;
  });

  const graph = {};

  questions.forEach((question) => {
    graph[question] = { prerequisite: 0, nextQuestion: [] };
  });
  orders.forEach((order) => {
    graph[order[1]] = {
      ...graph[order[1]],
      prerequisite: graph[order[1]].prerequisite + 1,
    };
    graph[order[0]] = {
      ...graph[order[0]],
      nextQuestion: [...graph[order[0]].nextQuestion, order[1]],
    };
  });

  const result = [];

  Object.keys(graph).forEach((question) => {
    // 선행조건이 모두 해결되었거나 없을때
    if (graph[question].prerequisite === 0) {
      const numberQuestion = +question;

      // 우선순위의 첫번째 기준은 선행조건
      // 두번째 순위의 기준은 문제의 난이도
      MinPriorityQueue.insert({
        question: numberQuestion,
        prerequisite: graph[question].prerequisite,
      });
    }
  });

  // 우선순위큐를 다음노드 방문할 큐로 활용
  while (MinPriorityQueue.length()) {
    const { question } = MinPriorityQueue.pop();
    // 해결된 문제는 결과에 반영
    result.push(question);
    const nextQuestions = graph[question].nextQuestion;

    nextQuestions.forEach((question) => {
      graph[question].prerequisite--;
      // 선행조건이 모두 완료되었다면
      if (graph[question].prerequisite === 0) {
        MinPriorityQueue.insert({
          question,
          prerequisite: graph[question].prerequisite,
        });
      }
    });
  }

  return result;
}

console.log(
  solution(7, [
    [1, 2],
    [1, 4],
    [4, 5],
    [2, 3],
    [5, 3],
    [7, 5],
    [6, 7],
  ])
);

// solution(7, [
//     [1, 2],
//     [1, 4],
//     [4, 5],
//     [2, 3],
//     [5, 3],
//     [7, 5],
//     [6, 7],
//   ])
