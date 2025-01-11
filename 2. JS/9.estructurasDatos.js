/*
estructuras de datos en js > colecciones de datos
1. array - colecciones ordenadas, indexadas, se pueden duplicar. Listar, iterar, manipular
2. set - colecciones no ordenadas, no indexadas, no se pueden duplicar. Listar, iterar, manipular
3. map - colecciones no ordenadas, permiten almacenar datos a partir de claves y valores. Listar, iterar, manipular
*/

console.log("estructuras de datos");
//1. arrays
let numeros = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];
console.log(numeros); //array de numeros
let letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
console.log(letras); //array de letras
let mezcla = [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", true];
console.log(mezcla);
//iterar arrays
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
//metodos para manipular arrays
//foreach - recorrer array
letras.forEach((letra) => {
  console.log(`letra ${letra}`);
});
//map -- recorrer array y devuelve uno nuevo
let dobles = numeros.map((numero) => {
  return numero * 2;
});
console.log(numeros);
console.log(dobles);

//filter -- recorre el array y me devuelve uno nuevo con filtro
let pares = numeros.filter((numero) => {
  return numero % 2 === 0;
});
console.log(pares);
console.log(numeros);
//find -- recorrer y buscar un valor
let busqueda = numeros.find((numero) => {
  return numero === 5;
});

console.log(busqueda);

//metodos para manipular arrays
//push -- agregar un elemento al final del array
console.log(numeros);
numeros.push(11);
numeros.push(12);
console.log(numeros);
//eliminar el ultimo elemento del array
numeros.pop();
console.log(numeros);
//shift -- eliminar el primer elemento
numeros.shift();
console.log(numeros);
//unshift -- agregar un elemento al principio
numeros.unshift(100);
console.log(numeros);

//sets

let conjunto = new Set([1, 1, 2, 3, 4, 6, 7]);
console.log(conjunto);

//metodos para manipular sets
//add -- agregar un elemento
conjunto.add(8);
console.log(conjunto);
//eliminar un elemento
conjunto.delete(2);
console.log(conjunto);
//verificar la existencia de un dato
console.log(conjunto.has(10));
console.log(conjunto.has(8));
//recorrer un conjunto
conjunto.forEach((numero) => {
  console.log(numero);
});
//conocer el tam;ao del set
console.log(conjunto.size);

//maps
let mapa = new Map();
mapa.set("nombre", "Juan");
console.log(mapa);
mapa.set("apellido", "Perez");
mapa.set("edad", 30);
mapa.set(100, "cien");
console.log(mapa);
//obtener un valor
console.log(mapa.get("apellido"));
console.log(mapa.get(100));
mapa.set("edad", 31);
mapa.set("Edad", 50);
console.log(mapa);
//VERIFICAR UN DATOS
console.log(mapa.has("nombre"));
//eliminar un dato
mapa.delete("Edad");
console.log(mapa);
//recorrer un mapa
mapa.forEach((valor, clave) => {
  console.log(`clave: ${clave} - valor: ${valor}`);
});
//conocer el tam;ao del mapa
console.log(mapa.size);
