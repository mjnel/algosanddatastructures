


// let swap = (array, i, j) =>{
//     let temp = array[i]
//     array[i] = array[j]
//     array[j] = temp
// }

// function pivot (arr, start=0, end = arr.length-1){

//     actualVal = arr[start];
//     pivotIndex = start


//     for(let i = start+1; i< arr.length; i++){
//         if(arr[i]< actualVal){
//             pivotIndex++
//             swap(arr,pivotIndex,i)
//             // debugger
//         }
//     }
//     swap(arr,start,pivotIndex)
//     // debusgger
//     return pivotIndex

// }


// function quickSort(arr, left = 0, right = arr.length-1){

// if(left < right){
//     // debugger;
//     let pivotIndex = pivot(arr, left, right) // 3

//     // left
//     quickSort(arr,left, pivotIndex -1)
//      // right 
//     quickSort(arr,pivotIndex+1,right)
// }

// debugger



// }


// call pivot helper on array



// take in unsorted array and retuen the index of the element passed as the start
function pivot(arr, start = 0, end = arr.length - 1) {
let swap = (array, i, j) =>{
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}
  // console.log(arr)


    let pivot = arr[start];
    let swapIdx = start;

    // console.log(`pivot ${pivot}`)
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    //  console.log(arr) 
    return swapIdx;
  }
  



  // base case is the pointer of left and right 
  function quickSort(arr, left = 0, right = arr.length -1){
      if(left < right){
          debugger;
          let pivotIndex = pivot(arr, left, right) //3
          //left
          quickSort(arr,left,pivotIndex-1);
          //right
          quickSort(arr,pivotIndex+1,right);
        }
       return arr;
  } 
             
  quickSort([4,6,9,1,2,5])
  


// quickSort([4,6,9,1,2,5,3])
