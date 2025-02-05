const RenderizadoCond = () => {
  const sesion = false;

  if (sesion == true) {
    return <h3>sesion iniciada</h3>;
  } else {
    return <h3>sesion no iniciada</h3>;
  }

  /*/
  return (
    <>
      <h1>Renderizado Condicional</h1>
      {sesion ? <h3>sesion iniciada</h3> : <h3>sesion no iniciada</h3>}
    </>
  );*/
};

export default RenderizadoCond;
