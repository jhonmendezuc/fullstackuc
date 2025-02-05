import styled from "styled-components";

const AlertContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  margin: 10px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  border: 1px solid #000;
`;

const AlertMessage = styled.p`
  font-weight: bold;
`;

const Alerta = ({ tipo, children }) => {
  const alertColor = {
    advertencia: "yellow",
    fallo: "red",
    exito: "green",
  }[tipo];

  return (
    <>
      <AlertContainer style={{ borderColor: alertColor }}>
        <AlertMessage>
          <h2>{tipo}</h2>
          {children}
        </AlertMessage>
      </AlertContainer>
    </>
  );
};

export default Alerta;
