// Funciones generadoras
function* generarId(){
    let id = 0;
    while(true){
        id++
        if(id >10){
            return
        }
        yield id // Esperando hasta que se vuelva a llamar
    }
}

const gen = generarId()

console.log(gen.next())
console.log(gen.next().value)
