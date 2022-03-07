console.clear();
function updateInventory(arr1, arr2) {
    const isIn = function(element, Arreglo){
        let isInto = false;
        Arreglo.forEach( product => {
            if (element == product[1]){
                isInto = true;
            }
        } )
        return isInto;
    }
    
    arr2.forEach( productInput => {
        if( isIn(productInput[1], arr1) ){
            // Update
            const index = arr1.findIndex( elem => elem[1] == productInput[1] );
            arr1[index][0] += productInput[0]
        }
        else{
            // Push
            arr1.push(productInput);
        }
    } )
    // Ordenar
    const ordered = arr1.sort( (a, b) => {
        const nameA = a[1];
        const nameB = b[1];
        if( nameA < nameB ){
            return -1;
        }
        if( nameA > nameB ){
            return 1;
        }
        return 0;
    } )

    return ordered;
}

var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

const returned = updateInventory(curInv, newInv);
console.log(returned);
