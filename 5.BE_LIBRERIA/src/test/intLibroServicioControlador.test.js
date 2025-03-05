import express from "express";
import request from "supertest";
import libroControlador from "../controladores/libroControlador.js";
import libroServicio from "../servicios/libroServicio.js";

//crear la app
const app = express();
app.use(express.json());

//configurar rutas
app.get("/libros", libroControlador.obtenerLibros);
app.post("/libros", libroControlador.crearLibro);
app.put("/libros/:id", libroControlador.actualizarLibro);
app.delete("/libros/:id", libroControlador.eliminarLibro);

//mock para el servicio

jest.mock("../servicios/libroServicio.js");

describe("pruebas de integracion del controlador de libros", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("GET /libros - debe retornar todos los libros", async () => {
    const librosMock = [
      {
        id: 1,
        titulo: "El señor de los anillos",
        autor: "J.R.R. Tolkien",
      },
      {
        id: 2,
        titulo: "El hobbit",
        autor: "J.R.R. Tolkien",
      },
    ];

    libroServicio.obtenerLibros.mockResolvedValue(librosMock);

    //hacer las solicitud
    const response = await request(app).get("/libros");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(librosMock);
    expect(libroServicio.obtenerLibros).toHaveBeenCalledTimes(1);
  });

  test("POST /libros - debe crear un libro", async () => {
    const libroMock = {
      titulo: "El señor de los anillos",
      autor: "J.R.R. Tolkien",
    };

    libroServicio.crearLibro.mockResolvedValue(libroMock);

    //hacer las solicitud
    const response = await request(app).post("/libros").send(libroMock);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(libroMock);
    expect(libroServicio.crearLibro).toHaveBeenCalledTimes(1);
  });

  test("PUT /libros/:id - debe actualizar un libro", async () => {
    const libroMock = {
      titulo: "El señor de los anillos",
      autor: "J.R.R. Tolkien",
    };

    libroServicio.actualizarLibro.mockResolvedValue(libroMock);

    //hacer las solicitud
    const response = await request(app).put("/libros/1").send(libroMock);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(libroMock);
    expect(libroServicio.actualizarLibro).toHaveBeenCalledTimes(1);
  });

  test("DELETE /libros/:id - debe eliminar un libro", async () => {
    libroServicio.eliminarLibro.mockResolvedValue();

    //hacer las solicitud
    const response = await request(app).delete("/libros/1");

    expect(response.status).toBe(200);
    expect(libroServicio.eliminarLibro).toHaveBeenCalledTimes(1);
  });
});
