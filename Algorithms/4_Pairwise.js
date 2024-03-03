function pairwise(arr, arg) {
  const arr_cpy = [...arr];
  const register = {};
  const pairs = []
  let depth = 0;

  /**
   * Iterate the given array and make 2 actions
   * 1. Create a new tuple array and push it in `pairs` variable
   * 2. Register the number of the tuple in the `register` variable
   * @param {number[]} arr_ array to be iterated
   * @param {number} first The first element of the original array
   * @param {number} arg argument base
   */
  function iterate(arr_, first, arg){
    if (arr_.length > 1){
      arr_.forEach((second, curr_i) => {
        const i = curr_i + 1;
        if(first + second === arg){
          Object.values
          if (
            !(depth.toString() in register) &&
            !((depth + i).toString() in register)
          ) {
            pairs.push([depth, depth + i ])
            register[`${depth}`] = depth + i;
            register[`${depth + i}`] = depth;
          }
        }

      });
      // cut the array
      const newFirst = arr_.shift();
      const newArr = arr_;
      depth = depth + 1;
      iterate(newArr, newFirst, arg);
    }
  }
  
  const firstNum = arr_cpy.shift();
  iterate(arr_cpy, firstNum, arg);

  const sum = pairs.reduce((acc, curr) => acc + curr[0] + curr[1], 0)
  console.log(pairs);
  console.log(register);
  console.log(sum);

  return sum;
}

// pairwise([7, 9, 11, 13, 15], 20)
// pairwise([1,4,2,3,0,5], 7);
// pairwise([1,1,1], 2); // Should return 1
pairwise([0, 0, 0, 0, 1, 1], 1); // Should return 10
