import React, { useState } from 'react'
import './App.css'
import MiComponente from './componentes/MiComponente.tsx'
import CompClase from './componentes/1.componente_clase/CompClase.tsx'
import CompFuncion from "./componentes/2.componente_funcion/CompFuncion.jsx"
import Menu from "./componentes/3.Router/Menu.jsx"
import EstilosArchivo from "./componentes/4.estilos/EstilosArchivo.jsx"
import EstilosVariable from "./componentes/4.estilos/EstilosVariable.jsx"
import EstilosLibreria from "./componentes/4.estilos/EstilosLibreria.jsx"
import Libros from './componentes/5.Props/Libros.tsx'
import EjemploAlerta from './componentes/6.children/EjemploAlerta.jsx'
import Listas from './componentes/7.Listas/Listas.jsx'
import RenderizadoCond from './componentes/8.RenderizadoCond/RenderizadoCond.jsx'
import Eventos from "./componentes/9.eventos/Eventos.jsx"
import Estados from "./componentes/10.estados/Estados.jsx"
import Formulario from "./componentes/10.estados/Formulario.jsx"
import Contexto from "./componentes/11.contexto/Contexto.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Context = React.createContext();

function App() {

  const [sesion, setSesion] = useState(true);


  return (
    <>
       <h2>Ejemplos react</h2>
       <hr />
       <BrowserRouter>              
       <Context.Provider value={[sesion, setSesion]}>
          <Menu/>
          <h1>{
             sesion? "sesion activa"  : "sesion inactiva"
            }</h1> 
          <Routes>
            <Route path='/miComponente' element={ <MiComponente/>} />
            <Route path='/compclase' element={
              <>
              <CompClase contenido="hola mundo compclase"/>
              <CompClase contenido="hola mundo compclase 2"/>
              </>
           
          } />
            <Route path='/compfuncion' element={ <CompFuncion contenido="contenido comp funcion"/>} />
            <Route path='/estilos' element={
              <>
              <EstilosArchivo/>
              <EstilosVariable/>
              <EstilosLibreria/>
              </>
              } />
              <Route path='/props' element={ <Libros/>} />
              <Route path='/children' element={ <EjemploAlerta/>} />
              <Route path='/listas' element={ <Listas/>} />
              <Route path='/renderizadocondicional' element={ <RenderizadoCond/>} />
              <Route path='/eventos' element={ <Eventos/>} />
              <Route path='/estados' element={ 
                <>
                <Estados/>
                <Formulario/>
                </>
                } />
                <Route path='/contexto' element={ <Contexto/>} />
          </Routes>         
                
         </Context.Provider>
       </BrowserRouter>
    </>
  )
}

export default App
