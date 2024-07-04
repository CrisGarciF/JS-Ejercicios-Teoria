// Funcion setTimeout() -> sirve para ejecutar una funcion despues de un tiempo determinado

setTimeout(function(){
    console.log("Hola soy Cristian")
,500})//se ejecutara despues de 5 segundos

// Ejemplo mas avanzado

// esta es la funcion
function sal(nombre,rol){
    console.log(`Hola,mi nombre es ${nombre}`)
    console.log(`Yo soy ${rol}`)
}
// metodo setTimeout()
setTimeout(sal,3000,"Cristian","Programador")

//Este es un ejemplo del método clearTimeout() en acción:

const timeoutId = setTimeout(function(){
    console.log("Hola Mundo");
}, 2000);

clearTimeout(timeoutId);
console.log(`Tiempo de espera ID ${timeoutId} ha sido limpiado`);