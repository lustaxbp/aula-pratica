//luis otavio bordin 
//converter a temperatura x (entrada manual) CELSIUS para FAHRENHEIT
 let teclado = require (`prompt-sync`)();

 let CELSIUS: number = parseFloat(teclado(`digite a temperatura em ºC: `))

 let FAHRENHEIT: number = (CELSIUS + (9/5) ) + 32

 console.log(`o valor da conversão é : ${FAHRENHEIT}`)