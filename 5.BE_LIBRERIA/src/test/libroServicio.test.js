jest.mock("@prisma/client", () => {
  const mockFindMany = jest.fn();
  const mockCreate = jest.fn();
  const mockUpdate = jest.fn();
  const mockDelete = jest.fn();

  return {
    PrismaClient: jest.fn(() => ({
      libro: {
        findMany: mockFindMany,
        create: mockCreate,
        update: mockUpdate,
        delete: mockDelete,
      },
    })),
  };
});

import libroServicio from "../servicios/libroServicio.js";

const prismaMock = {
  libro: {
    findMany: jest.requireMock("@prisma/client").PrismaClient().libro.findMany,
    create: jest.requireMock("@prisma/client").PrismaClient().libro.create,
    update: jest.requireMock("@prisma/client").PrismaClient().libro.update,
    delete: jest.requireMock("@prisma/client").PrismaClient().libro.delete,
  },
};

describe("Servicio de libros", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("obtener libros", () => {
    test("debe retornar todos los libros", async () => {
      const librosEsperados = [
        { id: 1, titulo: "Libro 1" },
        { id: 2, titulo: "Libro 2" },
      ];

      prismaMock.libro.findMany.mockResolvedValue(librosEsperados);
      const resultado = await libroServicio.obtenerLibros();
      expect(prismaMock.libro.findMany).toHaveBeenCalledTimes(1);
      expect(resultado).toEqual(librosEsperados);
    });
  });

  describe("crear libro", () => {
    test("debe crear un libro", async () => {
      const libroData = { titulo: "Nuevo Libro" };
      const libroCreado = { id: 1, ...libroData };

      prismaMock.libro.create.mockResolvedValue(libroCreado);
      const resultado = await libroServicio.crearLibro(libroData);
      expect(prismaMock.libro.create).toHaveBeenCalledTimes(1);
      expect(prismaMock.libro.create).toHaveBeenCalledWith({ data: libroData });
      expect(resultado).toEqual(libroCreado);
    });
  });
});
