import jwt from "jsonwebtoken";

//midleware para validar un jwt

const validarToken = (req, res, next) => {
  const autenticacionHeader = req.headers["authorization"];

  //verificar si existe un header authorization
  if (!autenticacionHeader) {
    return res.status(401).json({ error: "No se ha enviado un token" });
  }

  //extraemos el token
  const token = autenticacionHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No se ha enviado un token" });
  }

  try {
    //verificamos el token con la clave secreta
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.correo = payload;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalido" });
  }
};

export default { validarToken };
