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
      if (leftData !== ".")
        searchNode.leftNode = new Node(leftData, null, null);
      if (rightData !== ".")
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
    if (!nodes) return null;
    else {
      console.log(nodes.data);
      this.searchFirstRoot(nodes.leftNode);
      this.searchFirstRoot(nodes.rightNode);
    }
  }

  searchMidRoot(nodes = this.nodes) {
    if (!nodes) return null;
    else {
      this.searchMidRoot(nodes.leftNode);
      console.log(nodes.data);
      this.searchMidRoot(nodes.rightNode);
    }
  }

  searchLastRoot(nodes = this.nodes) {
    if (!nodes) return null;
    else {
      this.searchLastRoot(nodes.leftNode);
      this.searchLastRoot(nodes.rightNode);
      console.log(nodes.data);
    }
  }
}

const BinaryTree = new Tree();

BinaryTree.insert("A", "B", "C");
BinaryTree.insert("B", "D", ".");
BinaryTree.insert("C", "E", "F");
BinaryTree.insert("E", ".", ".");
BinaryTree.insert("F", ".", "G");
BinaryTree.insert("D", ".", ".");
BinaryTree.insert("G", ".", ".");

console.log(BinaryTree.searchFirstRoot());
console.log(BinaryTree.searchMidRoot());
console.log(BinaryTree.searchLastRoot());
