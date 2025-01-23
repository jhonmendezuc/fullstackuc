import express, { json } from "express";

//middleware
const app = express();

app.use(json());

const estudiantes = [
  { id: 1, nombre: "Juan", apellido: "Perez", edad: 20 },
  { id: 2, nombre: "Maria", apellido: "Gomez", edad: 22 },
  { id: 3, nombre: "Pedro", apellido: "Gonzalez", edad: 21 },
  { id: 4, nombre: "Ana", apellido: "Lopez", edad: 23 },
  { id: 5, nombre: "Luis", apellido: "Martinez", edad: 24 },
];

const usuarios = [
  { id: 1, nombre: "Juan", apellido: "Perez", edad: 20 },
  { id: 2, nombre: "Maria", apellido: "Gomez", edad: 22 },
  { id: 3, nombre: "Pedro", apellido: "Gonzalez", edad: 21 },
  { id: 4, nombre: "Ana", apellido: "Lopez", edad: 23 },
  { id: 5, nombre: "Luis", apellido: "Martinez", edad: 24 },
];

//routes
app.get("/estudiantes", (req, res) => {
  res.json(estudiantes);
});

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.post("/usuarios", (req, res) => {
  const usuario = req.body;
  usuarios.push(usuario);
  res.status(201).json(usuario);
});

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

//escuchar el servidor

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000...");
});
