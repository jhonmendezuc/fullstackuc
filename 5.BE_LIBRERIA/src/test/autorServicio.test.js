// src/test/autorServicio.test.js

// Primero mockeamos PrismaClient ANTES de importar el servicio
jest.mock("@prisma/client", () => {
  const mockFindMany = jest.fn();
  const mockCreate = jest.fn();
  const mockUpdate = jest.fn();
  const mockDelete = jest.fn();

  return {
    PrismaClient: jest.fn(() => ({
      autor: {
        findMany: mockFindMany,
        create: mockCreate,
        update: mockUpdate,
        delete: mockDelete,
      },
    })),
  };
});

// Ahora importamos el servicio
import autorServicio from "../servicios/autorServicio.js";

// Obtenemos acceso a los mocks para configurarlos en cada test
const prismaMock = {
  autor: {
    findMany: jest.requireMock("@prisma/client").PrismaClient().autor.findMany,
    create: jest.requireMock("@prisma/client").PrismaClient().autor.create,
    update: jest.requireMock("@prisma/client").PrismaClient().autor.update,
    delete: jest.requireMock("@prisma/client").PrismaClient().autor.delete,
  },
};

// Mockeamos console.log para evitar ruido en las pruebas
console.log = jest.fn();

describe("Servicio de Autores", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("obtenerAutores", () => {
    it("debería obtener todos los autores", async () => {
      // Datos de prueba
      const autoresMock = [
        { id: 1, nombre: "Gabriel García Márquez" },
        { id: 2, nombre: "Jorge Luis Borges" },
      ];

      // Configuramos el mock para que devuelva nuestros datos de prueba
      prismaMock.autor.findMany.mockResolvedValue(autoresMock);

      // Llamamos a la función que queremos probar
      const resultado = await autorServicio.obtenerAutores();

      // Verificamos que el método de Prisma fue llamado correctamente
      expect(prismaMock.autor.findMany).toHaveBeenCalledTimes(1);

      // Verificamos que la función devuelve lo que esperamos
      expect(resultado).toEqual(autoresMock);

      // Verificamos que el console.log fue llamado
      expect(console.log).toHaveBeenCalledWith(autoresMock);
    });

    it("debería manejar errores al obtener autores", async () => {
      // Configuramos el mock para simular un error
      const error = new Error("Error al conectar con la base de datos");
      prismaMock.autor.findMany.mockRejectedValue(error);

      // Verificamos que la promesa sea rechazada con el error esperado
      await expect(autorServicio.obtenerAutores()).rejects.toThrow(error);

      // Verificamos que el método de Prisma fue llamado
      expect(prismaMock.autor.findMany).toHaveBeenCalledTimes(1);
    });
  });

  describe("crearAutor", () => {
    it("debería crear un nuevo autor", async () => {
      // Datos de prueba
      const autorNuevo = { nombre: "Isabel Allende" };
      const autorCreado = { id: 3, ...autorNuevo };

      // Configuramos el mock
      prismaMock.autor.create.mockResolvedValue(autorCreado);

      // Llamamos a la función que queremos probar
      const resultado = await autorServicio.crearAutor(autorNuevo);

      // Verificamos que el método de Prisma fue llamado correctamente
      expect(prismaMock.autor.create).toHaveBeenCalledTimes(1);
      expect(prismaMock.autor.create).toHaveBeenCalledWith({
        data: autorNuevo,
      });

      // Verificamos que la función devuelve lo que esperamos
      expect(resultado).toEqual(autorCreado);
    });

    it("debería manejar errores al crear un autor", async () => {
      // Datos de prueba
      const autorNuevo = { nombre: "Isabel Allende" };

      // Configuramos el mock para simular un error
      const error = new Error("Error al crear autor");
      prismaMock.autor.create.mockRejectedValue(error);

      // Verificamos que la promesa sea rechazada con el error esperado
      await expect(autorServicio.crearAutor(autorNuevo)).rejects.toThrow(error);

      // Verificamos que el método de Prisma fue llamado
      expect(prismaMock.autor.create).toHaveBeenCalledTimes(1);
    });
  });

  describe("actualizarAutor", () => {
    it("debería actualizar un autor existente", async () => {
      // Datos de prueba
      const id = "1";
      const datosActualizados = {
        nombre: "Gabriel García Márquez (actualizado)",
      };
      const autorActualizado = { id: 1, ...datosActualizados };

      // Configuramos el mock
      prismaMock.autor.update.mockResolvedValue(autorActualizado);

      // Llamamos a la función que queremos probar
      const resultado = await autorServicio.actualizarAutor(
        datosActualizados,
        id
      );

      // Verificamos que el método de Prisma fue llamado correctamente
      expect(prismaMock.autor.update).toHaveBeenCalledTimes(1);
      expect(prismaMock.autor.update).toHaveBeenCalledWith({
        where: { id: parseInt(id) },
        data: datosActualizados,
      });

      // Verificamos que la función devuelve lo que esperamos
      expect(resultado).toEqual(autorActualizado);
    });

    it("debería manejar errores al actualizar un autor", async () => {
      // Datos de prueba
      const id = "1";
      const datosActualizados = {
        nombre: "Gabriel García Márquez (actualizado)",
      };

      // Configuramos el mock para simular un error
      const error = new Error("Error al actualizar autor");
      prismaMock.autor.update.mockRejectedValue(error);

      // Verificamos que la promesa sea rechazada con el error esperado
      await expect(
        autorServicio.actualizarAutor(datosActualizados, id)
      ).rejects.toThrow(error);

      // Verificamos que el método de Prisma fue llamado
      expect(prismaMock.autor.update).toHaveBeenCalledTimes(1);
    });
  });

  describe("eliminarAutor", () => {
    it("debería eliminar un autor existente", async () => {
      // Datos de prueba
      const id = "1";
      const autorEliminado = { id: 1, nombre: "Gabriel García Márquez" };

      // Configuramos el mock
      prismaMock.autor.delete.mockResolvedValue(autorEliminado);

      // Llamamos a la función que queremos probar
      const resultado = await autorServicio.eliminarAutor(id);

      // Verificamos que el método de Prisma fue llamado correctamente
      expect(prismaMock.autor.delete).toHaveBeenCalledTimes(1);
      expect(prismaMock.autor.delete).toHaveBeenCalledWith({
        where: { id: parseInt(id) },
      });

      // Verificamos que la función devuelve lo que esperamos
      expect(resultado).toEqual(autorEliminado);
    });

    it("debería manejar errores al eliminar un autor", async () => {
      // Datos de prueba
      const id = "1";

      // Configuramos el mock para simular un error
      const error = new Error("Error al eliminar autor");
      prismaMock.autor.delete.mockRejectedValue(error);

      // Verificamos que la promesa sea rechazada con el error esperado
      await expect(autorServicio.eliminarAutor(id)).rejects.toThrow(error);

      // Verificamos que el método de Prisma fue llamado
      expect(prismaMock.autor.delete).toHaveBeenCalledTimes(1);
    });
  });
});
