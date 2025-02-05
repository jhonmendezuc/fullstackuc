const numeros = ["uno", "dos", "tres"];
const personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "María", edad: 30 },
  { nombre: "Pedro", edad: 28 },
];
const Listas = () => {
  return (
    <>
      <ul>
        {numeros.map((numero, index) => {
          return <li key={index}>{numero}</li>;
        })}
      </ul>
      <ul>
        {personas.map((persona, index) => {
          return (
            <li key={index}>
              {persona.nombre} - {persona.edad}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Listas;
