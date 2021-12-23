class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(item) {
    const node = new Node(item);
    if (this.head === null) {
      this.head = node;
      this.head.next = this.tail;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.size += 1;
  }

  length() {
    return this.size;
  }

  popLeft() {
    const popItem = this.head;
    this.head = this.head.next;
    this.size -= 1;
    return popItem.data;
  }
}
function solution(size) {
  const queue = new Queue();
  //   const queue = [];
  for (let i = 1; i <= size; i++) {
    queue.push(i);
  }

  const start = new Date().getTime();
  while (queue.length() > 1) {
    queue.popLeft();
    queue.push(queue.popLeft());
  }

  //   while (queue.length > 1) {
  //     queue.shift();
  //     queue.push(queue.shift());
  //   }
  const end = new Date().getTime();
  console.log("time: ", end - start);
  //   queue:42
  //   arr:49381

  return queue.popLeft();
}

console.log(solution(500000));
