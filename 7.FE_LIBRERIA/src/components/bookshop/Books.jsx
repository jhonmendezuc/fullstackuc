import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config.js";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const bookUrl = config.apiUrl + "libro";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [bookData, setBookData] = useState({
    id: "",
    nombre: "",
    descripcion: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Obtener el token JWT desde el localStorage
  const token = localStorage.getItem("token");

  // Configuración de Axios con el token Bearer
  const axiosInstance = axios.create({
    baseURL: bookUrl, // URL base de tu API
    headers: {
      Authorization: `Bearer ${token}`, // Agregar el token a los headers de cada solicitud
    },
  });

  // Función para obtener los libros desde la API
  const fetchBooks = async () => {
    try {
      const response = await axiosInstance.get(bookUrl);
      setBooks(response.data);
    } catch (error) {
      console.error("Error al obtener los libros:", error);
    }
  };

  // Función para manejar el cambio en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  // Función para crear o editar un libro
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axiosInstance.put(`/${bookData.id}`, bookData);
      } else {
        const bookData2 = {
          nombre: bookData.nombre,
          descripcion: bookData.descripcion,
        };
        await axiosInstance.post("", bookData2);
      }
      setOpenDialog(false);
      fetchBooks();
    } catch (error) {
      console.error("Error al guardar el libro:", error);
    }
  };

  // Función para abrir el formulario en modo edición
  const handleEdit = (book) => {
    setIsEditing(true);
    setBookData(book);
    setOpenDialog(true);
  };

  // Función para eliminar un libro
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/${id}`);
      fetchBooks();
    } catch (error) {
      console.error("Error al eliminar el libro:", error);
    }
  };

  // Función para abrir el formulario en modo creación
  const handleCreate = () => {
    setIsEditing(false);
    setBookData({ id: "", nombre: "", descripcion: "" });
    setOpenDialog(true);
  };

  // Cargar los libros al montar el componente
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      {/* Barra de navegación */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            CRUD de Libros
          </Typography>
          <Button color="inherit" onClick={handleCreate}>
            Crear Libro
          </Button>
        </Toolbar>
      </AppBar>

      {/* Lista de libros */}
      <Box sx={{ padding: 2 }}>
        <List>
          {books.map((book) => (
            <ListItem key={book.id} sx={{ marginBottom: 2 }}>
              <ListItemText
                primary={book.nombre}
                secondary={book.descripcion}
                sx={{ color: "#000" }}
              />
              <IconButton color="primary" onClick={() => handleEdit(book)}>
                <EditIcon />
              </IconButton>
              <IconButton color="error" onClick={() => handleDelete(book.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Diálogo para Crear/Editar Libro */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>{isEditing ? "Editar Libro" : "Crear Libro"}</DialogTitle>
        <DialogContent>
          <TextField
            label="Nombre"
            name="nombre"
            fullWidth
            value={bookData.nombre}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            label="Descripción"
            name="descripcion"
            fullWidth
            value={bookData.descripcion}
            onChange={handleInputChange}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {isEditing ? "Actualizar" : "Crear"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Books;
