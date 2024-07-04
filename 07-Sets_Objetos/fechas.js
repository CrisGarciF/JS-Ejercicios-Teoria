// Trabajndo con fechas

const fecha = new Date()
console.log(fecha)

const fecha2 = new Date(1987,10,20,1,23,52,192)
console.log(fecha)

const fecha3 =  new Date(-10000000000)
console.log(fecha3)

const fecha4 = new Date("October 13, 1979 12:15:15")
console.log(fecha4)

//comparacion de fechas

console.log(fecha > fecha2)

const fecha5 = new Date(1987,10,20,1,23,52,192)
console.log(fecha2.getTime()=== fecha5.getTime())

///// Obtener el dia , el mes y el año de una fecha

// Obtner el dia .getDate()
console.log(fecha2.getDate())
//Obtner el mes  .getMonth()
console.log(fecha2.getMonth())
//Obtener el año .getYear()
console.log(fecha2.getFullYear())

// .toLocal toLocaleDateString()
console.log(fecha2.toLocaleDateString("en-US"))