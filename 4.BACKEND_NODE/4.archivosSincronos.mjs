import { readFileSync } from "node:fs";

console.log("op1");
const archivo1 = readFileSync("archivos/archivo1.txt", "utf-8");
console.log(archivo1);
console.log("op2");
const archivo2 = readFileSync("archivos/archivo2.txt", "utf-8");
console.log(archivo2);
console.log("op3");
const archivo3 = readFileSync("archivos/archivo3.txt", "utf-8");
console.log(archivo3);
