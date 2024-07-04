// Interar los valores de una lista
const array = ["hola",6,4,35,false]

//Forma antigua (poco eficiente)
for (let i = 0; i<array.length;i++){
    console.log(array[i])
}
//Forma ES& (mas efieciente)  .forEach() 
let suma = 0;
const  arrayNUms  = [,2,3,45,7,9,78]
array.forEach(valor =>{
    suma += valor;
    console.log(valor)
})
console.log(suma)

// Busqueda de un valor dentro de una lista .find()
//Quiero encontra el elemneto 35
const variable = array.find(valor =>{
    if (valor === 35){
        return true
    }
})
console.log(variable)

const listaObjetos = [
    { nombre : "Cristian", edad: 19},
    { nombre : "Luis", edad: 60},
    { nombre : "Jefri", edad: 18},
    { nombre : "pepe", edad: 29},
    { nombre : "amaya", edad: 9}
]
//const objeto = listaObjetos.find(o =>{
    //if(o.nombre === "pepe"){
   //     return true
 //   }
//})
//console.log(objeto)

const objeto = listaObjetos.find(o =>o.nombre === "pepe")
console.log(objeto.edad)

const {edad} = listaObjetos.find(o =>o.nombre === "amaya")
console.log(edad)

// ejercicio
const futbol = [
    {nombre:"messi", goles: 2000},
    {nombre:"carlos", goles: 280},
    {nombre:"romario", goles: 200},
    {nombre:"pedro", goles: 1000}
]
const balon = futbol.find(m =>m.nombre ==="messi")
console.log(balon.goles)


