// como podemos compara listas
// .every()

const array = [4,6,7,8,3,6,2,1,-4,-9,-78]
const result = array.every(valor=>{
    if(typeof valor === "number"){
        return true
    }else{
        return false
    }
})
//otra forma 
const resultado = array.every(valor =>valor >0)

console.log(result)

// comparacion de listas
const arr1 = [1,2,3,4,5]
const arr2 = [1,2,3,4,5]

console.log(arr1 === arr2)

const comparaArrays = (array1,array2)=>{
    if(array1.length !== array2.length) return false
    const res =  arr1.every((valor,i) => valor === array2[i])
    return res
}
console.log(comparaArrays(arr1,arr2))

const arr3 = [1,4,3,8]

console.log(comparaArrays(arr1,arr3))