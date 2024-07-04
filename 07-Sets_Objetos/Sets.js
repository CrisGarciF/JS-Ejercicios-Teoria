// Sets o conjuntos (En Español)
const array = [1,2,3,4,5,{id:5},"hola"]

const miSet = new Set(array)

console.log(array)
console.log(miSet)

// .add() -> para añadir valores al conjunto

miSet.add(9)
console.log(miSet)
miSet.add(4)
console.log(miSet)

// .delete -> para eliminar un valor del conjunto

miSet.delete(5)
console.log(miSet)

// .clear() -> para eliminar todo el conjunto
miSet.clear()
console.log(miSet)

//.has() -> sirve para buscan un valor en conjunto
console.log(miSet.has(4))

// .size -> sirve para saver los valores unicos de un conjunto
console.log(miSet.size)

miSet.forEach(valor =>{
    console.log(valor)
})

const in_miset = miSet.values()
console.log(in_miset)

const ar_miset = [...miSet]
console.log(ar_miset[1])