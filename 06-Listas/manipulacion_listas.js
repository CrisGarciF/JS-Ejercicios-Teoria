// Como trabajar con listas (arrays , arreglos , vectores ...)
let var1 = 45
let array = [1,2,3,4,5,6,"hola",false,{id : 5}, var1]
console.log(array)

// acceder a los valores de un array a traves de su posiscion
// array[indice] => 0,1,2,3,4,5
console.log( array[0])
console.log( array[1])
console.log( array[2])
console.log( array[3])

//METODOS PAR INTRODUCIR NUEVOS VALORES
// .push()  .unshift() => mutan el valor de nuestro valor
// valores al final -> push
array.push("final",52,39,47)
console.log(array)

//valores al principio -> unshift
array.unshift("inicio",55,10)
console.log(array)

// Metodos para eliminar valores en nuestros arrays
// .pop() .shift() => mutan el valor del array
const array2 = [1,2,3,"hola",false]
// valores al final -> pop
array2.pop()
console.log(array2)
// valores al inicio - > shift
array2.shift()
console.log(array2)

// Metodo par elimoinar , modificar o añadir valores en nuestro array
// .splice( x ,y ,z)

const array3 = [1,2,3,4,5,6]

//eliminar valores ( indice , numValoresEliminar)
array3.splice(2,1)
console.log(array3)

// añadir valores .splice(indice , 0 , valores)
array3.splice(2,0,"hola")
console.log(array3)

//modificar valores .splice (indice , 1 , valores)
array3.splice(2 , 1 , 3)
console.log(array3)
