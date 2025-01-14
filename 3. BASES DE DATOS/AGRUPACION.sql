-- Active: 1736032503943@@dpg-ctsqup3v2p9s738doedg-a.oregon-postgres.render.com@5432@basedatosfullstack@public
--AGRUPACIONES

-- CONTAR LIBRO POR CADA AUTOR

SELECT AUTOR.NOMBRE, COUNT(LIBRO.ID) 
FROM AUTOR
JOIN LIBRO ON AUTOR.ID = LIBRO.ID_AUTOR 
GROUP BY AUTOR.NOMBRE;

-- PROMERDIO DE PAGINAS POR GENERO

SELECT G.NOMBRE, AVG(DETALLE_LIBRO.PAGINAS) AS PROMEDIO_PAGINAS
FROM GENERO AS G
JOIN LIBRO_GENERO ON G.ID = LIBRO_GENERO.ID_GENERO
JOIN DETALLE_LIBRO ON LIBRO_GENERO.ID_LIBRO = DETALLE_LIBRO.ID_LIBRO
GROUP BY G.NOMBRE

-- TOTAL DE PAGINAS POR AUTOR

SELECT A.NOMBRE, SUM(DETALLE_LIBRO.PAGINAS) AS TOTAL_PAGINAS
FROM AUTOR AS A
JOIN LIBRO ON A.ID = LIBRO.ID_AUTOR
JOIN DETALLE_LIBRO ON LIBRO.ID = DETALLE_LIBRO.ID_LIBRO
GROUP BY A.NOMBRE
ORDER BY 2 DESC
LIMIT 3 

-- NUMERO DE LIBROS ESCRITOS POR AUTOR Y GENERO
SELECT A.NOMBRE, G.NOMBRE, COUNT(L.ID)
FROM AUTOR A
JOIN LIBRO L ON A.ID = L.ID_AUTOR
JOIN LIBRO_GENERO LG ON L.ID = LG.ID_LIBRO
JOIN GENERO G ON LG.ID_GENERO = G.ID
GROUP BY A.NOMBRE, G.NOMBRE