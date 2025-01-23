import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

const login = async (correo, contrasena) => {
  const usuario = await prisma.usuario.findFirst({
    where: {
      correo,
    },
  });

  if (!usuario) {
    return { respuesta: "Usuario no encontrado" };
  }
  const validarContrasena = await compararContrasena(
    contrasena,
    usuario.contrasena
  );

  if (!validarContrasena) {
    return { respuesta: "Contraseña incorrecta" };
  }

  const token = jwt.sign(
    {
      id: usuario.id,
      correo: usuario.correo,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
  return { token: token };
};

const crearUsuario = async (correo, contrasena) => {
  const contrasenaEncriptada = await ecriptarContrasena(contrasena);
  const usuario = await prisma.usuario.create({
    data: {
      correo: correo,
      contrasena: contrasenaEncriptada,
    },
  });
  return usuario;
};

const ecriptarContrasena = async (contrasena) => {
  const saltRounds = 10;
  const contrasenaEncriptada = await bcrypt.hash(contrasena, saltRounds);
  return contrasenaEncriptada;
};

const compararContrasena = async (contrasena, contrasenaEncriptada) => {
  const contrasenaValida = await bcrypt.compare(
    contrasena,
    contrasenaEncriptada
  );
  return contrasenaValida;
};

export default { login, crearUsuario };
