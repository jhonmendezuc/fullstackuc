//condicionales: if, else, switch, ternario

let edad = 25;

if (edad >= 18) {
  console.log("es mayor de edad");
} else {
  console.log("es menor de edad");
}
console.log("fin del programa");

let precio_naranja = 6;
let descuento = 0.2;
if (precio_naranja > 10) {
  let precio_final = precio_naranja - precio_naranja * descuento;
  console.log(precio_final);
} else {
  if (precio_naranja > 5) {
    let precio_final = precio_naranja - precio_naranja * 0.1;
    console.log(precio_final);
  } else {
    console.log(precio_naranja);
  }
}

//switch
let dia_semana = "martes";
switch (dia_semana) {
  case "lunes":
    console.log("hoy es lunes");
    break;
  case "martes":
    console.log("hoy es martes");
    break;
  case "miercoles":
    console.log("hoy es miercoles");
    break;
  case "jueves":
    console.log("hoy es jueves");
    break;
  case "viernes":
    console.log("hoy es viernes");
    break;
  default:
    console.log("no es un dia de la semana de lunes a viernes");
}

//operador ternario
let pensionado = false;
let es_pensionado = pensionado ? "es pensionado" : "no es pensionado";
console.log(es_pensionado);
