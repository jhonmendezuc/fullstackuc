-- Active: 1736032503943@@dpg-ctsqup3v2p9s738doedg-a.oregon-postgres.render.com@5432@basedatosfullstack@public


 --consultas

-- PROMEDIO DE PAGINAS
 SELECT AVG(PAGINAS)
 FROM DETALLE_LIBRO 

 -- EL MAXIMO DE PAGINAS 
 SELECT MAX(PAGINAS) 
 FROM DETALLE_LIBRO;

SELECT CONCAT(RESUMEN, ' - ', PAGINAS)
FROM DETALLE_LIBRO

SELECT UPPER(RESUMEN)
FROM DETALLE_LIBRO

SELECT REPLACE(NOMBRE, 'amor', 'pasion') 
FROM LIBRO


-- FUNCIONES DE AGREGACION

--contar el numero de libro
SELECT COUNT(*) AS CANTIDAD_LIBRO
FROM LIBRO

--CALCULAR EL NUMERO TOTAL DE PAGINAS ACUMULADAS

SELECT RESUMEN, PAGINAS
FROM DETALLE_LIBRO
ORDER BY 2 DESC

SELECT *
FROM LIBRO
WHERE NOMBRE = 'Rayuela'

SELECT * 
FROM DETALLE_LIBRO
WHERE PAGINAS < 250


-- filtrar un libro que contenga la palabra amor
SELECT * 
FROM LIBRO
WHERE NOMBRE LIKE '%amor%'

-- filtrar un libro que comiencen con la letra a
SELECT * 
FROM LIBRO
WHERE NOMBRE LIKE 'C%'

-- filtrar un libro que terminen con la letra a
SELECT * 
FROM LIBRO
WHERE NOMBRE LIKE '%a'


SELECT 
  CASE 
    WHEN paginas < 200 THEN 'Menos de 200 páginas'
    WHEN paginas BETWEEN 200 AND 400 THEN 'Entre 200 y 400 páginas'
    ELSE 'Más de 400 páginas'
  END AS rango_paginas,
  COUNT(*) AS total_libros
FROM detalle_libro
GROUP BY rango_paginas
ORDER BY total_libros DESC;