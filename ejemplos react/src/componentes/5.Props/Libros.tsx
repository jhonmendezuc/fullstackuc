import Libro from "./Libro.ts";
import LibroCpm from "./LibroCpm.tsx";

const libros: Libro [] =[
  {
    id:1,
    titulo:"El señor de los anillos",
    autor:"J.R.R. Tolkien"
  },
  {
    id:2,
    titulo:"El señor de los anillos 2",
    autor:"J.R.R. Tolkien"
  },
  {
    id:3,
    titulo:"El señor de los anillos 3",
    autor:"J.R.R. Tolkien"
  },
  {
    id:4,
    titulo:"El señor de los anillos 4",
    autor:"J.R.R. Tolkien"
  },
  {
    id:5,
    titulo:"El señor de los anillos 5",
    autor:"J.R.R. Tolkien"
  }
]

const Libros = ()=>{
   return (
    <>
     {
      libros.map((libro)=>{
        return (
          <LibroCpm key={libro.id} titulo={libro.titulo} autor={libro.autor}/>
        )
      })
     }
    </>
   )
}

export default Libros