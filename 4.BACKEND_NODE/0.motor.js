//macrotarea
setTimeout(() => {
  console.log("tarea 2 macrotarea");
}, 2000);

//tarea sincrona
console.log("tarea 1 sincrona");

console.log("tarea 3 sincrona");
//microtarea

Promise.resolve().then(() => {
  console.log("tarea 4 microtarea");
});
