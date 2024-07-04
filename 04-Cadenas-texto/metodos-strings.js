// metodos mas utilizados 

// obtener la longitud de un string
let str = " hola soy un string";
console.log(str.length)

//obtener partes de cadenas de caracteres 

// slice()  substring()  substr()
let slice_str = str.slice(0,10)
console.log(slice_str)

let substring_str = str.substring(5,10)
console.log(substring_str)

let substr_str = str.substr(5,10)
console.log(substr_str)

// Remplazar parte del contenido de una cadena de texto
let cadena = "hola mi nombre es cristian"
console.log(cadena)
// replace sirve para remplazar
console.log(cadena.replace('cristian','Luffy'))  

let texto_largo = "la Copa Mundial de Fútbol de la FIFA Catar 2022 es la vigésimo segunda edición de la Copa Mundial de Fútbol masculino organizada por la FIFA."
// al utilizar la exprecion regular /g (global) remplaza todas las instancias
console.log(texto_largo.replace(/la/g, 'los'))

