class PriorityQueue {
  _data = [];
  _comparator;

  constructor(comparator = (a, b) => a < b) {
    this._comparator = comparator;
  }

  insert(data, order) {
    // 숫자 0이 false로 판단되기때문에 !data or !order형식으로 사용X
    if (
      data === null ||
      data === undefined ||
      order === null ||
      order === undefined
    ) {
      throw Error("data와 order 둘다 필수 값 입니다.");
    }
    this._push(data, order);
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

  _push(data, order) {
    return this._data.push({ data, order });
  }
  _shift() {
    return this._data.shift();
  }
  _heapifyUp(currentIndex) {
    if (currentIndex <= 0) return;

    const { order: currentOrder } = this._getData(currentIndex);
    const parent = this._calcParentFromComparator(currentIndex);

    if (this._comparator(currentOrder, parent.order)) {
      this._swap(currentIndex, parent.index);
      this._heapifyUp(parent.index);
    }
  }

  _heapifyDown(currentIndex) {
    if (currentIndex >= this._lastIndex()) return;

    const { order: currentOrder } = this._getData(currentIndex);
    const child = this._calcChildFromComparator(currentIndex);

    if (this._comparator(child.order, currentOrder)) {
      this._swap(currentIndex, child.index);
      this._heapifyDown(child.index);
    }
  }

  _calcParentFromComparator(index) {
    const parentIndex = this._getParentIndex(index);
    const parent = this._getData(parentIndex);

    if (!parent) return null;
    return { order: parent.order, index: parentIndex };
  }
  _calcChildFromComparator(index) {
    const { leftChildIndex, rightChildIndex } = this._getChildrenIndex(index);

    const leftChild = this._getData(leftChildIndex);
    const rightChild = this._getData(rightChildIndex);

    if (leftChild && rightChild) {
      return this._comparator(leftChild.order, rightChild.order)
        ? { order: leftChild.order, index: leftChildIndex }
        : { order: rightChild.order, index: rightChildIndex };
    } else if (leftChild) {
      return { order: leftChild.order, index: leftChildIndex };
    } else return null;
  }

  _getData(index) {
    const data = this._data[index];

    if (!data) return null;
    return { data: data.data, order: data.order };
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
