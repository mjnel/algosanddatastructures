





// takes in two sorted arrays and returns one (sorted) array
let mergeArrFunc =(array1, array2)=>{

    // console.log(`array1 is ${array1} array2 is ${array2}`)

    let returnArr = []

    i =0
    j =0
    while( i != array1.length && j != array2.length){
        // console.log(`i is ${i}`)
        // console.log(`j is ${j}`)
        // console.log(`array1[i] is ${array1[i]} and array2[j] is: ${array2[j]}`)
        if(array1[i]<array2[j]){
            returnArr.push(array1[i])
            i++
        }else{
            returnArr.push(array2[j])
            j++
        }
    }


    if(i != array1.length){
        for(var loopingVar = i; loopingVar < array1.length; loopingVar ++){
            // debugger;
            returnArr.push(array1[loopingVar])
        }
        }else{
     
            for(var loopingVar = j; loopingVar < array2.length; loopingVar ++){
                // debugger;
                returnArr.push(array2[loopingVar])
            }
        }   
        // console.log(returnArr)
        return returnArr
}





function mergeSort(arr){
    if(arr.length <= 1) return arr
    // console.log(`arr is ${arr}`)
    
    let half = Math.floor(arr.length/2)

    let firstHalf = mergeSort(arr.slice(0,half))
    let secondHalf = mergeSort(arr.slice(half))

    debugger
    return mergeArrFunc(firstHalf, secondHalf)

}


// let arr1 = [0]
// let arr2 = [2,14]
// console.log(mergeArrFunc(arr1,arr2))
// mergeArrFunc(arr1, arr2)
mergeSort([6,99,88,12,8,11,0])