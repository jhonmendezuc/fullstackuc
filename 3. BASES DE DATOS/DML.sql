-- Active: 1736032503943@@dpg-ctsqup3v2p9s738doedg-a.oregon-postgres.render.com@5432@basedatosfullstack@public
--dml - sql - manipulacion de los datos (insert, update, delete, select)

INSERT INTO AUTOR(nombre) VALUES('Gabriel garcia marquez');
INSERT INTO AUTOR(nombre) VALUES('Jhon Mendez');

INSERT INTO LIBRO(nombre,id_autor) VALUES('Cien años de soledad', 1);
INSERT INTO LIBRO(nombre,id_autor) VALUES('El amor en los tiempos del cólera', 1);

INSERT INTO GENERO(nombre) VALUES
('Ficcion'),
('Realismo magico');

INSERT INTO LIBRO_GENERO(id_libro,id_genero) VALUES
(1,1),
(1,2);

INSERT INTO DETALLE_LIBRO(id_libro,resumen,paginas) VALUES
(1,'Una saga sobre la familia buen día',450);


UPDATE AUTOR  
SET nombre = 'Gabriel García Márquez'
WHERE id = 1

DELETE FROM AUTOR
WHERE id = 2;

--
INSERT INTO autor (nombre) VALUES
('Gabriel García Márquez'),
('Isabel Allende'),
('Mario Vargas Llosa'),
('Julio Cortázar'),
('Jorge Luis Borges'),
('Laura Esquivel'),
('Carlos Fuentes'),
('Pablo Neruda'),
('Octavio Paz'),
('Juan Rulfo');

INSERT INTO libro (nombre, id_autor) VALUES
('Cien años de soledad', 1),
('El amor en los tiempos del cólera', 1),
('La casa de los espíritus', 2),
('De amor y de sombra', 2),
('La ciudad y los perros', 3),
('Rayuela', 4),
('El Aleph', 5),
('Como agua para chocolate', 6),
('Aura', 7),
('Pedro Páramo', 10);

INSERT INTO genero (nombre) VALUES
('Ficción'),
('Realismo mágico'),
('Drama'),
('Historia'),
('Poesía'),
('Ensayo'),
('Romance'),
('Suspenso'),
('Ciencia ficción'),
('Biografía');

INSERT INTO libro_genero (id_libro, id_genero) VALUES
(1, 1), -- Cien años de soledad -> Ficción
(1, 2), -- Cien años de soledad -> Realismo mágico
(2, 7), -- El amor en los tiempos del cólera -> Romance
(3, 2), -- La casa de los espíritus -> Realismo mágico
(3, 3), -- La casa de los espíritus -> Drama
(4, 3), -- De amor y de sombra -> Drama
(5, 1), -- La ciudad y los perros -> Ficción
(6, 8), -- Rayuela -> Suspenso
(7, 5), -- El Aleph -> Poesía
(10, 2); -- Pedro Páramo -> Realismo mágico


INSERT INTO detalle_libro (id_libro, resumen, paginas) VALUES
(1, 'La historia de la familia Buendía en el pueblo de Macondo.', 417),
(2, 'Una historia de amor en medio de una epidemia.', 348),
(3, 'La saga de una familia chilena llena de secretos.', 490),
(4, 'La lucha de una pareja en tiempos de dictadura.', 420),
(5, 'La vida en un internado militar peruano.', 445),
(6, 'Una narrativa experimental sobre la vida en París.', 600),
(7, 'Un conjunto de cuentos filosóficos y metafísicos.', 320),
(8, 'Una historia de amor y recetas mexicanas.', 210),
(9, 'Un relato sombrío y misterioso.', 260),
(10, 'La vida en un pueblo mexicano y la búsqueda de un padre.', 200);
