class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}


class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }


// add to end
    enqueue(value){
        let newNodeValue = new Node(value)

        if(!this.first){
            this.first = newNodeValue
            this.last = newNodeValue
        }else{
            let tempLast = this.last
            tempLast.next = newNodeValue
            this.last = tempLast
        }
        this.size ++
        return  
    }

// remove from start
    dequeue(){
        if(!this.first)return null

        let temp = this.first

        if(this.first=== this.last){
            this.last = null;
        }

        this.first = this.first.next
        this.size --
        return temp.value

    }



}


let q = new Queue

debugger;