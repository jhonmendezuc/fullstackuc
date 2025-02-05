import React from "react";
import { useState } from "react";

const Estados = () => {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
    console.log("click", contador);
  };

  return (
    <>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Incremento ++
      </button>
      <br />
      <i>{contador}</i>
    </>
  );
};

export default Estados;
