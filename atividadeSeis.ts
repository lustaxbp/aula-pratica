const teclado = require (`prompt-sync`)();

let idade: number = 0;
let salario: number = 0;
let totPessoasNaCondicao: number = 0;
let pessoasContabilizadas: number = 0;

while (pessoasContabilizadas <=10){

  idade = parseInt(teclado(`Digite a idade do funcionario${pessoasContabilizadas}: `));
salario = parseFloat(teclado(`Digite o salario do funcionário ${pessoasContabilizadas}: `));
console.log(` `)

if (idade<30 && salario>3000){

   totPessoasNaCondicao++;
   pessoasContabilizadas++;
 }
  else{
    pessoasContabilizadas++;
 }
}
console.log(`o total de pessoas que atende a condição é ${totPessoasNaCondicao}`);