

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
        }else{

        let current = this.root
       
        while (true){
            // duplicate checker
            if(val === current.val) return undefined

            if(val < current.value){
                if(current.left === null){
                    current.left = newNode
                    return this
                }else{
                    current = current.left  
                }

            }else if(val > current.value){
                if(current.right === null){
                    current.right = newNode
                    return this
                }else{
                    current = current.right 
                }

                }

            }


        }


    }


    find(val){
        console.log(`finding ${val}`)
        if(!this.root){
            return false
        }  
    
    let current = this.root

    while(true){
        if(val === current.value){
            // debugger
            return current
        }else if(val < current.value && current.left){
            // debugger
            current = current.left
        }
        else if(val > current.value && current.right){
            // debugger;
            current = current.right
        }
        else{
            // debugger
            return false
            }
 
        }
    }

// colts solution

    // find(value){
    //     if(this.root === null) return false;
    //     var current = this.root,
    //         found = false;
    //     while(current && !found){
    //         if(value < current.value){
    //             current = current.left;
    //         } else if(value > current.value){
    //             current = current.right;
    //         } else {
    //             found = true;
    //         }
    //     }
    //     if(!found) return undefined;
    //     return current;
    // }
    // contains(value){
    //     if(this.root === null) return false;
    //     var current = this.root,
    //         found = false;
    //     while(current && !found){
    //         if(value < current.value){
    //             current = current.left;
    //         } else if(value > current.value){
    //             current = current.right;
    //         } else {
    //             return true;
    //         }
    //     }
    //     return false;
    // }
    

breathFirstSearch(){
        let q = []
        let result = []

        // push and shift
        q.push(this.root)
        // debugger

        while(q.length != 0){
            // debugger
            let current = q.shift();

            if(current.left){
                q.push(current.left)
            }

            if(current.right){
                q.push(current.right)
            }
            result.push(current)
            // debugger;
    }
    return result
}



// explore node an then put in return array

depthFirstSearchPreOrder(){

    let nodesVisitied = []
    let current = this.root
    
    // nodesVisitied.push(current)

    let traverse = (node)=>{
        nodesVisitied.push(node.value)
        // debugger;
        if(node.left){
            // debugger
            traverse(node.left)
        }
        if(node.right){
            traverse(node.right)

        }
    }

    traverse(current);
    // debugger
    return nodesVisitied


}

// explore all childern and then put in retuen array

depthFirstSearchPostOrder(){

    let nodesVisitied = []
    let current = this.root
    
    // nodesVisitied.push(current)

    let traverse = (node)=>{
        // nodesVisitied.push(node.value)
        // debugger;
        if(node.left){
            // debugger
            traverse(node.left)
        }
        if(node.right){
            traverse(node.right)

        }
        nodesVisitied.push(node.value)

    }

    traverse(current);
    // debugger
    return nodesVisitied

}



depthFirstSearchInOrder(){
    let nodesVisitied = []
    let current = this.root
    
    // nodesVisitied.push(current)

    let traverse = (node)=>{
        // nodesVisitied.push(node.value)
        // debugger;
        if(node.left){
            // debugger
            traverse(node.left)
        }       
        
        nodesVisitied.push(node.value)

        if(node.right){
            traverse(node.right)

        }

    }

    traverse(current)


    debugger
    return nodesVisitied
}

 }

let testArr =  [5, 4, 7, 9, 2, 4, 4, 5, 6]
let tree = new BinarySearchTree

for(let i =0;  i<testArr.length; i++){
    console.log(testArr[i])
    tree.insert(testArr[i])
    // debugger
}

// debugger
// tree.insert(10)
// tree.insert(5)
// tree.insert(13)
// tree.insert(11)
// tree.insert(2)
// tree.insert(16)
// tree.insert(7)
// tree.depthFirstSearchPostOrder()
// tree.breathFirstSearch()
// tree.depthFirstSearchInOrder()


// debugger



