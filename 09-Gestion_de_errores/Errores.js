const miFUncion = val =>{
    if (typeof val === "number"){
    return 2 * val
}
//return false
throw new Error("El valor tiene que ser tipo numero")
}
//const elDoble = miFUncion(2)
const numero = 8
try{
    // Codigo que pede fallar
    console.log("Se esta ejecutando de manera correcta")
    const elDoble = miFUncion(numero)
    console.log(elDoble)
}catch(e){
    // En caso de fallar, quieros que te ejecutes
    console.error(e)
    console.error("Error")
}finally{
    console.log("esto se va ejecutar tanto si se produce un error ,como si no existe ninguno")
}

//InternalError , SyntaxError, TypeError, RangeError y ReferenceError