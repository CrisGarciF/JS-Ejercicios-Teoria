// Formas de importar / exportar modulos
// 1. CommonJS - require
// 2. Import ES6 - inport

//const moduloMatematicas = require("./modulos/matematicas.js")
//const factorial = moduloMatematicas.factorial;
//const {factorial , suma} = moduloMatematicas;
//console.log(moduloMatematicas.multiplica)

const {factorial,suma} = require("./modulos/matematicas.js")

const fact = moduloMatematicas.factorial(5)
console.log(fact)

const sum = moduloMatematicas.suma(12,90)
console.log(sum)