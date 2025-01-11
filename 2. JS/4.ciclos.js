//ciclos en js: estructuras repetitivas
//while, dowhile
//for

let contador = 10;
while (contador < 10) {
  contador = contador + 1;
  console.log(contador);
}

do {
  console.log(contador);
  contador = contador - 1;
} while (contador < 0);

console.log("fin del programa");

//for

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
