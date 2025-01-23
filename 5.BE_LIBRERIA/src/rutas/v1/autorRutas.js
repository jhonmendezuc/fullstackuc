import { Router } from "express";
import autorControlador from "../../controladores/autorControlador.js";
import validarToken from "../../midleware/validarToken.js";

const router = new Router();

router.use(validarToken.validarToken);

router
  .get("/", autorControlador.obtenerAutores)
  .post("/", autorControlador.crearAutor)
  .put("/:id", autorControlador.actualizarAutor)
  .delete("/:id", autorControlador.eliminarAutor);

export default router;
