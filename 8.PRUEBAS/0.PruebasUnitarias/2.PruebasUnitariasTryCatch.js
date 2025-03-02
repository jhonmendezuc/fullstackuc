function dividir(numero1, numero2) {
  if (numero2 === 0) {
    throw new Error("No se puede dividir por 0");
  }
  return numero1 / numero2;
}

//funcion para parobar y manejar los errores
function probar(descripcion, funcion) {
  try {
    funcion();
    console.log(`✅ La prueba ${descripcion} paso correctamente`);
  } catch (error) {
    console.error(`❌ La prueba ${descripcion} falló`);
    console.error(error);
  }
}

//casos de prueba
probar("Dividir por 0", () => dividir(2, 0));
probar("Dividir por 1", () => dividir(2, 1));
probar("Dividir por 2", () => dividir(2, 2));
probar("Dividir por 3", () => dividir(2, 3));
