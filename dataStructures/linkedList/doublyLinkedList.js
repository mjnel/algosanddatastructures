class Node {
    constructor(val){
        this.val = val;
        this.next = null
        this.previous = null
    }
}


class DoublyLinekdList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    // end of list 
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }


// remove from end
    pop(){
    let currentTail = this.tail
        if(!this.head) {
            return undefined
        }else if(this.length == 1){
            this.head = null
            this.tail = null

        }else {
            this.tail = this.tail.previous
            this.tail.next = null
            currentTail.previous = null
        }
        this.length --
        return currentTail
        
    }


// remove from beginning
    shift(){
        let oldHead = this.head

        if(!this.head){
            return undefined
        }else if (this.length === 1) {
            this.head = null
            this.tail = null
        }else{
            this.head = oldHead.next
            this.head.previous = null 
            oldHead.next = null
        }
        this.length --
        return oldHead
    }



    // add to beginning 
    unshift(val){
        let newNode = new Node(val)
    if(this.length === 0){
        this.head = newNode
        this.tail = newNode
    }else{
        this.head.previous = newNode
        newNode.next = this.head
        this.head = newNode
    }
this.length ++
return this
    
}
    

get(index){
    let half = Math.floor(this.length/2)


    if(index < 0 || index >= this.length){
        return  null
    }else if(index <= half){
        let returnVal = this.head
        
        for(let i = 0; i < index; i++){
            returnVal = returnVal.next
        }
    return returnVal  

    }else{
        let returnVal = this.tail
        let length = this.length -1

        for(let i = length; i > index; i --){
            returnVal = returnVal.previous
        }
        return returnVal      

    }

}

// set index
set(index, val){
    let returnVal = this.get(index)
    if(returnVal){
        returnVal.val= val
        return true
    }
    return false
}

// insert
insert(index, val){

    if(index < 0 || index > this.length){
        return false
    }else if(index === this.length){
         return this.push(val)
    }else if (index ===0 ){
        return this.unshift(val)
   
    }else {
        let newVal = new Node(val)
        let beforeNode = this.get(index -1)
        let afterNode = beforeNode.next
    
        beforeNode.next = newVal 
        newVal.previous = beforeNode; 
        newVal.next = afterNode; 
        afterNode.previous = newVal
        this.length ++
        return true;
    }


}

// remove
remove(index){
if(index <0 || index >= this.length){
    return undefined
}else if (index === 0){
    this.shift()
}else if(index == this.length -1){
    this.pop
}else{
    let foundNode = this.get(index)
    let beforeNode = foundNode.previous
    let afterNode = foundNode.next

    beforeNode.next = afterNode
    afterNode.previous = beforeNode

    foundNode.previous = null
    foundNode.next = null

    this.length --
    return foundNode
    }
}







}

let test = new DoublyLinekdList
test.push(999) //0
test.push(888) //1
test.push(111) //2
test.push(222) //3
test.push(333) //4 //////////// NEW
test.push(444) //5
// test.set(2,"!!!!!")
// test.insert(4,"Mark")
test.remove(3)
debugger;
// test.get(4)


// test.push(999) //0
// test.push(888) //1
// test.push(111) //2
// test.push(222) //3
// test.push(Mark)//4 //////////// NEW
// test.push(333) //5 
// test.push(444) //6