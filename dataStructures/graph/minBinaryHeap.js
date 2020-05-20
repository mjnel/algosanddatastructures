



class Node{

    constructor(value,priority){
        this.value = value
        this.priority = priority
    }
}



class PriorityQueue {
    constructor(){
        this.values = []
    }





    enqueue(value,priority){
    let  newVal = new Node(value, priority) 
    this.values.push(newVal)
        
    return this.reOrder()

    }


    reOrder(){
    let idx = this.values.length -1
    const elementPriority = this.values[idx].priority
    const element = this.values[idx]
    
        // debugger;
        while(idx > 0){
        
            let parentIndex = Math.floor((idx -1)/2)
            let parentPriority = this.values[parentIndex].priority
            let parent = this.values[parentIndex]
            // debugger; 
            
            // if greater break as stuff which is greater goes below
            if(elementPriority >= parentPriority){
                // debugger
                break
            }

            // putting the node at its parent location

            this.values[parentIndex] = element;

            //putting the element at the parent index at the end
            this.values[idx]= parent

            //setting the index to be the old parent value
            idx = parentIndex
            // debugger;
        }

    }





    dequeue(){
    
        // debugger;
        let endValue = this.values.pop()
        let startValue = this.values[0]
        this.values.shift()
        this.values.unshift(endValue)
        // debugger; 
        // console.log(`calling sinkdown with ${this.valuesList}`)

        this.sinkDown(0)
        return startValue
   
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    // If no swap has happened so swap = null and right is less than element - make it right
                    (swap === null && rightChild.priority < element.priority) || 
                    // if left child has altered swap an right is less than left - make it right
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            // debugger; 
            // putting the smaller value in the place
            this.values[idx] = this.values[swap];
            // debugger 
            // putting the larger value in the new place
            this.values[swap] = element;
            // debugger
            // updating the idx var so that 
            idx = swap;
            // debugger
        }
    }







}
// working

module.exports = {PriorityQueue}





    // class PriorityQueue{
    //     constructor(){
    //         this.values =[]
    //     }


    //     enqueue(val, priority){
    //         this.values.push({val, priority})
    //         this.sort()
    //     }

    //     dequeue(){
    //         return this.values.shift()
    //     }

    //     sort(){
    //         this.values.sort((a,b)=> a.priority - b.priority)
    //     }

    // }

let testPriorityQueue = new PriorityQueue()
testPriorityQueue.enqueue("Mark",7)
testPriorityQueue.enqueue("Mark",36)
testPriorityQueue.enqueue("Mark",19)
testPriorityQueue.enqueue("Mark",17)
testPriorityQueue.enqueue("Mark",3)
testPriorityQueue.enqueue("Mark",2)
testPriorityQueue.enqueue("Mark",1)
testPriorityQueue.enqueue("Mark",25)
testPriorityQueue.enqueue("Mark",100)
// debugger;
// testPriorityQueue.dequeue()

// debugger; 




