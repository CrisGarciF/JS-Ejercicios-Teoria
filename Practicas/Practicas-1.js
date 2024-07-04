//Pide la edad y si es mayor de 18 años indica que ya puede conducir.
const edad = prompt("¿Cual es tu edad?")
if(edad > 18){
    console.log("puedes conducir")
}if(edad < 18){
    console.log("no puedes conducir eres menor de edad")
}

//Pide una nota (número). Muestra la calificación según la nota:

let notas = prompt("ingrese su nota")

if(notas < 3){
    console.log("Muy deficiente")
}else if(notas >= 3 && notas < 5 ){
    console.log("insuficiente")
}else if(notas >= 5 && notas < 6){
    console.log("Suficiente")
}else if(notas >= 6 && notas < 7 ){
    console.log("Bien")
}else if(notas >=7 && notas <9){
    console.log("Notable")
}else if(notas >= 9 && notas <10){
    console.log("Sobresaliente")
}else{
    console.log("Ingresa una nota de 1 a 10 no se admiten letras")
}

//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let cadena = ""

do{
    let textos = prompt("Ingrse una cadena")
    if(cadena ==""){
        cadena =cadena+textos
    }else{
        cadena=cadena+"-"+textos
    }
}while(confirm("deseas continuar?"))
console.log(cadena)

//Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0

do{
    let numeros = prompt("Ingrese un numero")
    if(Number(numeros)==numeros){
        numeros=Number(numeros)
        suma=suma+numeros
    }
}while(confirm("desea continuar"))
console.log(suma)

///
var resto = 0;
var letra = "";
do {
    var numero = prompt("Introduce tu dni");
    if (Number(numero) == numero) {
        numero = Number(numero);     
        if (numero >= 0 && numero <= 9999999999) {
            resto = numero % 23;
            switch (resto) {
                case 0:
                    letra = "T";
                    break;
                case 1:
                    letra = "R";
                    break;
                case 2:
                    letra = "W";
                    break;
                case 3:
                    letra = "A";
                    break;
                case 4:
                    letra = "G";
                    break;
                case 5:
                    letra = "M";
                    break;
                case 6:
                    letra = "Y";
                    break;
                case 7:
                    letra = "F";
                    break;
                case 8:
                    letra = "P";
                    break;
                case 9:
                    letra = "D";
                    break;
                case 10:
                    letra = "X";
                    break;
                case 11:
                    letra = "B";
                    break;
                case 12:
                    letra = "N";
                    break;
                case 13:
                    letra = "J";
                    break;
                case 14:
                    letra = "Z";
                    break;
                case 15:
                    letra = "S";
                    break;
                case 16:
                    letra = "Q";
                    break;
                case 17:
                    letra = "V";
                    break;
                case 18:
                    letra = "H";
                    break;
                case 19:
                    letra = "L";
                    break;
                case 20:
                    letra = "C";
                    break;
                case 21:
                    letra = "K";
                    break;
                case 22:
                    letra = "E";
                    break;
                default:
                    alert("Numero erroneo");
                }
            }
            alert("Numero: " + numero + ", Letra: " + letra);
        }  else {
            if (numero != undefined) {
                alert(numero + " No es un numero");
            }
        }} while (numero != undefined);