const createTree = (value) => {
  return {
    data: value,
    children: null,
  };
};
const addChild = (node, value) => {
  const newNode = {
    data: value,
    children: null,
  };
  node.children = node.children || [];
  node.children.push(newNode);
  return newNode;
};

const tree = createTree(10);
const node2 = addChild(tree, 20);
const node3 = addChild(tree, 30);
addChild(tree, 40);
addChild(tree, 50);
addChild(node2, 201);
addChild(node2, 202);
addChild(node2, 203);
addChild(node2, 204);
console.log(tree);
