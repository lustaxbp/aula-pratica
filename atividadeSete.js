var teclado = require("prompt-sync")();
var x = 10000000000000000000000000000;
var contaAte = parseFloat(teclado("digite o valor do contador: "));
while (x <= contaAte) {
    console.log("Contador est\u00E1 em ".concat(x));
    x++;
}
