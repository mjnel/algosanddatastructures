

// how many times is the shortStr in the longSTR?



let stringSearch = (longStr, shortStr) =>{
let count = 0; 

    for(let i = 0; i <longStr.length; i++){
        for(let j =0; j<shortStr.length; j++){
                let compareElement = i+j

                console.log(shortStr[j], longStr[compareElement])

                if(longStr[compareElement] !== shortStr[j]){
                        console.log('BREAK!')
                        break
                }

                if(j === shortStr.length -1){
                        console.log('found one')
                        count ++
                }


        }


    }

return count

}


console.log(stringSearch('thishahahisathistest', 'this'))