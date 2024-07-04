const boton = document.querySelector("#btn")

//console.log(boton)

boton.addEventListener("click",()=>{
    //alert("se a echo click")
    //confirm("Estas de acuerdo") && console.log("OK")
    // confirm("Estas de acuerdo") 
    //? console.log("OK") 
    //: console.log("No!!!")
    const respuesta = confirm("¿Seguro?")
    if(respuesta){
       onsole.log("estas de acuerdo")
    }else{
        console.log("No estas de acuerdo")
   }
})

const botoninfo =  document.querySelector("#info")
botoninfo.addEventListener("click",()=>{
   const nombre = prompt("¿Cual es tu nombre?")
   if(nombre){
    console.log("Tu nombre es: "+nombre)
   }else{
    console.log("No has introduciodo ningun Nombre")
   }
})

const lista = [{
    nombre: "Cristian",
    edad: 19
},{
    nombre:"Luis",
    edad:58
},{
    nombre:"Pedro",
    edad:25
}]
//console.log(lista)
console.table(lista)