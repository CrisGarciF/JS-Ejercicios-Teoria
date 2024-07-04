class Persona {
    nombre;
    edad;
    isDeveloper;
    constructor(nombre,edad,isDeveloper){
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre} tengo ${this.edad} años y soy desarrollador ${this.isDeveloper}`)
    }
}

const nueva_persona = new Persona("Pedro",38,true)
console.log(nueva_persona)

nueva_persona.saludo()

let numero = 60 // Inicializar es para variables
console.log(typeof numero)
let Persona2 = new Persona("Maria",34,false)//instanciar 
console.log(typeof Persona2)
// instanceof -> similar a typeof pero para clases
console.log(Persona2 instanceof Persona)