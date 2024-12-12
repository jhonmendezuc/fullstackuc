export const saludo = "Hola todos variable saludo exportada"; //exportacion de variable

//exportacion de una funcion
export function saludar(nombre) {
  console.log(`hola ${nombre} funcion exportada`);
}

//exportar una clase
export class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`hola ${this.nombre} clase exportada`);
  }
}
