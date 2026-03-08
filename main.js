class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array) {
        const sortedArray = array.sort((a, b) => a - b);
        this.root = this.buildTree(sortedArray)
    }

    buildTree(array) {
        // base case
        if (array.length === 0) return null;

        // find middle index
        const middleIndex = Math.floor(array.length / 2);

        // use middle index to target middle number and create node
        const rootNode = new Node(array[middleIndex]);

        // set left and right children using buildTree()
        rootNode.left = this.buildTree(array.slice(0, middleIndex))
        rootNode.right = this.buildTree(array.slice(middleIndex + 1))

        // return node
        return rootNode
    }
}



// visual function
const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null || node === undefined) {
        return;
    }

    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
}

const newTree = new Tree([1, 3, 4, 6, 7, 8, 10, 13, 14]);

console.log(newTree.root)
prettyPrint(newTree.root);
