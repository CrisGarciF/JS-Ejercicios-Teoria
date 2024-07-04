//Bifurcaciones if else y switch


//if else
let saldo = 50;
let efectivo =20;

if(efectivo < saldo){
    console.log("puedes sacar dinero")
}else{
    console.log("no puedes sacar dinero")
}

//if else + if else
 let nota = 5;
 if (nota === 5){
    console.log("en hora buena")
 } else if(nota === 4){
    console.log("buen trabajo pero se puede mejorar")
 } else if (nota ===3){
    console.log("ganas muy raspado")
 }else if (nota ===2){
    console.log("por poco ganas")
 }else if (nota ===1){
    console.log("no ganas")
}else{
    console.log("introduce una nota de 1 a 5")
}

//switch
let notas = 5;

switch(notas){
    case 5:
        console.log("Exelente")
    break
    case 4:
        console.log("buen trabajo")
    break
    case 3:
        console.log("ganas con lo justo")
    break
    case 2:
        console.log("te falto poco")
    break
    case 1:
        console.log("no ganas")
    break
    default:
        console.log("error")
        break
}
