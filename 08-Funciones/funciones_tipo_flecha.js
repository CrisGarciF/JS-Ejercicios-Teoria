/// Funciones tipo flecha - funciones anoonimas

// el array2 multiplica el array por 2
const array = [1,2,3,4,5,6,7]

const array2 = array.map((valor)=> valor *2)
console.log(array2)


//const doblevalor = valor =>{
//    return valor * 2
//}
const doblevalo = valor => valor * 2;

console.log(doblevalo(6))

const array3 = array.map(doblevalo)
console.log(array3)

function doble(valor){
    return valor * 2
}

console.log(doble(6))