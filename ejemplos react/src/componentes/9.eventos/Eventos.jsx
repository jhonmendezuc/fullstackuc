import BtnSesion from "../11.contexto/BtnSesion";

const listaPersonas = [
  {
    id: 1,
    nombre: "jhon",
  },
  {
    id: 2,
    nombre: "juan",
  },
  {
    id: 3,
    nombre: "pedro",
  },
  {
    id: 4,
    nombre: "maria",
  },
];

let contador = 0;
const handleClick = (persona) => {
  console.log("click", persona.nombre);
};

const handleKey = () => {
  contador = contador + 1;
  console.log("key...", contador);
};
const Eventos = () => {
  return (
    <>
      <ul>
        {listaPersonas.map((persona) => {
          return (
            <li
              onClick={() => {
                handleClick(persona);
              }}
            >
              {persona.nombre}
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        onKeyUp={() => {
          handleKey();
        }}
      />
      <BtnSesion />
    </>
  );
};

export default Eventos;
