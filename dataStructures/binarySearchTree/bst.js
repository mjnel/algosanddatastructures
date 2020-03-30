

class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(val){
    let newNode = new Node(val);

        if(!this.root){
            this.root = newNode
            return this;
        }


    }
}

let test = new BinarySearchTree

debugger;



