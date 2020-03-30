



// function sameFrequency(num1, num2){

//     // put into array
//     // put into object
//     //compar two objects
//     let num1Arr = num1.toString().split('') 
//     let num2Arr = num2.toString().split('') 
     

//     if(num1Arr.length !== num2Arr.length) return false

//     let obj1 = {}
//     let obj2 = {}

//     for(let val of num1Arr){
//         obj1[val] = (obj1[val] || 0) +1
//     }

//     for(let val of num2Arr){
//         obj2[val] = (obj2[val] || 0) +1
//     }   
    
//     // console.log(`obj1`)
//     // console.log(obj1)
//     // console.log(`obj2`)
//     // console.log(obj2)

//     // check does it exist?
// // check does it appear for the same fequency

// for(let key in obj1){
//     if(!(key in obj2)){
//         return false;
//     }

//     debugger; 

//     if(obj1[key] != obj2[key]){
//         return false
//     }

// }

// return true




// }


// function areThereDuplicates(...args) {
//     // Two pointers
    
//     args.sort()
//     console.log(args)

//     let start = 0;
//     let next = 1;
//     while(next < args.length){
//       if(args[start] === args[next]){
//           return true
//       }
//       start++
//       next++
//     }
//     return false
//   }

//   areThereDuplicates('l','p','i', 'l')
//   areThereDuplicates(8,0,6,9,6,5,7,8)




// multiple pointers
// function areThereDuplicates(){

//     let inputArg = []

//     for(var i =0; i< arguments.length; i++){
//         inputArg.push(arguments[i])
//     }


//     let j = 1

//     inputArg.sort()

//     console.log(inputArg)

//     for(let i = 0; i <inputArg.length; i++){
//         if(inputArg[i] == inputArg[j]){
//             return true
//         }else {
//                 j++ 
//         }
//     }
//     return false

// }




// console.log(areThereDuplicates(1,2,4))



// function averagePair(arr, average){

// let j = 1

// if(arr.length === 0){
//     return false
// }

//     for(let i =0; i<arr.length; i++){
//         let comparator = arr[i]+arr[j]/2
//         console.log(comparator, average )
//         if(comparator == average){
//             return true
//         }else{
//             j ++ 
//         }
//     }

//     return false
// }


// console.log(averagePair([1,3,3,5,6,7,10,12,19,], 8))
// console.log(averagePair([9,0], 2.5))
//true 


// function isSubsequence(str1, str2) {
//     var j = 0;
//     if (!str1) return true;

//     // if j is less than sring 2 lenght
//     // do a comparison of str1[i] and str2[j]
//         //true - increment i
//         // if i is the same length as str1 return
//             // if not increment j
//     debugger;

//     for(let i =0; i<str2.length; i++){
//         if(str2[j] == str1[i]){
//             i++
//         }
//         if(i == str1.length) return true  
//         j++
//     }
//   }


// console.log(  isSubsequence('bear','jidnfbjsbeajr'))



// function maxSubArraySum(arr,numberOfInts){

//     //find the first max
//     let tempMax = 0
//     for(let i=0; i< numberOfInts; i++){
//         tempMax += arr[i]
//     }


//     let i = numberOfInts;
//     let loopingMax = tempMax

//     while(i < arr.length){
//         // minusing out the first num and adding back in the second number
//         loopingMax = (loopingMax - arr[i -numberOfInts]) + arr[i] 
//         tempMax = Math.max(loopingMax, tempMax)
//         console.log(tempMax, loopingMax)
//           i++
//     }

//     return tempMax

// }


// console.log(maxSubArraySum([900,100,7,8,1999,1],3))
// //1000 | 1
// //107  | 2
// //15   | 3
// //2007 | 4
// //2000 | 5   

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    //looping thought the array
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      console.log(char)
      console.log(seen)
      if (seen[char]) {
        start = Math.max(start, seen[char]);
        console.log(start)
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }




  findLongestSubstring('thisisawsome') 
// 5 - i
