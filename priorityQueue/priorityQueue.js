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
      this._heapify();
    });
  };

  _heapify = () => {
    let currentIndex = this.size() - 1;

    while (
      this.size() !== 1 &&
      !this.isEmpty() &&
      currentIndex > 0 &&
      this._compare(currentIndex, this._parentIndex(currentIndex))
    ) {
      this._swap(currentIndex, this._parentIndex(currentIndex));
      currentIndex = this._parentIndex(currentIndex);
    }
  };

  _compare = (a, b) => this._comparator(this._heap[a], this._heap[b]);

  _swap = (a, b) => {
    [this._heap[a], this._heap[b]] = [this._heap[b], this._heap[a]];
  };
  _parentIndex = (childIndex) => Math.ceil(childIndex / 2) - 1;
  _leftIndex = (parentIndex) => 2 * parentIndex + 1;
  _rightIndex = (parentIndex) => left(parentIndex) + 1;
}

const queue = new PriorityQueue();

queue.insert(1, 40, 5, 20, 10, 2, 30, 6, 11, 22, 33);

// console.log("test:", queue._heap);
