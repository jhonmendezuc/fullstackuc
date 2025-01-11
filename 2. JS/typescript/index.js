//clases
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.saludar = function () {
        console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " a\u00F1os.");
    };
    return Persona;
}());
var persona1 = new Persona("Juan", 30);
console.log(persona1);
persona1.saludar();
var perro = {
    nombre: "Max",
    edad: 3,
    sonido: function () {
        console.log("Guau guau");
    }
};
perro.sonido();
console.log(perro);
var computador = {
    nombre: "Computador",
    precio: 1000,
    stock: 10
};
console.log(computador);
//enumeradores
var Colores;
(function (Colores) {
    Colores["Rojo"] = "rojo";
    Colores["Verde"] = "verde";
    Colores["Azul"] = "azul";
})(Colores || (Colores = {}));
var color = Colores.Rojo;
console.log(color);
var Direccion;
(function (Direccion) {
    Direccion[Direccion["Norte"] = 0] = "Norte";
    Direccion[Direccion["Sur"] = 1] = "Sur";
    Direccion[Direccion["Este"] = 2] = "Este";
    Direccion[Direccion["Oeste"] = 3] = "Oeste";
})(Direccion || (Direccion = {}));
function mover(direccion) {
    console.log("Moviendo hacia " + Direccion[direccion]);
}
mover(Direccion.Oeste);
mover(Direccion.Sur);
var numeros = [1, 2, 3, 4, 6];
console.log(numeros);
var nombres = ["Juan", "Pedro", "Maria"];
console.log(nombres);
numeros.forEach(function (numero) {
    console.log(numero);
});
