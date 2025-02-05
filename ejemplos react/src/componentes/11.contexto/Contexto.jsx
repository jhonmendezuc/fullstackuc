import { useContext } from "react";
import { Context } from "../../App.tsx";
import BtnSesion from "./BtnSesion";

const Contexto = () => {
  const [sesion] = useContext(Context);

  return (
    <>
      <h1>contexto</h1>
      <h3>{sesion ? "sesion iniciada" : "sesion no iniciada"}</h3>
      <BtnSesion />
    </>
  );
};

export default Contexto;
