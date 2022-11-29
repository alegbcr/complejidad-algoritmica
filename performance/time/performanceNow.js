const performance = require("perf_hooks");

const contar = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
};

let inicio_tiempo = performance.performance.now();
contar(5);
let final_tiempo = performance.performance.now();
let duracion_de_tiempo = inicio_tiempo - final_tiempo;

console.log(`El algoritmo contar ha durado ${duracion_de_tiempo}ms.`);
