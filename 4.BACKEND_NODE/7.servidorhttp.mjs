import http from "node:http";

const estudiantes = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    edad: 20,
    carrera: "Ingenieria en Sistemas",
  },
  {
    id: 2,
    nombre: "Maria",
    apellido: "Lopez",
    edad: 22,
    carrera: "Ingenieria en Sistemas",
  },
  {
    id: 3,
    nombre: "Pedro",
    apellido: "Gomez",
    edad: 21,
    carrera: "Ingenieria en Sistemas",
  },
];

// host,puerto
const servidor = http.createServer((req, res) => {
  //res.setHeaders("Content-Type", "application/json");
  console.log("metodo ", req.method);
  console.log("url de solicitud de cliente ", req.url);
  res.end(JSON.stringify(estudiantes));
});

servidor.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000...");
});
