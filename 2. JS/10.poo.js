/*
POO > CREACION DE OBJETOS
 CLASE, OBJETO, METODO O PROPIEDAD, PROTOTIPOS
*/
//creacion de objetos literales
let usuario = {
  correo: "jhon@gmail.com",
  contrasena: "123",
  saludar: function () {
    console.log(`hola soy ${this.correo}`);
  },
};
console.log(usuario);
usuario.nombre = "jhon mendez"; //asignando una nueva propiedad al objeto
console.log(usuario);
console.log(usuario.nombre); //accedemos al nombre
usuario.saludar(); //accediendo al comportamiento del objeto

//creacion a partir de la clase Object
const persona = new Object();
persona.nombre = "jhon";
persona.apellido = "mendez";
persona.edad = 45;
persona.saludar = () => {
  console.log(`hola soy ${persona.nombre}`);
};

console.log(persona);
persona.saludar();

//crear objetos a partir de clases constructores
function Animal(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = () => {
    console.log(`hola soy ${this.nombre}`);
  };
}

let perro = new Animal("magie", 12);
console.log(perro);
perro.saludar();

//creacion de objetos a partir de clases (ES6)
class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  saludar() {
    console.log(
      `hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    );
  }
}

let persona1 = new Persona("JHON", "MENDEZ", 45);

console.log(persona1.nombre);
console.log(persona1);
persona1.saludar();

class Profesor extends Persona {
  constructor(nombre, apellido, edad, salario) {
    super(nombre, apellido, edad);
    this.salario = salario;
  }

  mostrarSalario() {
    console.log(
      `Hola soy el profesor ${this.nombre} y me gano ${this.salario} pesos`
    );
  }
}

let profesor1 = new Profesor("jhon", "mendez", 45);
profesor1.salario = 100000;
profesor1.salario = -100000;
console.log(profesor1);
profesor1.saludar();
profesor1.mostrarSalario();

//encapsular atributos de un objeto
//ES2020
class Cuenta {
  #saldo;
  constructor(saldo) {
    this.#saldo = saldo;
  }

  setSaldo(saldo) {
    if (saldo < 0) {
      console.error("no puede asignar un saldo negativo");
    } else {
      this.#saldo = saldo;
    }
  }

  consultarSaldo() {
    return this.#saldo;
  }
}

let cuenta_ahorros = new Cuenta(100);
console.log(cuenta_ahorros);
//cuenta_ahorros.#saldo = -1000; no se puede hacer ya que el atributo es privado
cuenta_ahorros.setSaldo(-2000);
cuenta_ahorros.setSaldo(2000);
console.log(cuenta_ahorros);
console.log(cuenta_ahorros.consultarSaldo());

//closures - se usa para proteger datos

function crearCuenta(saldo_inicial) {
  let saldo = saldo_inicial;
  return {
    mostrarSaldo: () => {
      console.log(saldo);
    },

    depositar_dinero: (cantidad) => {
      saldo = saldo + cantidad;
    },
  };
}

const cuenta = crearCuenta(100);
cuenta.mostrarSaldo();
//cuenta.saldo = 500;
console.log(cuenta);
cuenta.mostrarSaldo();
cuenta.depositar_dinero(500);
console.log(cuenta);
cuenta.mostrarSaldo();
console.log(cuenta.saldo);
