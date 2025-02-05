//componente de clase

import { Component } from "react";

interface Propiedades{
  contenido: string
}

class CompClase extends Component{
 constructor(props:Propiedades){
     super(props)
     console.log("componente constructor")
 }

 render(){
  console.log("componente renderizado")
  return(
    <div>
      <h1>{this.props.contenido}</h1>
    </div>
  )
 }

 componentDidMount(): void {
    console.log("componente montado")
 }

 componentDidUpdate(): void {
    console.log("componente actualizado")
 }

 componentWillUnmount(): void {
    console.log("componente desmontado")
 }
}



export default CompClase;