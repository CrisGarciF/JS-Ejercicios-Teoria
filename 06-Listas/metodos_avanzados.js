// Trabajr con metodos mas avanzados
// .map()  .filter() .reduce()

const array = ["san sebastian","Madrid","sevilla","bilbao","london"]

array.forEach(v =>{
    console.log(v)
})
// metodo .map()
const newarray = array.map((valor , indice) => `${indice +1} - ${valor}`)
console.log(newarray)


//metodo.filter()
const futbol = [
    {nombre:"messi", goles: 2000},
    {nombre:"carlos", goles: 280},
    {nombre:"romario", goles: 200},
    {nombre:"pedro", goles: 1000}
]

//una posible opcion
//const futbolistas = futbol.filter(obj =>{
   // if (obj.goles >250){
     //   return true
    //}else{
   //     return false
 //   }
//})

//opcion mas sensilla
const futbolistas = futbol.filter(obj =>obj.goles>280)
console.log(futbolistas)
//opcion para buscar todos menos a uno
const futbolis = futbol.filter(obj =>obj.nombre !=="romario")
console.log(futbolis)

// Metodo reduce()

const valores = [ 3,4,52,35,69,14,100]
const suma = valores.reduce((acomulado,i,arrayOriginal)=>{
    console.log(acomulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acomulado + cur
})
console.log(suma)