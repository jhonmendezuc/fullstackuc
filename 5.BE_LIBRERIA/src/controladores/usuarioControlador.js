import usuarioServicio from "../servicios/UsuarioServicio.js";

const login = async (req, res) => {
  const { correo, contrasena } = req.body;
  const usuario = await usuarioServicio.login(correo, contrasena);
  res.json(usuario);
};

const crearUsuario = async (req, res) => {
  const { correo, contrasena } = req.body;
  const usuario = await usuarioServicio.crearUsuario(correo, contrasena);
  res.json(usuario);
};

export default {
  login,
  crearUsuario,
};
