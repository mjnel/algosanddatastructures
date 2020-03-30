

// takes a contionus data set and returns the highest two values


function slidingWindow(arr, num){


let maxSum = 0 
let tempSum = 0

if(arr.length < num) return null


// gets the value for the first two elements in the array 
for(let i =0; i < num; i++){
    maxSum += arr[i]
}
console.log(maxSum)
tempSum = maxSum


// minus out the first element of the array and add another array in at the end
// then maxSum is the maximum value of them two values
console.log(`temp sum is ${tempSum} and maxSum is ${maxSum}`)

for(let i = num ; i< arr.length; i++){
    tempSum = tempSum - arr[i-num] + arr[i]
    maxSum = Math.max(tempSum, maxSum);
    console.log(`temp sum is ${tempSum} and maxSum is ${maxSum}`)
}

return maxSum

    
}



console.log(slidingWindow([10,10,5,6,7,8,8,998,9,5,5,4,30,5], 2))
//17