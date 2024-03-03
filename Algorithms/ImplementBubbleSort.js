"use strict";

function bubbleSort(array) {
    // Only change code below this line
    const sorted = [...array]
    let swapped = false;

    const length = array.length;
    do {
        swapped = false;
        for(let i = 0; i < length-1; i++){
          if(sorted[i] > sorted[i + 1]) {
            swapped = swap(i, i+1, sorted);
          }
        }
    } while (swapped)
    
    function swap(i, j, arr){
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      return true;
    }

    return sorted;
    // Only change code above this line
}

const testArr = [10,20,-10,2, 2, 2, 2, 10];

console.log(testArr);
console.log(bubbleSort(testArr))