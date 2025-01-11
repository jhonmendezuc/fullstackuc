import { saludo, saludar, Persona } from "./modulos/saludo.js";
import suma_numero from "./modulos/operaciones.js";

console.log("archivo de modulos");
console.log(saludo);
console.log(saludar("jhon"));
console.log(new Persona("jhon", 30).saludar());

//usar un 'unico m'odulo

console.log(suma_numero(2, 3));
