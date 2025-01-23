const os = require("node:os");

console.log("informacion del sistema");
console.log("------------------------");
console.log("nombre del sistema operativo", os.platform());
console.log("nombre del release", os.release);
console.log("arquitectura", os.arch());
console.log("cpus ", os.cpus());
console.log("memoria libre", os.freemem() / 1024 / 1024);

//variables de entorno
console.log("informacion de una variable de entorno");
console.log(process.env.MIVARIABLE);
