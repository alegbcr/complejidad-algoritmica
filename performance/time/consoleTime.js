const contar = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
};

console.time("duraciion del algoritmo");
contar(5);
console.timeEnd("duraciion del algoritmo");
