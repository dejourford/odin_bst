// Build a Node class/factory. 
// It should have an attribute for the data it stores as well as its left and right children.
class Node {

    constructor(data) {

        this.data = data;
        this.left = null;
        this.right = null;
    }

}

// Build a Tree class/factory which accepts an array when initialized. 
// The Tree class should have a root attribute, which uses the return value of buildTree() which you’ll write next.
class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }

    buildTree(array) {

        // if no array, then return
        if (array.length === 0) return null;


        // sort array
        let sortedArray = array.sort((a, b) => a - b);
        

        // find middle num
        let middleNum = Math.floor(sortedArray.length / 2);

        // create root node
        const rootNode = new Node(sortedArray[middleNum]);

        // build subtrees
        rootNode.left = this.buildTree(sortedArray.slice(0, middleNum));
        rootNode.right = this.buildTree(sortedArray.slice(middleNum + 1))

        // return root
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
