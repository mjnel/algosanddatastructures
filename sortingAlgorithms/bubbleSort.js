

// sort numbers high to low


let bubbleSort = (arr)=>{
   
   var noSwaps;
// console.log(bubbleSort([37,45,29,8]))


   for(let i = arr.length; i > 0; i--){
       noSwaps = true 
    console.log(`i is equal to ${i}`)

        for(j =0; j<i-1; j++){
            console.log(`j is equal to ${j}`)
            console.log(arr, arr[j], arr[j+1]);

            if(arr[j] > arr[j+1]){  
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
                noSwaps = false
            }
        }
       console.log(`SWAAPPED!`)
       console.log('*******************')
    if(noSwaps) break

   }

    return arr

}

console.log(bubbleSort([37,45,29,8]))










