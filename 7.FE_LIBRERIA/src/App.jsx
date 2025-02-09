import { useState, useEffect } from "react";
import React from "react";
import Login from "../src/components/login/Login.jsx";
import BookShop from "./components/bookshop/BookShop.jsx";
export const Context = React.createContext();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const sesion = localStorage.getItem("sesion");

  useEffect(() => {
    if (sesion != null) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Context.Provider value={[isAuthenticated, setIsAuthenticated]}>
      {isAuthenticated ? <BookShop /> : <Login />}
    </Context.Provider>
  );
}

export default App;
