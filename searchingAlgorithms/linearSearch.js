




// indexOf/ fins index/

// Big O = "O(n)" as arr gets longer the function needs to do more. Best we can do with unsorted data.

function linearSearch (arr, searchElement){


let checker = arr.length -1


for(let i = 0; i < arr.length; i ++){
    if(arr[i] == searchElement){
        return i
    }
}

return -1

}

console.log(linearSearch([10,88,0,62,325,1], 99))
