import autorServicio from "../servicios/autorServicio.js";

const obtenerAutores = async (req, res) => {
  const datos = await autorServicio.obtenerAutores();
  res.json(datos);
};

const crearAutor = async (req, res) => {
  const body = req.body;
  const datos = await autorServicio.crearAutor(body);
  res.json(datos);
};

const actualizarAutor = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const datos = await autorServicio.actualizarAutor(body, id);
  res.json(datos);
};

const eliminarAutor = async (req, res) => {
  const id = req.params.id;
  const datos = await autorServicio.eliminarAutor(id);
  res.json(datos);
};

export default {
  obtenerAutores,
  crearAutor,
  actualizarAutor,
  eliminarAutor,
};
