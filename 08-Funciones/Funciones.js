// son las funciones , como se declaran y como se utilizan
const nom = "Cristian"

saludar(nom)

function saludar(nombre){
    console.log(`hola ${nombre}`)
}

////

let nombre2 = "Pedro"
despedir(nombre2)

function despedir(nombre){
    console.log(`adios ${nombre}`)
}

///
let persona = {nombre:"juan", apellido:"Gonzales"}

saludarPersona(persona)

function saludarPersona(objeto){
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

/////////
function ImprimirNumero(numero = 7){//Parametros por defecto
    console.log(numero)
}
ImprimirNumero()

///////

function imprimir(...parametros){
    console.log(parametros)
}
imprimir(1,3,9,2,"hola",{id:9})


////////
function suma (...nums){
    return(nums.reduce((a,b)=> a + b))
}
const s = suma(1,2,3,4,15)
console.log(s)

////////
function multiplicar(a = 0,b = 0){
    
    return a * b
}
console.log(multiplicar(4,9))


/// Ejercicio practico
let nombre = prompt("ingrese su nombre")

saluda(nombre)

function saluda(obj){
    console.log(`Buenos dias ${nombre}`)
}
