






let list = [6888,23,8,976,1,1,8877777]


// gets you the digit starting from the right of the number
let getDigit = (num, place)=>{
    return Math.floor(Math.abs(num)/Math.pow(10,place)) % 10
}




// tells you how many digits is in a number
let digitCount = (num) =>{
    let arr = num.toString().split('');
    if(num > 0){
        return arr.length
    }else{
        return arr.length - 1
    }
}

// let test = digitCount(21388)
// debugger;


// looping though an array and finding the longest number - stored in maxDigits
let mostDigits = (arr) =>{
    let maxDigits = 0
    for(let i = 0; i < arr.length; i ++){
        // debugger; 
        if (digitCount(arr[i]) > maxDigits){
            maxDigits = digitCount(list[i])
        }
    }
    return maxDigits
}


let radixSort = (arrList)=>{
    let maxNumIndex = 0;

    for(var i=0; i < arrList.length; i++){
        let res = digitCount(arrList[i])
        if(res > maxNumIndex){
            maxNumIndex = res
        }

    }


    // going to run 7 times
    for(let k = 0; k < maxNumIndex; k++){
        // let newBucket = []
        let bucket = [[],[],[],[],[],[],[],[],[],[]]

        for(var i = 0; i < arrList.length; i++){
            // res is the number which is the far right (num, index)
            // let res
            // if(k === 0){
            //     res = getDigit(arrList[i],k)
            // }else{
            //     // debugger;
            //     res = getDigit(newBucket[i],k)
            // }

            // bucket[res].push(arrList[i])
            bucket[getDigit(arrList[i],k)].push(arrList[i])
    }

    arrList = [].concat(...bucket);

    // debugger;



    }
    debugger;
}



// let list = [6888,23,8,976,1,1,8877777]

// Actual algorithm
//finding the longest number in the arr
// using two loops to go though each number and put in each bucket
// then using a spread operator and the concact to join the buckets back up together.  

let radixSort2 = (nums) =>{

    // finds the number with the most numbers in 
    let mostDigitsCount = mostDigits(nums)

    for(let k =0; k < mostDigitsCount; k++){
        // new arr of 10 sub arrays
        let digitBuckets = Array.from({length:10},()=>[])

        for(let i =0; i <nums.length; i++){
            // pushing into new array depending on the number from the right of the number
            digitBuckets[getDigit(nums[i],k)].push(nums[i])
         }
         // declaring new empty array and then concatting the contents of the sub arrays
         nums = [].concat(...digitBuckets);
        //  debugger
    }

    debugger



}



radixSort(list)



// debugger;



