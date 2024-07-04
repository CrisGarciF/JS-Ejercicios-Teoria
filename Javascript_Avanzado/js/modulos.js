import saludar,{PI , Saludar, usuario} from "./constantes.js"
import { arimetica as calculos} from "./aritmetica.js";

console.log("Archivo modulos.js");

console.log(PI,usuario);
console.log(calculos.sumar(3,4));
console.log(calculos.restar(3,4));
console.log(calculos.multi(3,4));
saludar()
let saludo = new Saludar()
saludo