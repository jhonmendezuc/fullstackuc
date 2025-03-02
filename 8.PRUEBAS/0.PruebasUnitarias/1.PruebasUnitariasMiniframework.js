//miniframework de pruebas
function pruebas(nombre, funcion) {
  try {
    funcion();
    console.log(`✅ ${nombre} paso correctamente`);
  } catch (error) {
    console.error(`❌ prueba ${nombre} falló`);
    console.error(error);
  }
}

//funcion a probar
function multiplicar(numero1, numero2) {
  return numero1 + numero2;
}

//casos de prueba
pruebas("Multiplicar 2x3 deberìa ser 6", () => {
  if (multiplicar(2, 3) !== 6) throw new Error("2x3 deberìa ser 6");
});
pruebas("Multiplicar 2x4 deberìa ser 8", () => {
  if (multiplicar(2, 4) !== 8) throw new Error("2x4 deberìa ser 8");
});
pruebas("Multiplicar 2x5 deberìa ser 10", () => {
  if (multiplicar(2, 5) !== 10) throw new Error("2x5 deberìa ser 10");
});
