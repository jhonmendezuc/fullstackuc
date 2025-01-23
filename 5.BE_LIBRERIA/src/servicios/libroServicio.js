import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const obtenerLibros = async () => {
  const query = await prisma.libro.findMany();
  console.log(query);
  return query;
};

const crearLibro = async (body) => {
  const query = await prisma.libro.create({
    data: body,
  });
  return query;
};

const actualizarLibro = async (body, id) => {
  const query = await prisma.libro.update({
    where: {
      id: parseInt(id),
    },
    data: body,
  });
  return query;
};

const eliminarLibro = async (id) => {
  const query = await prisma.libro.delete({
    where: {
      id: parseInt(id),
    },
  });
  return query;
};

export default {
  obtenerLibros,
  crearLibro,
  actualizarLibro,
  eliminarLibro,
};
