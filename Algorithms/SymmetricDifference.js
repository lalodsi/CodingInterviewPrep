function sym(args) {
    const inputs = Object.assign([], arguments);
    // Función para operar dos elementos
    const operar = (A, B) => {
      const middle1 = A.filter( element => B.indexOf(element) == -1 );
      const middle2 = B.filter( element => A.indexOf(element) == -1 );
      const joined = middle1.concat(middle2);
      const ordered = joined.sort();
      // [1, 2, 3, 3, 4].indexOf(3) == 2
      const noDouble = ordered.filter( (element, index, array) => index == array.indexOf(element) )
      
      return noDouble;
    };
    // Iteración para hacer la operación de dos en dos
    const finalOperation = inputs.reduce( (prev, curr) => {
      return operar(prev, curr);
    } )
    
    return finalOperation;
  }
  
  sym([1, 2, 3], [5, 2, 1, 4]);