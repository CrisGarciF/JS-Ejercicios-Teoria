// Metodos de cadenas de texto
//https://regexr.com

let texto_largo = "la Liga de Campeones de la UEFA, también conocida como Copa de Europa, es el torneo internacional oficial de fútbol más prestigioso a nivel de clubes en Europa."

console.log(texto_largo.match(/la/g))

// pa buscar la palabra en un texto
console.log(texto_largo.includes("Liga"))
//saber si un texto empiexa con una palabra 
console.log(texto_largo.startsWith("la Liga de"))
// saber si una palabra termina en otra palabra
console.log(texto_largo.endsWith("Europa"))