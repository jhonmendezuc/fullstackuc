/*
javascript - es un lenguaje débilmente tipado o dinamico

tipos datos en js
number
string
boolean
object
function
undefined
symbol
*/

console.log("tipos de datos");
//number
let edad = 15;
edad = 15.4;
console.log(edad);
console.log(typeof edad);

//string - cadena de caracteres
// las cadenas tiene acceso único y son inmutables
let nombre = "Juan";
console.log(nombre[1]);

for (let i = 0; i < nombre.length; i++) {
  console.log(nombre[i]);
}

nombre[1] = "a"; //error porque los string son inmutables
console.log(nombre);
console.log(typeof nombre);

//tildes o backticks
let apellido = "Perez";

let saludo = `Hola soy ${nombre} ${apellido} y tengo ${edad} años`;
console.log(saludo);

let saludo2 =
  "hola soy " + nombre + " " + apellido + " y tengo " + edad + " a;os";
console.log(saludo2);

//boleanos - datos logicos
let sesion = false;
if (sesion) {
  console.log("sesion iniciada");
} else {
  console.log("sesion no iniciada");
}
console.log(typeof sesion);

//undefined
let estatura;
console.log(estatura);
console.log(typeof estatura);

//Null
let edad2 = null; //ausencia intencionada de un valor
console.log(edad2);
console.log(typeof edad2);

//symbol -> version ES6
let id = Symbol("identificador"); //REPRESENTACION ÚNICA DE UNA VARIABLE
console.log(id);
console.log(typeof id);

//BigInt -> version ES11 2020
let n = BigInt(1234567890123456789012345678901234567890);
console.log(n);
console.log(typeof n);

//tipos de datos de referencia (objetos,arrays,date,regexp, map...)

class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

let persona1 = new Persona("Juan", "Perez");
let persona2 = new Persona("Maria", "Perez");
console.log(persona1);
console.log(typeof persona1);

let lista = [1, 2, 3, 4, 5];
console.log(lista);
console.log(typeof lista);

const usuario = {
  nombre: "Juan",
  apellido: "Perez",
  [id]: 12345,
};
console.log(usuario.nombre);
console.log(usuario[id]);
usuario.nombre = "Maria";
console.log(usuario);
usuario[id] = 1235;
console.log(usuario);
