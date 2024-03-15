//7. Cálculo de desconto
//Solicite o preço de um produto e um percentual de desconto. Calcule o valor do desconto e o preço final do produto com o desconto aplicado.

var readline = require("readline-sync")
var preço = readline.questionInt("Digite o preço: ");
var desconto = readline.questionFloat("Digite o percentual de desconto: ");
var valorDesconto = (preço*desconto) / 100;
var preçoFinal = preço-valorDesconto
console.log(valorDesconto);
console.log(preçoFinal);

