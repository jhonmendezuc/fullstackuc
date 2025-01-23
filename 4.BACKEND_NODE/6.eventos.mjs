import { EventEmitter } from "node:events";

const evento = new EventEmitter();

//escucha de eventos
evento.on("miEvento", (mensaje) => {
  console.log("se ha emitido un evento ", mensaje);
});

evento.on("error", (error) => {
  console.log("se ha emitido un error ", error);
});

removeEventListener();
///emision de eventos
evento.emit("miEvento", "hola mundo");
evento.emit("miEvento", "menaje 2");
evento.emit("miEvento", "menaje 3");
evento.emit("error", new Error("error de prueba"));

//ejecutar eventos una vez
evento.once("miEvento", (mensaje) => {
  console.log("se ha emitido un evento ", mensaje);
});
