
function selectionSort(arr){

    let lowestElement;


for(var i = 0; i < arr.length; i++){

    lowestElement = i

    for(let j = i+1; j<=arr.length; j++){
        if(arr[j] < arr[lowestElement]){
            lowestElement = j
        }
    }

    if(i !== lowestElement){
        console.log(i, lowestElement);
        let temp = arr[i]
        arr[i] = arr[lowestElement]
        arr[lowestElement] = temp
    }

}

}




let testArr = [0,2,34,22,10,19,17]





selectionSort(testArr)
