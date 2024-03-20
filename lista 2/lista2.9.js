//Verificar se um número é primo ou não (divisível por 1 e por ele mesmo).
var readline = require("readline-sync");

var numero = readline.questionInt("Digite o numero: ");

var primo1 = numero % 2;
var primo2 = numero % 3;
var primo3 = numero % 5;

if ((primo1 == 0 && primo1 > 2) || (primo2 == 0 && primo2 > 3) || (primo3 == 0 && primo3 > 5) ) {
    console.log("Este número não é primo");
} else if (numero == 1 || numero == 0) {
    console.log("Este numero não é primo");
} else {
    console.log("Este número é primo");
}