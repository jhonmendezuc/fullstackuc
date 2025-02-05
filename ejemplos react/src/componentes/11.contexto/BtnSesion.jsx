import { useContext } from "react";
import { Context } from "../../App.tsx";

const BtnSesion = () => {
  const [sesion, setSesion] = useContext(Context);

  const handleSesion = () => {
    setSesion(!sesion);
  };

  return (
    <>
      <button onClick={handleSesion}>
        {sesion ? "cerrar sesion" : "iniciar sesion"}
      </button>
    </>
  );
};

export default BtnSesion;
