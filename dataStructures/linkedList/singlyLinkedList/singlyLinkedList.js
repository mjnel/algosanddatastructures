class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

// let first = new Node ('Hi')
// first.next = new Node ('There!')
// first.next.next = new Node ('Test!!')
// debugger; 

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){  
        let node = new Node (val)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.length ++
        return this
    }


    pop(){
        if(!this.head){
            return undefined;
        }else{

            let current = this.head
            let secondToLast = current

            while(current.next){
                secondToLast = current
                current = current.next
            }
            let removeNode = secondToLast.next 
            secondToLast.next = null
            this.tail = secondToLast
            this.length --
            if(this.length === 0){
                this.head = null
                this.tail = null
            }
            return removeNode
        }

    }


    shift(){
        if(!this.head) return undefined

        let returnHead = this.head
        this.head = this.head.next
        this.length -- 
        if(this.length){
            this.tail = null
        }
        return returnHead
    }


    unshift(val){
        let newVal = new Node(val)
        if(!this.head){
            this.head = newVal;
            this.tail  = newVal;
        }
        newVal.next = this.head
        this.head = newVal
        this .length ++
        return this
    }


    traverse(){
        let current = this.head
        while(current){
            console.log(current)
            current = current.next
        }
    }


    get(index){
        if(index <0 || index >= this.length){
            return undefined
        }else{
            let current = this.head
            for(let i =0; i < index; i++){
                current = current.next 
            }
            return current
        }
    }

    set(index,value){
        let res = this.get(index)
        if(res){
            res.val = value
            return true
        }

        return false
    }


    insert(index, value){
        if(index < 0 || index > this.length){
            return false
        }else if(index == this.length){
            this.push(value)
            return true
        }else if(index === 0){
            this.unshift(value)
            return true;
        }else{
            let newValue = new Node(value)
            let oneBefore = this.get(index-1)

            let oldValue = this.get(index)
            oneBefore.next = newValue
            newValue.next = oldValue
            // debugger
        }
    }


    remove(index){
        if(index < 0 || index > this.length){
            return undefined
        }else if(index === this.length-1){
            this.pop()
        }else if (index === 0){
            this.shift()
        } 
        let removed = this.get(index)
        let previousVal = this.get(index-1);
        previousVal.next = removed.next
        this.length --;
        return removed
    }


    reverse(){
        
        let node = this.head
        this.head = this.tail
        this.tail = node

        let prev = null
        let next = null

        for(let i = 0; i <this.length; i++){
            next = node.next
            node.next = prev
            prev = node
            node = next
            
        }
        return this
        
    }




            
    }







let list = new SinglyLinkedList()
list.push(13)
list.push(27) 
list.push(32) 
list.push(71) 
// list.push('BBC')
// list.pop()
// list.shift()
// list.unshift(1)s
// list.get(1)
// list.set(2,'HHHHH')
// list.insert(1,999)
// list.reverse()

debugger