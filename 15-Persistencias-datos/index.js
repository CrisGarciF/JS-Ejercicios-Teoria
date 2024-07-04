/// localStorage

//localStorage.setItem("nombre","Cristian")
//localStorage.setItem("nombre","Luis")

console.log(localStorage.getItem("nombre"))

localStorage.setItem("persona",JSON.stringify({nombre:"Cristian",edad:19}))

console.log(JSON.parse(localStorage.getItem("persona")))

//JSON.stringify -> Convierte un objeto/array en string
//JSON.parse  -> Convierte un objeto/array convertio a traves de stringify en un objeto de javascrip

localStorage.removeItem("nombre")

///// sessionStorage

sessionStorage.setItem("nombre-sesion","Cristian")

/*  Cookies */

document.cookie = "nombrecokie=Cristian"

document.cookie = "caducidad=Nombre;expires=" + new Date(2023,0,1).toUTCString()

console.log(document.cookie)