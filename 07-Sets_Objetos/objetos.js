// Trabajando con objetos
const obj ={
    id:4,
    nombre:"juan",
    apellido:"Gonzales",
    isDeveloper: true,
    libros_favoritos:["el metodo","el codigo de la manifestacion"],
    "4-juegos":[1,2,3,4]
}

console.log(obj.id)
console.log(obj["4-juegos"])

const prop = "isDeveloper"
console.log(obj[prop])

const obj2 = obj;
console.log(obj2)


obj2.nombre = "Cristian"
console.log(obj2.nombre)

console.log(obj.nombre)

////////
/// como ordenar listas de objetos en funcion de una propiedad

const listaPelicualas = [
    { titulo: "lo que el viento se llevo", anyo : 1939,},
    {titulo:"titanic", anyo:1997},
    {titulo:"moana",anyo:2016,},
    {titulo:"el efecto mariposa", anyo:2004}
]
console.log(listaPelicualas)
// .sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL
listaPelicualas.sort((a,b)=>a.anyo - b.anyo)
console.log(listaPelicualas)

listaPelicualas.sort((a,b)=>a.titulo - b.titulo)
console.log(listaPelicualas)