import { Router } from "express";
import libroControlador from "../../controladores/libroControlador.js";
import validarToken from "../../midleware/validarToken.js";
const router = new Router();

//router.use(validarToken.validarToken);

router
  .get("/", libroControlador.obtenerLibros)
  .post("/", libroControlador.crearLibro)
  .put("/:id", libroControlador.actualizarLibro)
  .delete("/:id", libroControlador.eliminarLibro);

export default router;
