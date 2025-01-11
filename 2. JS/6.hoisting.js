//hoisting - elevación
/*
1. declaracion de funciones se elevan primero
2. las variables declaradas con var
3. las variables declaradas con let y const
4. las funciones declaradas por medio de variables o expresiones
*/
//hoisting a nivel de variables
console.log(x);
var x = 5;

//console.log(y);
//let y = 5;

//hoisting a nivel de funciones
saludar();

function saludar() {
  console.log("hola");
}

saludo();
let saludo = () => {
  console.log("hola");
};

/*
1. evitar el uso de var, preferis let y const
2. declarar variables al inicio del programa y funcion
3. usar funciones declaradas
*/
