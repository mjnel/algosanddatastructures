


let mergeArrFunc =(array1, array2)=>{

    let returnArr = []

    i =0
    j =0

    while( i != array1.length && j != array2.length){

        if(array1[i]<array2[j]){
            // debugger;
            returnArr.push(array1[i])
            i++
        }else{
            // debugger;
            returnArr.push(array2[j])
            j++
        }
    }


    if(i != array1.length){
        for(var loopingVar = i; loopingVar < array1.length; loopingVar ++){
            debugger;
            returnArr.push(array1[loopingVar])
        }

        }else{
     
            for(var loopingVar = j; loopingVar < array2.length; loopingVar ++){
                debugger;
                returnArr.push(array2[loopingVar])
            }
        }   

    console.log(returnArr)
  
}


   

let arr1 = [9]
// let arr1 = [1,10,50,78,99,7777]
let arr2 = [2,14,99,199]

mergeArrFunc(arr1, arr2)