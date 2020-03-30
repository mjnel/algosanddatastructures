
// always needs a sorted array
function  sumZero (arr){

    let left = 0
    let right = arr.length -1

    while(left < right){
        let sum = arr[left] + arr[right]
        if (sum === 0){
            return [arr[left], arr[right]]
            // only the else if or the else will run.
        }else if(sum > 0){
            right--
        }else{
            left ++
        }
    }



}


// console.log(sumZero([-4, -3,-2,-1,0,1,2,3,10]))




function countUniqueVals(numArr){

    let pointer1 = 0
    let pointer2 = 1
    let nonUniqueVals = 0


    for(var i =0; i <numArr.length; i++){

        if(numArr[pointer1] != numArr[pointer2]){
            debugger;
            nonUniqueVals ++
        }
        pointer1 ++
        pointer2++
    }

console.log(nonUniqueVals)


}

// countUniqueVals([1,1,1,1,1,7])





function countUniqueValsAgain(numArr){

    if(numArr.length === 0){
        return 0
    }

 

let i = 0 
let j = 1

// console.log(numArr[6])


for(let loopingVar = 0 ; loopingVar <= numArr.length; loopingVar++){

    if(numArr[i] === numArr[j]){
        j ++
    }else{
        i++
        numArr[i] = numArr[j]
    }



}

return i +1




}


                            //  i                
// countUniqueValsAgain([1,2,3,2,2,3,6])
                                    //  j

console.log(countUniqueValsAgain([1,1,2,3,3,5,6,6,7]))                          
console.log(countUniqueValsAgain([]))                          


// 6