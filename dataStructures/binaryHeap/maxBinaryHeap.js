

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




        // remove(){
    //     // debugger
 

    //     let endValue = this.valuesList[this.valuesList.length-1]
    //     let startValue = this.valuesList[0]
    //     this.valuesList.shift()
    //     this.valuesList.unshift(endValue)
    //     this.valuesList.pop()
    //     this.sinkDown(0)
    //     return startValue
   
    // }


    // sinkDown(nodeLocation){
    //     let tempParent = this.valuesList[nodeLocation] 
    //     let leftValue = this.valuesList[(2*nodeLocation)+1] 
    //     let rightValue = this.valuesList[(2*nodeLocation)+2] 
    //     let leftSideBigger = false
    //     // debugger;
        
    //     //break case - as its a recurisve function

    //     if(leftValue === undefined || rightValue === undefined){
    //         // debugger
    //         return this.valuesList
    //     }

    //     // if the node is above both the left and right then return sinkDown function
    //     if(tempParent > leftValue && tempParent > rightValue){
    //         debugger;
    //         return this.valuesList
    //     }else{
    
    //     if(leftValue > rightValue){
    //             leftSideBigger = true
    //         }   
    //     // if the left is bigger
    //     if(leftSideBigger){       
    //                 let leftIndex = (2*nodeLocation)+1
    //                 let temp = this.valuesList[nodeLocation]

    //                 this.valuesList[nodeLocation]= leftValue
    //                 this.valuesList[leftIndex] = temp
    //                 // debugger
    //                 this.sinkDown(leftIndex)

    //         }else{
    //                 let rightIndex = (2*nodeLocation)+2
    //                 let temp = this.valuesList[nodeLocation]

    //                 this.valuesList[nodeLocation]= rightValue
    //                 this.valuesList[rightIndex] = temp
    //                 // debugger; 
    //                 this.sinkDown(rightIndex)
    //         }
    //     }   

    //     // debugger


    // }
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
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
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