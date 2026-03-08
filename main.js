// Build a Node class/factory. 
// It should have an attribute for the data it stores as well as its left and right children.
class Node {

    constructor(data) {

        this.data = data;
        this.lchild = null;
        this.rchild = null;
    }

}

// Build a Tree class/factory which accepts an array when initialized. 
// The Tree class should have a root attribute, which uses the return value of buildTree() which you’ll write next.
class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }

    buildTree(array) {
        // sort array
        const sortedArray = array.sort((a, b) => a - b);
        console.log('sorted:', sortedArray)

        // find middle num
        let middleNum = Math.floor(sortedArray.length / 2);

        // create root node
        const rootNumber = sortedArray[middleNum]
        const rootNode = new Node(rootNumber);


        // 1. assign root node left values
        


        // get lchild array [ 1, 3, 4, 6 ]
        let leftArray = sortedArray.slice(0, middleNum);
        console.log('left:', leftArray);
        console.log(rootNode)
        // while (leftArray.length !== 1) {
        //     middleNum = Math.floor(leftArray.length / 2);
        //     console.log('middle num is now:', middleNum)

        //     leftArray = leftArray.splice(0, )

        // }



        // get rchild array [ 8, 10, 13, 14 ]
        const rightArray = sortedArray.slice(middleNum + 1, array.length);
        console.log('right:', rightArray);


        // set middleNum to null
        // while array.length !== 1
        // middleNum = Math.floor(array.length / 2);
        // console.log(middleNum)
        
            rootNode.lchild = 3;


            // 2. assign root node right values
            rootNode.rchild = 4;

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
console.log(newTree.root);
