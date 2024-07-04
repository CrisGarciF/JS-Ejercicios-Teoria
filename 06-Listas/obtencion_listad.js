// Como obtner un lista a partir de otra .slice()
const array = ["hola",1,2,3,true,null,"adios"] 

// NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
console.log(array.slice(3))
console.log(array.slice(1 , 5))
const array2 = array.slice(2,5)
console.log(array2)

const array3 = array.slice(2,-2)
console.log(array3)