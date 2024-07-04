// metodos de cadenas de textos 2

// para comvertir cadenas de texto de mayuculas a minusculas
let input = "Capricornio"
let db = "capricornio"

// toLowerCase() - toUpperCase()
console.log(input.toLowerCase())//minusculas
console.log(input.toUpperCase())//mayusculas
console.log(input.toLowerCase() === db.toLowerCase())

// Formas de concatenar cadenas de caracteres
let str_1  = "soy la primera."
let str_2 = "y yo soy la segunda"

console.log(str_1.concat(" ",str_2))
console.log(str_1 + " " + str_2)
console.log(`${str_1} ${str_2}`)

// eliminar espacios al inicio y al final de un  texto
let srt_3 = "hola soy un string con espacios.  "
// trim() elimina espacios del principio y final
console.log(srt_3.trim().length)
//solo elimina los espacios del principio
console.log(srt_3.trimStart().length)

// obtener el caracter que hay en sierta posicion

let str_4 = "hola soy el strin numero cuatro"
console.log(str_4.charAt(4))
console.log(str_4[5])

// obtener la pocion de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Cristian y soy lo mejor"
console.log(str_5.indexOf("Cristian"))
// la ultima palabra palabra a nbuscar
console.log(str_5.lastIndexOf("Cristian"))