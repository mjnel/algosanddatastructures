



class HashTable {
    constructor(size=3){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0
        let weridPrime = 2 
    
    
        for(let i =0; i < Math.min(key.length, 100); i++){
            let value =   key[i].charCodeAt(0)- 96 
            total = (total * weridPrime + value )% this.keyMap.length
        }
        return total
    }

    set(key,value){
   
        let hashedKey = this._hash(key);
        let element = [key, value]

        if(!this.keyMap[hashedKey]){
            this.keyMap[hashedKey] = []
        }
            this.keyMap[hashedKey].push(element)
        }


    get(key){
        let hashedKey = this._hash(key);
        if(this.keyMap[hashedKey].length > 0){
           for(let i = 0; i< this.keyMap[hashedKey].length; i++){
               if(this.keyMap[hashedKey][i][0] === key){
                   return this.keyMap[hashedKey][i][1]
               }
           }
        }
        return undefined
    }


    keys(){
        let responseArr = []
        for(let i =0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    responseArr.push(this.keyMap[i][j][0])
                }
            }

        }
        debugger;
    }



    values(){
        let responseArr = []
        for(let i =0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    responseArr.push(this.keyMap[i][j][1])
                }
            }

        }
        debugger;
    }




}











 let testHash = new HashTable()

 testHash.set("blue", 111)
 testHash.set("two", 222)
 testHash.set("one", 333)
 testHash.set("keri", 444)
 testHash.set("mark", 555)
 testHash.set("cup", 666)
 let res = testHash.get("blue")
 let res2 = testHash.get("keri")
 testHash.values()
 debugger; 
