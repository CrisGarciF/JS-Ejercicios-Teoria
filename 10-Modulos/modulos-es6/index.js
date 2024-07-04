// importar modulos modernos cons ES6
import {suma , eleva,nombre} from "./modulos/matematicas.js"
//Importar todos los elementos
import * as moduloMatematicas from "./modulos/matematicas.js"
// otra forma de importar
import getAutor, {libro} from "./modulos/literatura.js"


const sum = moduloMatematicas.suma(4,12)
console.log(sum)

const potencia = moduloMatematicas.eleva(2,21)
console.log(potencia)

console.log(moduloMatematicas.nombre)


console.log(getAutor())

console.log(libro)