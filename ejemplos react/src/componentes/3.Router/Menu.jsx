import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/compclase">Componente clase</Link>
          </li>
          <li>
            <Link to="/compfuncion">Componente funcion</Link>
          </li>
          <li>
            <Link to="/estilos">Estilos</Link>
          </li>
          <li>
            <Link to="/props">Props</Link>
          </li>
          <li>
            <Link to="/children">children</Link>
          </li>
          <li>
            <Link to="/listas">Listas</Link>
          </li>
          <li>
            <Link to="/renderizadocondicional">Renderizado condicional</Link>
          </li>
          <li>
            <Link to="/eventos">Eventos</Link>
          </li>
          <li>
            <Link to="/estados">Estados</Link>
          </li>
          <li>
            <Link to="/contexto">Contexto</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </>
  );
};

export default Menu;
