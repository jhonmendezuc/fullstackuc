//callback es una funcion que se pasa como parametro a otra funcion

function obtenerDatos(callback) {
  const datos_usuario = { nombre_usuario: "jhon123", contrasena: "123" };
  console.log("obteniendo datos ...");

  setTimeout(() => {
    callback(datos_usuario);
  }, 2000);
}

function procesarDatos(datos) {
  console.log(datos);
  console.log("datos procesados ...");
}

obtenerDatos(procesarDatos);
console.log("hola mundo");
