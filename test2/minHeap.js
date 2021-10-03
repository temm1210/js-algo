class Heap {
  data = [];

  insert(data) {
    this.data.push(data);
    this.heapifyUp(this.data.length - 1);
  }

  heapifyUp(currentIndex) {
    if (currentIndex <= 0) return;
    else {
      const parentIndex = Math.floor(currentIndex / 2);
      const parent = this.data[parentIndex];
      const current = this.data[currentIndex];

      if (parent >= current) {
        this.swap(parentIndex, currentIndex);
        this.heapifyUp(parentIndex);
      }
    }
  }

  heapifyDown(currentIndex) {
    if (currentIndex >= this.data.length - 1) return;
    else {
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = leftChildIndex + 1;

      const leftChild = this.data[leftChildIndex];
      const rightChild = this.data[rightChildIndex];

      const minChild =
        rightChild <= leftChild
          ? { data: rightChild, index: rightChildIndex }
          : { data: leftChild, index: leftChildIndex };

      const current = this.data[currentIndex];

      if (current > minChild.data) {
        this.swap(minChild.index, currentIndex);
        this.heapifyDown(minChild.index);
      }
    }
  }

  swap(a, b) {
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
  }

  pop() {
    const popData = this.data.shift();
    this.heapifyDown(0);

    return popData || 0;
  }
}

function solution(data) {
  const MinHeap = new Heap();

  data.forEach((d) => {
    if (d === 0) {
      console.log(MinHeap.pop());
    } else {
      MinHeap.insert(d);
    }
  });
}

//                    1(0)
//       9(1)                   12(2)
// 18(3)       11(4)       13(5)     17(6)

//                      9(0)
//          12(1)               18(2)
//      11         13       17
// n
// left: 2n+1
// right: 2n+2

solution([0, 12345678, 1, 2, 0, 0, 0, 0, 32]);
