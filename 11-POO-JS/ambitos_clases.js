class Persona {
    //clases privadas ( Private -> # )
    // Private -> solo se puede acceder desde desntro de la clase
    #nombre
    #edad
   // #obtenEdad

    // clases protegidas (Protected -> _ )
    // Protected -> Solo se puede acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true
    
    constructor(nom,edad){
        this.#nombre = nom
        this.#edad = edad
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this.nombre} tengo ${this.edad} años`)
    }

    obtenNombre(){ // Funcion getter -> nos permite acceder(de forma controlada) a alguno atributo protegido
        return this.#nombre
    }
    #obtenEdad(){
        return this.#edad
    }
    getEdad(){
        return this.#edad
    }
    setEdad(nuevaedad){
        this.#edad = nuevaedad
    }
}

const  persona = new Persona("cristian",70)
//console.log(persona)
//console.log(persona.nombre)
//persona.saludo()

//console.log(persona.obtenNombre())
//console.log(persona.#obtenEdad())
//console.log(persona._isDeveloper)


/////////////////
// Getter -> metodos que nos permiten obtner atributos/ metodos privados o protegidos
const edad = persona.getEdad()
console.log(edad)

// Setter -> metodos que nos permiten cambiar el valor de algunos atributos privados o protegidos
// Quiero cambiar la edad de la persona
persona.setEdad(14)
console.log(persona.getEdad())