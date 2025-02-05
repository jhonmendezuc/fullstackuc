import Alerta from "./Alerta.jsx";

const EjemploAlerta = () => {
  return (
    <>
      <Alerta tipo="advertencia">
        <strong>
          <p>el archivo puede estar dañado</p>
        </strong>
      </Alerta>
      <Alerta tipo="fallo">
        <p>el archivo no se pudo subir</p>
        <li>intente nuevamente</li>
      </Alerta>
      <Alerta tipo="exito">
        <p>el archivo se subio correctamente</p>
      </Alerta>
    </>
  );
};

export default EjemploAlerta;
