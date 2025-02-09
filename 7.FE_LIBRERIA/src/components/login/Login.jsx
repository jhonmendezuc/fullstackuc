import { useState, useEffect, useContext } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import axios from "axios";
import { Context } from "../../App.jsx";
import config from "../../config.js";

const loginUrl = config.apiUrl + "usuario/login";
const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useContext(Context);
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        loginUrl,
        {
          correo,
          contrasena,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.token) {
        setIsAuthenticated(true);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("sesion", true);
      } else {
        setError("Credenciales incorrectas");
      }
    } catch (error) {
      setError("Un error a ocurrido " + error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h4" align="center" gutterBottom>
          Iniciar Sesión
        </Typography>
        {error && (
          <Typography variant="body1" color="error" align="center">
            {error}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Ingresar
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
