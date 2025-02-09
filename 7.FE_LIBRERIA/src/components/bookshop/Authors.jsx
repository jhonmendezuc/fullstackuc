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

const authorUrl = config.apiUrl + "autor";

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [authorData, setAuthorData] = useState({
    id: "",
    nombre: "",
    correo: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Obtener el token JWT desde el localStorage
  const token = localStorage.getItem("token");

  // Configuración de Axios con el token Bearer
  const axiosInstance = axios.create({
    baseURL: authorUrl, // URL base de tu API
    headers: {
      Authorization: `Bearer ${token}`, // Agregar el token a los headers de cada solicitud
    },
  });

  // Función para obtener los libros desde la API
  const fetchAuthors = async () => {
    try {
      const response = await axiosInstance.get(authorUrl);
      setAuthors(response.data);
    } catch (error) {
      console.error("Error al obtener los libros:", error);
    }
  };

  // Función para manejar el cambio en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAuthorData({
      ...authorData,
      [name]: value,
    });
  };

  // Función para crear o editar un libro
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axiosInstance.put(`/${authorData.id}`, authorData);
      } else {
        const authorData2 = {
          nombre: authorData.nombre,
          correo: authorData.correo,
        };
        await axiosInstance.post("", authorData2);
      }
      setOpenDialog(false);
      fetchAuthors();
    } catch (error) {
      console.error("Error al guardar el libro:", error);
    }
  };

  // Función para abrir el formulario en modo edición
  const handleEdit = (author) => {
    setIsEditing(true);
    setAuthorData(author);
    setOpenDialog(true);
  };

  // Función para eliminar un libro
  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/${id}`);
      fetchAuthors();
    } catch (error) {
      console.error("Error al eliminar el libro:", error);
    }
  };

  // Función para abrir el formulario en modo creación
  const handleCreate = () => {
    setIsEditing(false);
    setAuthorData({ id: "", nombre: "", correo: "" });
    setOpenDialog(true);
  };

  // Cargar los libros al montar el componente
  useEffect(() => {
    fetchAuthors();
  }, []);

  return (
    <>
      {/* Barra de navegación */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            CRUD de Autores
          </Typography>
          <Button color="inherit" onClick={handleCreate}>
            Crear Autor
          </Button>
        </Toolbar>
      </AppBar>

      {/* Lista de autores */}
      <Box sx={{ padding: 2 }}>
        <List>
          {authors.map((author) => (
            <ListItem key={author.id} sx={{ marginBottom: 2 }}>
              <ListItemText
                primary={author.nombre}
                secondary={author.correo}
                sx={{ color: "#000" }}
              />
              <IconButton color="primary" onClick={() => handleEdit(author)}>
                <EditIcon />
              </IconButton>
              <IconButton color="error" onClick={() => handleDelete(author.id)}>
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
            value={authorData.nombre}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            label="Correo"
            name="correo"
            fullWidth
            value={authorData.correo}
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
    </>
  );
};

export default Authors;
