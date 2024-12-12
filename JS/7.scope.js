//ALCANCE - SCOPE VARIABLES
/*
Global (ámbito global)
Funcion (ámbito local o de función)
Block Scope (ámbito de bloque)
*/

//global

let globalVar = "Soy una variable global";

function mostrarGlobal() {
  console.log(globalVar); //accede a la variable global
}

mostrarGlobal();
console.log(globalVar);

//funcion scope

function miFuncion() {
  let localVar = "Soy una variable local";
  console.log(localVar);
}

miFuncion();
//console.log(localVar);

// block scope { }> funciones, ciclos, condicionales

if (true) {
  let bloqueVar = "Soy una variable de bloque";
  console.log(bloqueVar);
}

//console.log(bloqueVar);

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 10;
console.log(i);

/*
var x -> tiene una alcance de funcion
let x -> tiene un alcance de bloque
const x -> tiene un alcance de bloque
*/
