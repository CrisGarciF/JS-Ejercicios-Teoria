// listas,array o arreglo

const lista = [1,"hola",true,undefined,null];
const lista2 = new Array(1,"hola",true,undefined,null);
const lista3 = new Array(3);
lista3[0] = "soy el primer elemento";
const lista4 = [lista,lista2,lista3]

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//objetos
const movil = {
    altura:10,
    anchura: 5,
    marca:"Xiami",
    isWhite: false,
    tarjeta: {
        marca :"sandik",
        almacenamiento: 32
    },
    "altura-tarjeta":4
}
movil.anyo=2019;
movil.marca="samsung"
console.log(movil.anyo)

//Fechas
//librerias de apoyo para fechas moment.js

// fecha de la hora de la creacion de la variable
  const ahora = new Date()
  console.log(ahora)

  //utilizando los minisegundos
  const fecha_milis = new Date(10)
  console.log(fecha_milis)

  // fecha programada 
  const fecha_cadena = new Date("march 25 2023");
  console.log(fecha_cadena)

  //fecha del dia,mes,año
  const dia = ahora.getDat()
  const mes = ahora.getMonth()+1
  const anis = ahora.getFullYear()

  console.log(dia,mes,anis)