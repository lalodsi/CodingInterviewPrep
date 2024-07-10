/**
 * Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
 */
function selectionSort(array) {
    // Only change code below this line
    let index = 0;
    // console.log("start")
    console.log(array)
    const length = array.length
  
    while (index < length-1){
      let minimum = array[index]
      let minimumIndex = -1;
      for(let i = index; i<length; i++){
        console.log("from ", i)
        if(array[i] < minimum){
          minimum = array[i];
          minimumIndex = i
          console.log(minimum)
        }
      }
      // Change minimum value to the i place
      if(minimumIndex !== -1){
        console.log("change ", array[index], "in ", index, "to ", minimum, "in ", minimumIndex)
        const temp = array[index]
        array[index] = minimum
        array[minimumIndex] = temp
      } else {
        console.log("No change in ", index, "iteration")
      }
      console.log(array)
      index = index + 1
    }
    console.log("end")
    return array;
    // Only change code above this line
  }