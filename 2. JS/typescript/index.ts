//clases
class Persona{
  nombre: string;
  edad:number

  constructor(nombre:string,edad:number){
     this.nombre = nombre;
     this.edad = edad;
  }

  saludar():void{
 console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
  }
}

const persona1 = new Persona("Juan", 30);
console.log(persona1)
persona1.saludar(); 

//interfaces
interface Animal{
  nombre:string;
  edad: number;
  sonido():void;
}

const perro:Animal ={
  nombre:"Max",
  edad: 3,
  sonido: function():void{
    console.log("Guau guau")
  } 
}

perro.sonido()
console.log(perro)

type Producto = {
  nombre:string;
  precio:number;
  stock:number;
}

const computador:Producto = {
  nombre:"Computador",
  precio: 1000,
  stock: 10
}

console.log(computador)

//enumeradores

enum Colores{
  Rojo = "rojo",
  Verde = "verde",
  Azul = "azul"
}

const color:Colores = Colores.Rojo;
console.log(color)

enum Direccion{
  Norte,
  Sur,
  Este,
  Oeste
}

function mover(direccion:Direccion):void{
 console.log(`Moviendo hacia ${Direccion[direccion]}`)
  
}

mover(Direccion.Oeste)
mover(Direccion.Sur)


let numeros: number[] = [1,2,3,4,6]
console.log(numeros)
let nombres: string[] = ["Juan", "Pedro", "Maria"]
console.log(nombres)

numeros.forEach((numero:number)=>{
  console.log(numero)
})