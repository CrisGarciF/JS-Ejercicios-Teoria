// declaracion de variables

var variable;
let variable_let;

// const constante;

// las variables pueden variar su valor o cambiar
var a=1;
console.log(a);

a =4;
console.log(a);

// let
let b = 2;
console.log(b);

b=6;
console.log(b);

//diferencia entre var y lef

// var afecta a todo el codigo 
var variable = "hola mundo";
for (var i=0;i<3;i++){
    var variable ="soy la segunda variable"
}
console.log(variable);

// let solo afecta la parte del codigo donde este definida
let variablelet = "hola soy una variable let";
for (let i=0;i<3;i++){
    let variablelet ="soy la segunda variable"
}
console.log(variablelet);

// sirve para saber que tipo es la variable
console.log(typeof null);