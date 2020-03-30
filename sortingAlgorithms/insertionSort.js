






// sort arr lowest to highest
// first element is the lowest
// last is the higest

function insertionSort(arr){

for(let i =1; i<arr.length; i++){
    let currentVal = arr[i];
    

    for(var j = i -1; j >=0 && arr[j]>currentVal; j--)  {
        console.log(`currentVal is ${currentVal}`)
        console.log(`moving around as j+1 is ${arr[j+1]} and j is ${arr[j]}`)
        arr[j+1] = arr[j]
     
        console.log('after inner loop')
        console.log(arr)
    }

    arr[j+1] = currentVal
    console.log('after outer loop')
    console.log(arr)
    console.log('*****************************')


}

console.log(arr)
}



let testArr = [5,9,3,76,4,65,3]




insertionSort(testArr)