// divide and conquer



let binarySeach = (arr, val)=>{

    let leftPointer = 0
    let rightpointer = arr.length -1
    let middlePoint = Math.floor((leftPointer + rightpointer)/2)


    while(arr[middlePoint] !== val && leftPointer <= rightpointer){
        
        if(val <arr[middlePoint]){
            rightpointer = middlePoint -1
        }else {
            leftPointer = middlePoint +1
        }
        middlePoint = Math.floor((leftPointer + rightpointer)/2)

    }
    // console.log(leftPointer, middlePoint, rightpointer)

    return arr[middlePoint] === val ?  middlePoint :  -1


}
console.log(binarySeach([2,5,6,9,13,15,28,30],000))






