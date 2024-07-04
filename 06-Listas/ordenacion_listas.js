// .sort() -> MODIFICA EL ARRAY
const array = [2,5,9,15,1,2,0,4]


console.log(array)

array.sort((a,b)=>{
    if (a > b){
        return -1
    }else if (a>b){
        return +1
    }else{
        return 0
    }
})
// Ordenar unicamente arrays numericos
const arrayNumericos = [50,45,20,36,1,5365,5]

arrayNumericos.sort((a,b)=> b - a)
console.log(arrayNumericos)

// Interesante en un arrays de onjetos
//organisar lista de objetos
const futbol = [
    {nombre:"messi", goles: 2900},
    {nombre:"carlos", goles: 280},
    {nombre:"romario", goles: 200},
    {nombre:"pedro", goles: 1000}
]
futbol.sort((a,b)=>{
    if (a.goles < b.goles){
        return -1
    }else if(a.goles > b.goles){
        return +1
    }else{
        return 0
    }
})
console.log(futbol)
// otra forma de organizar una lista de objetos
futbol.sort((a,b)=> a.goles - b.goles)
console.log(futbol)

//ejemplo de organizacion de lista 
const clientes = [ 
    {nombre:"camilo", dinero:3.1},
    {nombre:"natalia", dinero:8.8},
    {nombre:"tomas", dinero:5.1},
    {nombre:"camila", dinero:2.1}
]
clientes.sort((a,b)=>{
    if(a.dinero > b.dinero){
        return - 1    
    }else if(a.dinero < b.dinero){
        return + 1
    }else{
        return 0
    }
})
console.log(clientes)