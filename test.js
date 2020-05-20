

// https://www.codewars.com/kata/5dfa33aacec189000f25e9a9/discuss/javascript - comment

// https://www.codewars.com/kata/56a1c63f3bc6827e13000006/train/javascript - current

function smaller(arr) {
  
  let resArr = []
  let counter = 0 

  // debugger


  function inner(pointerOne, pointerTwo){

    if(pointerOne === arr.length){
      // debugger
      return
    }
  
      // if we have got to the end of the looping cycle 
          if(pointerTwo === arr.length){
            pointerOne ++
            pointerTwo = pointerOne +1
            resArr.push(counter)
            counter = 0 
            // debugger
            return inner(pointerOne,pointerTwo); 
          }
      
      // if pointer 2 is less than pointer 1 
      if(arr[pointerTwo] < arr[pointerOne]){
          counter ++
        }

        pointerTwo ++
        // debugger
        return inner(pointerOne, pointerTwo)

  }

  inner(0,1);
// debugger

  return resArr

}

function smallerTwo(arr){
  
  function checker(comparator, element){
    if(element< comparator){
      return true
    }else{
      return false
    }
  }
  
  
  let res =  arr.map(x => {
    if(x >4){
      x*2
      debugger
    }
  })  

  debugger

}

function seven(callback, number){
  
}


// let test  = smallerTwo([1,2,3]) 
// let test2  = smallerTwo([5,4,3,2,1]) 
// debugger
//[4, 3, 2, 1, 0]







// [1, 1, 0]

// describe('Initial Tests', _ => {
//   Test.assertSimilar(smaller([5, 4, 3, 2, 1]), [4, 3, 2, 1, 0]);
//   Test.assertSimilar(smaller([1, 2, 3]), [0, 0, 0]);
//   Test.assertSimilar(smaller([1, 2, 0]), [1, 1, 0]);
//   Test.assertSimilar(smaller([1, 2, 1]), [0, 1, 0]);
//   Test.assertSimilar(smaller([1, 1, -1, 0, 0]), [3, 3, 0, 0, 0]);
//   Test.assertSimilar(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]), [4, 1, 5, 5, 0, 0, 0, 0, 0]);
// });

















  // debugger
  // for(let i = 0; i < arr.length; i++){
  //   let currentVal = arr[i]

  //   // console.log(currentVal)

  //   for(let j = i+1; j <arr.length; j++){
  //     let compareVal = arr[j]
  //     // debugger
  //     if(compareVal < currentVal){
  //       count++
  //       // debugger
  //     }
  //   }    
  //   resArr.push(count)
  //   count = 0 
  //   // debugger
  // }



  // function inner (){

  //   if(pointerOne === arr.length){
  //     debugger
  //     return
  //   }
  
  //     // if we have got to the end of the looping cycle 
  //         if(pointerTwo === arr.length){
  //           pointerOne ++
  //           pointerTwo = pointerOne +1
  //           resArr.push(counter)
  //           counter = 0 
  //           debugger
  //           return inner(); 
  //         }
      
  //     // if pointer 2 is less than pointer 1 
  //     if(arr[pointerTwo] < arr[pointerOne]){
  //         counter ++
  //       }

  //       pointerTwo ++
  //       debugger
  //       return inner()

  // }