var teclado = require("prompt-sync")();
var idade = 0;
var salario = 0;
var totPessoasNaCondicao = 0;
var pessoasContabilizadas = 0;
while (pessoasContabilizadas <= 10) {
    idade = parseInt(teclado("Digite a idade do funcionario".concat(pessoasContabilizadas, ": ")));
    salario = parseFloat(teclado("Digite o salario do funcion\u00E1rio ".concat(pessoasContabilizadas, ": ")));
    console.log(" ");
    if (idade < 30 && salario > 3000) {
        totPessoasNaCondicao++;
        pessoasContabilizadas++;
    }
    else {
        pessoasContabilizadas++;
    }
}
console.log("o total de pessoas que atende a condi\u00E7\u00E3o \u00E9 ".concat(totPessoasNaCondicao));
