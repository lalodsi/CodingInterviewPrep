console.clear();

// Heap's algorithm
const getPermutations = arr => {
    
    const output = [];

    const swapArray = (arrToSwap, indexA, indexB) => {
        const temp = arrToSwap[indexA];
        arrToSwap[indexA] = arrToSwap[indexB];
        arrToSwap[indexB] = temp;
    }

    const generate = (n, arrHeap) => {
        if ( n === 1 ) {
            // console.log(arrHeap);
            output.push(arrHeap.slice());
            return;
        }

        generate(n-1, arrHeap);
        
        for (let i = 0; i < n-1; i++) {
            if ( n%2 === 0 ) {
                swapArray(arrHeap, i, n-1);
            }
            else{
                swapArray(arrHeap, 0, n-1);
            }
            generate(n-1, arrHeap);
        }
    }

    generate(arr.length, arr.slice());
    return output;
}

const getNoRepeated = arr => {

    const output = arr.filter( perm => {
        let isRepeated = false;
        for (let i = 0; i < perm.length-1; i++) {
            if (perm[i] == perm[i+1]) {
                isRepeated = true;
            }
        }
        return !isRepeated;
    } )

    return output;
}

function permAlone(str) {
    const splitted = str.split("");
    const permutated = getPermutations(splitted);
    const noRepeated = getNoRepeated(permutated);
    return noRepeated.length;
}

console.log(permAlone("abcdefa"));
