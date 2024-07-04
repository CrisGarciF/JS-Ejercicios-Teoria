// bucles For

for (let i = 0 ; i<10 ; i++){
    console.log(i)
}

let lista = [1,4,3,5,7,9,11];
for(let i = 0; i < lista.length;i++){
    console.log(lista[i]*2)
} 
// estructura for of
for (let valor of lista) {
    console.log(valor)
}

//estructura forEach
lista.forEach(valor =>{
    console.log(valor)
})


//estructura for in
let persona = {
    nombre : "cristian",
    apellido:"garcia",
    edad: 19,
    isDeveloper: true
}
for(let propiedad in persona){
    console.log(propiedad)
    console.log(persona)
}


// bucles while

let i= 0;
let max = 10;
while (i < max){
    console.log(i);
    i++;
}

// do .. while

i= 0;
do{
    console.log("estoy en do while")
}while (i < max)
