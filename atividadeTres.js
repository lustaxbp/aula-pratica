//luis otavio bordin 
//converter a temperatura x (entrada manual) CELSIUS para FAHRENHEIT
var teclado = require("prompt-sync")();
var CELSIUS = parseFloat(teclado("digite a temperatura em \u00BAC: "));
var FAHRENHEIT = (CELSIUS + (9 / 5)) + 32;
console.log("o valor da convers\u00E3o \u00E9 : ".concat(FAHRENHEIT));
