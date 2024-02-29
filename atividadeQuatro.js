//Luis Otavio Bordin Pereira 
//Converter a temperatura x (entrada manual) FAHRENHEIT para CELSIUS, 
//Segue a formula 9/5 (°F - 32).
var teclado = require('prompt-sync')();
var fahrenheit = parseFloat(teclado("digite um numero: "));
var celsius = (5 / 9) * (fahrenheit - 32);
console.log("convertendo da ".concat(celsius, " Celsius"));
