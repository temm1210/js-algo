// heap으로 구성
// default는 min-heap

class PriorityQueue {
  constructor(comparator = (a, b) => a < b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size = () => this._heap.length;

  isEmpty = () => this.size() === 0;

  insert = (...datas) => {
    datas.forEach((data) => {
      this._heap.push(data);
      this._heapifyUp();
    });
  };

  pop = () => {
    if (this.isEmpty()) {
      return false;
    }
    let currentIndex = this.size() - 1;

    const popedData = this._heap[0];

    // 마지막 데이터랑 루트데이터를 체인지
    this._swap(0, currentIndex);

    // 마지막데이터 삭제
    this._heap.pop();
    // 새로 루트자리에 들어온 데이터를 heapify
    this._heapifyDown();

    return popedData;
  };

  // 새로들어온 데이터를 아래로 끌어내리면서 heapify
  _heapifyDown = () => {
    let currentIndex = 0;

    while (
      // this._leftIndex(currentIndex) <= this.size() - 1 &&
      // this._rightIndex(currentIndex) <= this.size() - 1 &&
      this._compare(this._leftIndex(currentIndex), currentIndex) ||
      this._compare(this._rightIndex(currentIndex), currentIndex)
    ) {
      let minDataIndex;
      const leftIndex = this._leftIndex(currentIndex);
      const rightIndex = this._rightIndex(currentIndex);

      if (this._compare(leftIndex, rightIndex)) {
        minDataIndex = leftIndex;
      } else {
        minDataIndex = rightIndex;
      }

      this._swap(minDataIndex, currentIndex);
      currentIndex = minDataIndex;
    }
  };

  // 새로들어온 데이터를 위로 끌어올리면서 heapify
  _heapifyUp = () => {
    let currentIndex = this.size() - 1;

    while (
      // this.size() !== 1 &&
      currentIndex > 0 &&
      this._compare(currentIndex, this._parentIndex(currentIndex))
    ) {
      this._swap(currentIndex, this._parentIndex(currentIndex));
      currentIndex = this._parentIndex(currentIndex);
    }
  };

  _compare = (a, b) => {
    return this._heap[a]
      ? this._heap[b]
        ? this._comparator(this._heap[a], this._heap[b])
        : this._heap[a]
      : 0;
  };

  _swap = (a, b) => {
    [this._heap[a], this._heap[b]] = [this._heap[b], this._heap[a]];
  };
  _parentIndex = (childIndex) => Math.ceil(childIndex / 2) - 1;
  _leftIndex = (parentIndex) => 2 * parentIndex + 1;
  _rightIndex = (parentIndex) => this._leftIndex(parentIndex) + 1;
}

module.exports = PriorityQueue;

// const queue = new PriorityQueue((a, b) => a < b);
// queue.insert(1, 40, 33, 20, 10, 2, 30, 6, 11, 22, 5);

// const queue = new PriorityQueue((a, b) => a[1] > b[1]);
// queue.insert(
//   ["a", 0],
//   ["b", 5],
//   ["c", 10],
//   ["d", 2],
//   ["e", 12],
//   ["f", 1],
//   ["g", 3],
//   ["h", 4]
// );

// while (!queue.isEmpty()) {
//   console.log(queue.pop());
// }
