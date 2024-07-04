const persona = {
    nombre : "Cristian",
    edad : 34
}

console.log(persona)

function obtenDobleEdad(edad){
    return 2 * edad
}

const dobleEdad = obtenDobleEdad(persona.edad)

console.log(dobleEdad)

function obten(edad){
    let arraynums = []

for (let i =0; i < 10 ; i++){
    const numero = edad + i
    console.log(numero)
    arraynums = {...arraynums,numero}
}
    return arraynums
}

const array = obten(persona.edad)

console.log(array)