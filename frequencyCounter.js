
// // quadratic approach - iterating over the entire arry - nested loops.

// function same(arr1, arr2){

// // diff lengts then return false 
//     if(arr1.length !== arr2.length){
//         return false
//     }


//     for(let i = 0; i< arr1.length; i++){
//         // what is the index of the element squared?
//         // indexOf is looping over arr2
//         let correctIndex = arr2.indexOf(arr1[i]**2)
//         if(correctIndex === -1){
//             return false
//         }
//         // if its squared in the arr, then we remove that elememnt from the arr. 
//         console.log(arr2);
//         arr2.splice(correctIndex,1)

//     }
//        return true
// }

// same([1,2,3,6], [1,4,9,36])



// Frequenxy Counter approach O(n)


function same (arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
       
    }



// same[5,5,5,5,6], [1,4,4,9,36])

    let frequency1 ={}
    let frequency2 ={}

    //building the object
    for (let val of arr1){
        // short circuit evaluation
        //OR - when its true, it doens't consider the otherside of the equation.
        //the OR expression means does frequency1[val] exisit? If not (false) then 0 give it 0 and add 1.
        // if it does exisit then add 1 to the value.
        frequency1[val]= (frequency1[val] || 0) +1
    }


    //building the object
    for (let val of arr2){
        frequency2[val]= (frequency2[val]|| 0) + 1
    }

    console.log(frequency1)

    for (let key in frequency1){
    // take first object and take the key of that object.
    // is the key squared in the second object? 
        debugger;
        if (!(key **2 in frequency2)){
            return false
        }

        console.log(key)

    //check the values are the same - does it appear the same number of times?
    if (frequency2 [key **2]!==frequency1[key]){
        return false
        }
    }



    // console.log(frequency1)
    // console.log(frequency2)

         return true

}


// console.log(same([5,6,7], [49,36,25]))

let str1Arr = []
let str2Arr =[]
let str1Obj = {}
let str2Obj = {}

function validAnagram(str1, str2){
    // break the string up into object
 
    
    str1Arr = str1.split('')
    str2Arr = str2.split('')

  

    for (let val of str1Arr){
        // sets it to 0 orginally, then adds 1 to the value.
        str1Obj[val] = (str1Obj[val] || 0) +1
    }


    for (let val of str2Arr){
        str2Obj[val] = (str2Obj[val] || 0) +1
    }

    // console.log(str1Obj)


    for (let key in str1Obj){
        // check if the count is correct
        if(str2Obj[key] === undefined){
            return false
        }

        if(str2Obj[key] != str1Obj[key]){
            return false
        }

    }

    return true


}


function validAnagramSol(first, second) {
    // checks both strings lenght
    debugger;
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    debugger;

    for (let i = 0; i < second.length; i++) {
        debugger;
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      // if the letter is already 0 then as 0 = false and its ! that means its true and it returns false
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }   
  
    return true;
  }


  validAnagramSol("mark", "krma")







console.log(validAnagram("aaz", "zza"))




