import libroServicio from "../servicios/libroServicio.js";

const obtenerLibros = async (req, res) => {
  const datos = await libroServicio.obtenerLibros();
  res.json(datos);
};

const crearLibro = async (req, res) => {
  const body = req.body;
  const datos = await libroServicio.crearLibro(body);
  res.json(datos);
};

const actualizarLibro = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const datos = await libroServicio.actualizarLibro(body, id);
  res.json(datos);
};

const eliminarLibro = async (req, res) => {
  const id = req.params.id;
  const datos = await libroServicio.eliminarLibro(id);
  res.json(datos);
};

export default {
  obtenerLibros,
  crearLibro,
  actualizarLibro,
  eliminarLibro,
};
