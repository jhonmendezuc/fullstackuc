import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const obtenerAutores = async () => {
  const query = await prisma.autor.findMany();
  console.log(query);
  return query;
};

const crearAutor = async (body) => {
  const query = await prisma.autor.create({
    data: body,
  });
  return query;
};

const actualizarAutor = async (body, id) => {
  const query = await prisma.autor.update({
    where: {
      id: parseInt(id),
    },
    data: body,
  });
  return query;
};

const eliminarAutor = async (id) => {
  const query = await prisma.autor.delete({
    where: {
      id: parseInt(id),
    },
  });
  return query;
};

export default {
  obtenerAutores,
  crearAutor,
  actualizarAutor,
  eliminarAutor,
};
