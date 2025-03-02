function suma(numero1, numero2) {
  return numero1 * numero2;
}

console.assert(suma(2, 3) === 5, "Errror: suma(2,3) debería ser 5");
console.assert(suma(-2, -3) === -5, "Errror: suma(-2,-3) debería ser -5");
console.assert(suma(-2, 3) === 1, "Errror: suma(-2,3) debería ser 1");

console.log("Si no ves errores en esta salida, todas las pruebas pararon");
