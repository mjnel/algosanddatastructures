

class MaxBinaryHeap{
    constructor(){
        // this.valuesList = [55,39,41,18,27,12,33]
        this.valuesList = [41,39,33,18,27,12]
    }




    insert(element){
        this.valuesList.push(element)
        this.bubbleUp()
        return this.valuesList

    }


    bubbleUp(){
        let idx = this.valuesList.length -1
        const element = this.valuesList[idx]
        // debugger;
        while(idx > 0){
            let parentIndex = Math.floor((idx -1)/2)
            let parent = this.valuesList[parentIndex]
            // debugger
            if(element<= parent){
                break
            }
            this.valuesList[parentIndex] = element;
            this.valuesList[idx]= parent
            idx = parentIndex
            
        }

    }

    // removing the max item
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
                    left
                }




            if(swap === null) break

        }


    }

}

// [41,39,33,18,27,12]


let heap = new MaxBinaryHeap();
// heap.insert(55)
// heap.insert(12)
// heap.insert(77)
// heap.insert(23)
// heap.insert(19)
// heap.insert(1)
// heap.insert(3)
debugger;