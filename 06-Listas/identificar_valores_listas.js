// . some()
const array = [4,55,23,5,-4,67,89,456]
const rest = array (valor => valor < -0)
console.log(rest)

const existe = array.some(valor => valor === 9)
console.log(existe)

const futbol = [
    {nombre:"messi", goles: 2000},
    {nombre:"carlos", goles: 280},
    {nombre:"romario", goles: 200},
    {nombre:"pedro", goles: 1000}
]
const existegol = futbol.some(persona = persona.nombre === "messi")
console.log(existegol)

// como obtmer una lista apartir de un objeto interable
const str = "hola soy cristian"
const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([2,3,"hola",4])
const ar_set = Array.from(set)
console.log(ar_set)

/// metodo .keys()
const keys = array.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)