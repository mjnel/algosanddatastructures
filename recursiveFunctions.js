// base case - where the fucntion stops 



function countDown(num){
    if(num<=0){
        console.log('all done!')
        return
    }

console.log(num)
num --;
countDown(num)
}

countDown(9); 


function sumRange(num){
    // base case 
    if (num ===1) return 1;
    return num + sumRange(num -1)
}

sumRange(10)



function factorial (num){
if(num ==1) return 1
return num  * factorial(num-1)

}


// console.log(factorial(8))
// 3*2*1


// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(num1, num2){

    if(num2 === 0) return 1 
    return num1 * power(num1, (num2-1))
    
}

// console.log(power(2,0))
// function factorial(x){
//     if (x < 0 ) return 0;
//     if (x <= 1 ) return 1;
//     return x * factorial(x-1);
//  }

function factorial(number) {

    if(number === 0) return 1
    if(number==1) return 1
    return number * factorial(number-1)
    
}


function productOfArray(numArr){


    if(numArr.length == 0) return 1
 
    return numArr[0] * productOfArray(numArr.splice(1))

}

// console.log(productOfArray([1,2,3,4])
// )


function recursiveRange(num){
    // recursiveRange(6) // 21
    // 0+1+2+3+4+5+6 = 21
    if(num === 0) return 0
    return num + recursiveRange(num-1 )
}

// console.log(recursiveRange(6))


// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}


function reverse (str){
    let input = str.split('')
    let result = []

    // console.log(input.splice(0,3))

    function helper(helperInput){
        // console.log(`helperInput is`)
        // console.log(helperInput)

        if(helperInput.length === 0) {
            // console.log('got here as helperInput lenght === 0')
            return
        }
        let currentchar = helperInput.length -1

        result.push(helperInput[currentchar])

        let nextTime = helperInput.splice(0,currentchar)  

        helper(nextTime)
        // console.log('result is:')
        
    }
    helper(input)

    result = result.join('')
    return result

}



function isPalindrome (str){
    if(str == undefined || str === ""){
        return false
    }
    let input = str.split('')
    let strForwardsArr = str.split('')
    let strBackwardsArr = []


    function reverse(helperInput){
        if(helperInput.length === 0) {
            return
        }
            let currentchar = helperInput.length -1
            strBackwardsArr.push(helperInput[currentchar])
            let nextTime = helperInput.splice(0,currentchar)  
            reverse(nextTime)
    }
    reverse(input)


    let counter = (strForwardsArr.length) -1
    

    function checker (forwardWordArr, backwardWordArr){
        console.log('forwardWordArr:')
        console.log(forwardWordArr)
        console.log('backwardWordArr:')
        console.log(backwardWordArr)

        if(forwardWordArr.length === 0){
            console.log('got here as lenght is 0')
            return true
        }

        if(forwardWordArr[0] == backwardWordArr[0]){
            let newForwardArr = forwardWordArr.splice(1,counter)
            let newBackwardArr = backwardWordArr.splice(1,counter)
            console.log('calling the function with')
            console.log(newForwardArr + newBackwardArr)
            console.log('*************')
            counter --
            checker(newForwardArr, newBackwardArr)
        }else {
            console.log('forwardWordArr')
            console.log(forwardWordArr)
            console.log('strBackwardsArr')
            console.log(strBackwardsArr)
            console.log('returning false')
            return false
        }

        return true

    }

    let test = checker(strForwardsArr,strBackwardsArr)
    console.log(test)

}


// isPalindrome('tacocat')
// isPalindrome('tesp')

function capitaliseFirst (wordArr) {
    let changedWordArr =[]
    let counter = wordArr.length -1

    // on the array element 0 captiase, remove and push into new arr 
    // if the arr is empty return


    function checker (wordArr){
        if(wordArr.length === 0){return}
        changedWordArr.push((wordArr[0].charAt(0).toUpperCase()) + (wordArr[0].slice(1)))
        let newArr = wordArr.splice(1, counter)
         checker(newArr)
    }

    checker(wordArr)

    return changedWordArr


}



// function capitaliseWords (wordArr) {
//     let changedWordArr =[]
//     let counter = wordArr.length -1



//     function checker (wordArr){
//         if(wordArr.length === 0){return}
//         changedWordArr.push(wordArr[0].toUpperCase())
//         let newArr = wordArr.splice(1, counter)
//          checker(newArr)
//     }

//     checker(wordArr)

//     return changedWordArr


// }


function capitaliseWords (words) {
    let changedWordArr =[]
    let counter = words.length -1



    function checker (words){
        if(words.length === 0){return}
        changedWordArr.push(words[0].toUpperCase())
        let newArr = words.splice(1, counter)
         checker(newArr)
    }

    checker(words)

    return changedWordArr


}
let words = ['i', 'am', 'learning', 'recursion'];
let res = capitaliseWords(words);
// console.log(res)

// walk the tree and convert numbers to letters


function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
        // console.log(key)
      if (typeof obj[key] === 'number') {
        newObj[key] = obj[key].toString();
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        //   console.log(obj[key])
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  }


// walk the tree and convert numbers to letters


let stringifyNumbers2 = (objectI)=>{

    let newObj ={}

    for(var val in objectI){
        if(typeof objectI[val] === 'number' ){
            newObj[val] = objectI[val].toString();            
        }else if (typeof objectI[val] ==='object' && !Array.isArray(objectI[val])) {
            newObj[val] = stringifyNumbers2(objectI[val])
        }else {
            newObj[val] = objectI[val]
        }
    }

    return newObj

}





let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight : true,
            random: 66
        }
    }
}


function whatsGoingOnDan (obj){

    let counter = 0
  
    function checker(incomingObject){
        for(key in incomingObject){
            if(typeof incomingObject[key] =='number' && incomingObject[key] %2 == 0){
                counter += incomingObject[key]
            }else if(typeof incomingObject[key] == 'object'){
                checker(incomingObject[key])

            }

        }

    }

    checker(obj)
console.log(counter)

}



var obj1 = {
    outer: 2,
    obj: {
      inner: 20,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }


// console.log(stringifyNumbers2(obj))

whatsGoingOnDan(obj1)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}   
*/

