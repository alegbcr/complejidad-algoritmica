/*
 * Complejidad Temporal  --> 0( )
 * Complejidad Espacial  --> 0( )
 */

const linearSearch = (arreglo, clave) => {
  for (let indice = 0; indice < arreglo.length; indice++) {
    if (arreglo[indice] === clave) {
      return indice;
    }
  }
  return -1;
};
