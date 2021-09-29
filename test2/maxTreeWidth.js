class Node {
  data = null;
  leftNode = null;
  rightNode = null;

  constructor(data, leftNode, rightNode) {
    this.data = data;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }
}

class Tree {
  root = null;
  nodes = null;
  // 각 노드에 대한 높이값 캐쉬
  heightCache = {};

  insert(data, leftData, rightData) {
    const newNode = new Node(
      data,
      new Node(leftData, null, null),
      new Node(rightData, null, null)
    );
    if (data === "A") this.root = newNode;
    if (!this.nodes) return (this.nodes = newNode);

    const searchNode = this.search(newNode);

    if (searchNode) {
      if (leftData !== -1) searchNode.leftNode = new Node(leftData, null, null);
      if (rightData !== -1)
        searchNode.rightNode = new Node(rightData, null, null);
    }
  }

  search(node, nodes = this.nodes) {
    if (!node || !nodes) return null;
    if (nodes.data === node.data) return nodes;
    else {
      const searchNode =
        this.search(node, nodes.leftNode) || this.search(node, nodes.rightNode);
      return searchNode;
    }
  }

  searchFirstRoot(nodes = this.nodes) {
    let result = "";
    if (nodes) {
      result =
        nodes.data +
        this.searchFirstRoot(nodes.leftNode) +
        this.searchFirstRoot(nodes.rightNode);
    }

    return result;
  }

  searchMidRoot(nodes = this.nodes) {
    let result = "";
    if (nodes) {
      result =
        this.searchMidRoot(nodes.leftNode) +
        nodes.data +
        "," +
        this.searchMidRoot(nodes.rightNode);
    }
    return result;
  }

  searchLastRoot(nodes = this.nodes) {
    let result = "";
    if (nodes) {
      result =
        this.searchLastRoot(nodes.leftNode) +
        this.searchLastRoot(nodes.rightNode) +
        nodes.data;
    }

    return result;
  }

  getTotalHeight(nodes = this.nodes) {
    let height = 0;

    if (nodes) {
      height =
        1 +
        Math.max(
          this.getTotalHeight(nodes.leftNode),
          this.getTotalHeight(nodes.rightNode)
        );
    }

    return height;
  }

  calHeight(data, nodes = this.nodes, height = 1) {
    if (!nodes) return null;
    // 캐쉬값이 있다면 캐쉬 값 사용
    if (this.heightCache[data]) return this.heightCache[data];

    this.heightCache[nodes.data] = height;

    let tempHeight = height + 1;

    if (data === nodes.data) return height;
    else {
      return (
        this.calHeight(data, nodes.leftNode, tempHeight) ||
        this.calHeight(data, nodes.rightNode, tempHeight)
      );
    }
  }
}

function solution(data) {
  let result = [];

  const BinaryTree = new Tree();

  data.forEach((d) => {
    BinaryTree.insert(...d);
  });

  const row = BinaryTree.getTotalHeight() + 1;
  const column = data.length + 1;

  const matrix = Array.from({ length: row }, () =>
    Array.from({ length: column }, () => 0)
  );

  const searchResult = BinaryTree.searchMidRoot()
    .split(",")
    .map((x) => +x)
    .filter(Boolean);

  // 2차원 배열에 배치
  for (let i = 0; i < searchResult.length; i++) {
    const data = searchResult[i];
    matrix[BinaryTree.calHeight(data)][i + 1] = data;
  }

  let maxWidth = 0;
  for (let i = 1; i < matrix.length; i++) {
    const heights = matrix[i]
      .map((d, index) => (d ? index : null))
      .filter(Boolean);

    const max = Math.max(...heights);
    const min = Math.min(...heights);
    const width = max - min + 1;

    if (maxWidth < width) {
      maxWidth = width;
      result = [i, width];
    }
  }

  return result;
}

console.log(
  solution([
    [1, 2, 3],
    [2, 4, 5],
    [3, 6, 7],
    [4, 8, -1],
    [5, 9, 10],
    [6, 11, 12],
    [7, 13, -1],
    [8, -1, -1],
    [9, 14, 15],
    [10, -1, -1],
    [11, 16, -1],
    [12, -1, -1],
    [13, 17, -1],
    [14, -1, -1],
    [15, 18, -1],
    [16, -1, -1],
    [17, -1, 19],
    [18, -1, -1],
    [19, -1, -1],
  ])
);
