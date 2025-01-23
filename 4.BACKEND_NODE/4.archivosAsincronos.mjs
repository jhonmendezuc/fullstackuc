import { readFile } from "node:fs";
import FileReader from "node:fs";
console.log("op1");
readFile("archivos/archivo1.txt", "utf-8", (err, data) => {
  console.log(data, err);
});
console.log("op2");
readFile("archivos/archivo2.txt", "utf-8", (err, data) => {
  console.log(data, err);
});
console.log("op3");
readFile("archivos/archivo3.txt", "utf-8", (err, data) => {
  console.log(data, err);
});

//lectura archivo json
const estudiantes = FileReader.readFileSync(
  "archivos/estudiantes.json",
  "utf-8"
);
//convertir un objeto json a js
console.log(estudiantes);
const estudiantesObjeto = JSON.parse(estudiantes);
console.log(estudiantesObjeto);

const estudiante = {
  nombre: "Jhon",
  edad: 25,
  curso: "Node.js",
};
const estudianteJson = JSON.stringify(estudiante);

FileReader.writeFileSync("archivos/estudiante.json", estudianteJson);
