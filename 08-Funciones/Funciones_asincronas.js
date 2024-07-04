// Funciones asincronas y promesas

function miAsinc(){
    // Hace una llamada a una base de datos externa
    // Puede darnos algun error
}

const miPromesa = new Promise((resolve,reject)=>{
    const i = Math.floor(Math.random() * 2)
    // si esta todo correcto
    if(i !== 0){
        resolve()
    }else{
        reject()
    }
})

miPromesa
    .then(()=>console.log("se ha ejecutado de forma correcta"))
    .catch(()=>console.log("ERROOR"))
    .finally(()=> console.log("yo me ejecuto siempre"))