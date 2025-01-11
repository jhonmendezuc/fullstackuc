//DOM -- DOCUMENT OBJECT MODEL
//consulta por id
const titulo_id = document.getElementById("titulo");
console.log(titulo);

//consulta por tagname
let titulo_elemento = document.getElementsByTagName("h1");
console.log(titulo_elemento);

//consultar por query
let titulo_query = document.querySelector("#titulo");
console.log(titulo_query);

//consultar por clase
let parrafos = document.getElementsByClassName("parrafos");
console.log(parrafos);

//modificar el DOM
titulo_id.innerHTML = "<h2>Esto es un nuevo titulo desde js</h2>";
titulo_id.textContent = "Esto es un nuevo titulo desde js";

//agregar elemento a la clase
titulo_query.style.color = "red";
titulo_query.style.fontSize = "50px";

let mi_parrafo = document.querySelector("#mi-parrafo");
mi_parrafo.classList.add("parrafos");

//crear nuevos elementos
let nuevo_parrafo = document.createElement("p");
nuevo_parrafo.textContent = "esto es un nuevo parrafo";
document.body.appendChild(nuevo_parrafo);

titulo_id.remove();

const boton = document.getElementById("clic");
boton.addEventListener("click", () => {
  parrafos[0].remove();
  titulo_elemento[0].style.color = "red";
});
