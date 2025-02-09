import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Box,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const NavBar = () => {
  // Estado para manejar los menús
  const [anchorElBooks, setAnchorElBooks] = React.useState(null);
  const [anchorElAuthors, setAnchorElAuthors] = React.useState(null);

  // Funciones para abrir y cerrar los menús
  const handleBooksMenuClick = (event) => {
    setAnchorElBooks(event.currentTarget);
  };

  const handleAuthorsMenuClick = (event) => {
    setAnchorElAuthors(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElBooks(null);
    setAnchorElAuthors(null);
  };

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    console.log("Cerrar sesión");
    // Lógica para cerrar sesión
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Book SHOP
        </Typography>

        {/* Menú de Libros */}
        <Box sx={{ marginRight: 2 }}>
          <Button
            component={Link}
            to="/books"
            color="inherit"
            onClick={handleBooksMenuClick}
          >
            Libros
          </Button>
        </Box>

        {/* Menú de Autores */}
        <Box sx={{ marginRight: 2 }}>
          <Button
            component={Link}
            to="/authors"
            color="inherit"
            onClick={handleAuthorsMenuClick}
          >
            Autores
          </Button>
        </Box>

        {/* Botón de Cerrar Sesión */}
        <IconButton color="inherit" onClick={handleLogout}>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
