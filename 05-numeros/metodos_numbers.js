// Operador  .valueOf( )- obtner valores numericos apartir de literales
let a = 2;
let b = new Number(3);

console.log(a)
console.log(b)
console.log(a + b)
console.log(b.valueOf() + a.valueOf())

console.log(b.valueOf())

let str = new String("hola soy un String")
console.log(str)
console.log(str.valueOf())

// NaN(Not a number) - Infinity
let n = Number('adios')
console.log(n)
console.log(isNaN(n))

let numerador = 19;
let divisor = 0;
console.log( numerador / divisor);

// como convertit los string a valores numericos con number , paserInt y parseFloat
let numero = '5.89';
let num2  = 17.2;
console.log(typeof numero)
console.log(numero + num2)
// sirve para las operaciones de numeros de caracter string 
console.log(Number(numero) + num2);
//parseInt - parseFloat
console.log(parseInt(numero));//parte entera
console.log(parseFloat(numero));//parete decimal

// numeros hexadecimales(base 16)
let numHex = '0x3a5b7';
console.log(parseInt(numHex))

// obtner los valores maximo y minimo en javascript
let min_precision = Number.EPSILON;
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS)