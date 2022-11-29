/*
 * Complejidad Temporal  --> 0( )
 * Complejidad Espacial  --> 0( )
 */

const selectionSort = (arreglo) => {
  let longitud = arreglo.length;

  for (let i = 0; i < longitud; i++) {
    let minimo = i;
    for (let j = 0; j < longitud; j++) {
      if (arreglo[j] < arreglo[minimo]) {
        minimo = j;
      }
    }
    if (minimo !== i) {
      let temporal = arreglo[i];
      arreglo[i] = arreglo[minimo];
      arreglo[minimo] = temporal;
    }
  }
  return arreglo;
};
