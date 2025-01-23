import express, { json } from "express";
import libroRutas from "./rutas/v1/libroRutas.js";
import autorRutas from "./rutas/v1/autorRutas.js";
import usuarioRutas from "./rutas/v1/usuarioRutas.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

//midleware
app.use(json());

app.use("/api/v1/libro", libroRutas);
app.use("/api/v1/autor", autorRutas);
app.use("/api/v1/usuario", usuarioRutas);
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

const PUERTO = process.env.PUERTO || 3000;

app.listen(PUERTO, () => {
  console.log(`Servidor corriendo en el puerto ${PUERTO} ...`);
});
