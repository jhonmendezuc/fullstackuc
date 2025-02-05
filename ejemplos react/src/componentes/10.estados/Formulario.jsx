import { useState, useEffect } from "react";

const Formulario = () => {
  const [Frm, setFrm] = useState({
    nombre: "",
    apellido: "",
    edad: "",
  });

  const [contador, setContador] = useState(0);

  const handleSubmit = () => {
    console.log(Frm);
  };

  useEffect(() => {
    console.log("cambio");
    console.log(Frm);
  }, [Frm]);

  return (
    <>
      <br />
      <input
        value={Frm.nombre}
        onChange={(e) => {
          setFrm((prev) => {
            return { ...prev, nombre: e.target.value };
          });
        }}
        type="text"
        placeholder="nombre"
      />
      <input
        value={Frm.apellido}
        onChange={(e) => {
          setFrm(() => {
            return { ...Frm, apellido: e.target.value };
          });
        }}
        type="text"
        placeholder="apellido"
      />
      <input
        value={Frm.edad}
        onChange={(e) => {
          setFrm((prev) => {
            return { ...prev, edad: e.target.value };
          });
        }}
        type="text"
        placeholder="edad"
      />
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Enviar datos
      </button>
      <br />
      <button
        onClick={() => {
          setContador((prev) => prev + 1);
        }}
      >
        Incrementar
      </button>
      <h2>{contador}</h2>
    </>
  );
};

export default Formulario;
