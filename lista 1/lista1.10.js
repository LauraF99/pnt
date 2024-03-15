//10. Conversão monetária
//Crie um programa que converta uma quantia em reais para dólares. Peça ao usuário para inserir a taxa de câmbio e o valor em reais, e então exiba o equivalente em dólares.

var readline = require("readline-sync");
var taxaCambio = readline.questionFloat("Digite a taxa de câmbio: ");
var valorReal = readline.questionFloat("Digite o valor em reais: ");
var valorDolar = valorReal/taxaCambio;
console.log(valorDolar + " doláres");
