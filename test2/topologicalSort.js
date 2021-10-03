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
