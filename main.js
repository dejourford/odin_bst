class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array) {
        const sortedArray = [...new Set(array)].sort((a, b) => a - b);
        this.root = this.buildTree(sortedArray);
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

    // Write an includes(value) function that accepts a value and
    // returns true if the given value is in the tree. 
    // If the value isn’t in the tree, it should return false.
    includes(value) {
        // check for valid input
        if (typeof value !== "number") throw new RangeError("Please enter an integer");

        // define current node
        let current = this.root;

        // while loop for null node
        while (current !== null) {
            if (value === current.data) {
                return true
            }

            if (value < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        // else return false 
        return false
    }

    insert(value) {
        // define current as this.root
        let current = this.root;

        // while current !== null
        while (true) {
            // if value === current.data, throw error
            if (value === current.data) throw new Error("This node already exists!")

            // if value < current.data
            if (value < current.data) {

                if (current.left === null) {
                    current.left = new Node(value);
                    return;
                }
                current = current.left
            } else {
                if (current.right === null) {
                    current.right = new Node(value);
                    return;
                }
                current = current.right;
            }
        }
    }

    deleteItem(value) {

        let current = this.root;
        let parent = null;

        // search for node
        while (current !== null && current.data !== value) {

            parent = current;

            if (value < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }

        }

        if (current === null) {
            throw new Error("Item does not exist!");
        }

        // CASE 1: leaf node
        if (!current.left && !current.right) {

            if (current === this.root) {
                this.root = null;
            } else if (parent.left === current) {
                parent.left = null;
            } else {
                parent.right = null;
            }

        }

        // CASE 2: one child
        else if (!current.left || !current.right) {

            let child = current.left || current.right;

            if (current === this.root) {
                this.root = child;
            } else if (parent.left === current) {
                parent.left = child;
            } else {
                parent.right = child;
            }

        }

        // CASE 3: two children
        else {

            let successorParent = current;
            let successor = current.right;

            while (successor.left !== null) {
                successorParent = successor;
                successor = successor.left;
            }

            current.data = successor.data;

            if (successorParent.left === successor) {
                successorParent.left = successor.right;
            } else {
                successorParent.right = successor.right;
            }

        }

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

// console.log(newTree.includes(14))
newTree.insert(5)
newTree.insert(90)
newTree.insert(24)
console.log(newTree.includes(24))
console.log(newTree.deleteItem(8))
prettyPrint(newTree.root);
