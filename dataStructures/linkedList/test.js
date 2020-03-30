



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


        push(val){
            let newNode = new Node(val)

            if(!this.head){
                this.head = newNode
                this.tail = newNode
            }else if(this. length === 1){
            let oldTail = this.tail
            this.head.next = oldTail
            oldTail.next = newNode
            newNode.previous = oldTail
            this.tail = newNode
            }else{
            let oldTail = this.tail
            oldTail.next = newNode
            newNode.previous = oldTail
            this.tail = newNode

            }
            this.length ++

            return this

            }


}


    



let test = new DoublyLinekdList
test.push(99)
test.push(77)
test.push(55)
debugger;