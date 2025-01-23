import { Router } from "express";
import usuarioControlador from "../../controladores/usuarioControlador.js";
const router = new Router();

router
  .post("/login", usuarioControlador.login)
  .post("/", usuarioControlador.crearUsuario);

export default router;
