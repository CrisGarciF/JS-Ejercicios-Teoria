const persona = {
    nombre : "Cristian",
    edad: 19,
    isDeveloper:true,
    saludo: function(){
        console.log("Hello")
    }
}

//console.log(persona)
persona.saludo()

const otra_persona={
    nombre:"miguel",
    edad:15,
    isDeveloper:false,
    saludo:function(){
        console.log("Hello")
    }
}

otra_persona.saludo()

// Funcion factory
const creaPersona = (nombre,edad,isDeveloper)=>{
    return{
        nombre, //nombre:nombre,
        edad,
        isDeveloper,
        saludo:function(){
            console.log('hello')
        }
    }
}

const nueva_persona = creaPersona("juan",23,true)
console.log(nueva_persona)

const nueva_persona2 = creaPersona("Maria",35,false)
console.log(nueva_persona2)