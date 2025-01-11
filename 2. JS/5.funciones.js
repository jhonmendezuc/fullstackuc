//funcion en js
//funciones declarativas
function suma(numero1, numero2) {
  return numero1 + numero2;
}

function resta(numero1, numero2) {
  return numero1 - numero2;
}
//funciones propias
console.log(suma(6, 5));
console.log(suma(10, 5));
console.log(resta(6, 5));
console.log(resta(16, 5));
//funciones nativas
console.log(Math.max(6, 5));
console.log(Math.pow(2, 2));

function saludo(nombre) {
  console.log("hola " + nombre);
}

saludo("jhon");
saludo("gonzalo");

let sumar = suma(5, 5);
console.log(sumar);

//funciones anonimas, funciones, flecha, expresiones lambda

const multiplicar = (numero1, numero2) => {
  return numero1 * numero2;
};
console.log(multiplicar(5, 5));

//funciones autoinvocables
(() => {
  console.log("funcion autoinvocable");
})();
console.log("fin del programa");
