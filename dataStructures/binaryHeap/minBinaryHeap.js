



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
        
    return this.sinkDown()

    }


    sinkDown(){

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

        

        let endValue = this.values[this.valuesList.length-1]
        let startValue = this.values[0]
        this.values.shift()
        this.values.unshift(endValue)
        this.valuesList.pop()
        // console.log(`calling sinkdown with ${this.valuesList}`)

        this.sinkDown(0)
        return startValue
   
    }








}

let testPriorityQueue = new PriorityQueue
testPriorityQueue.enqueue("Mark",7)
testPriorityQueue.enqueue("Mark",36)
testPriorityQueue.enqueue("Mark",19)
testPriorityQueue.enqueue("Mark",17)
testPriorityQueue.enqueue("Mark",3)
testPriorityQueue.enqueue("Mark",2)
testPriorityQueue.enqueue("Mark",1)
testPriorityQueue.enqueue("Mark",25)
testPriorityQueue.enqueue("Mark",100)



// mark.insert(56)
// mark.insert(12)
// mark.insert(11)
// mark.insert(9)
// mark.insert(1)
// mark.insert(100)
debugger; 



for(let i =0; i < testPriorityQueue.values.length; i++){
    console.log(testPriorityQueue.values[i])
}
// debugger;


remove(){
    // debugger

    let max = this.valuesList[0]
    let end = this.valuesList.pop()
    this.valuesList[0] = end
    this.sinkDown()
    return max

}


sinkDown(){

    let idx = 0
    const length = this.valuesList.length
    const element = this.value[0]

    while(true){
        let leftChildIdx = 2*idx +1
        let rightChildIdx = 2*idx +2
        let leftChild, rightChild
        let swap = null

            if(leftChildIdx < length){
                leftChild = this.valuesList[leftChildIdx];
                if(leftChild > element){
                    swap = leftChildIdx
                }
            }

            if(rightChildIdx < length){
                rightChild = this.valuesList[rightChildIdx]; 
                if(swap == null && rightChild > element) || (swap{

                }
            }



        if(swap === null) break

    }


}