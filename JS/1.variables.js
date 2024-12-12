//variable: representacion simbolica de un dato
// var "tradicional" antes ES6
//ambito global
var nombre = "jhon";
nombre = "javier";
var edad = 15;
console.log(nombre);

//let: ambito local. despues de ES6
let apellido = "caceres";
apellido = "mendez";
console.log(apellido);

//const: ambito local, no se puede cambiar su valor ya que son para definir constantes
const PI = 3.1416;
console.log(PI);
//PI = "3.1416";

//CONVENCION DE NOMBRES DE VARIABLES
//camelCase: primera palabra en minuscula y las demas en mayuscula
let nombreCompleto = "jhon caceres";
//snake_case: todas las palabras en minuscula y separadas por guion bajo
let nombre_completo = "jhon caceres";
//PascalCase: todas las palabras en mayuscula y sin separacion
let NombreCompleto = "jhon caceres";
//SNAKE_CASE: todas las palabras en mayuscula y separadas por guion bajo
let NOMBRE_COMPLETO = "jhon caceres";

//REGLAS - LETRA (A-Z, a-z), NUMEROS (0-9), _ (guion bajo), $ (signo de pesos)
let _nombre = "jhon";
let $nombre = "jhon";

/* que no se recomiendo */
//let 1nombre = "jhon"; error!
//let nombre completo error!
let SegundoNombre = "alexis";
segundonombre = "javier";
console.log(segundonombre);
console.log(SegundoNombre);
