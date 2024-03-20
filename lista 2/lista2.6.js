//Verificar se uma pessoa é maior de idade (idade >= 18 anos).  

var readline = require("readline-sync");
var idade = readline.questionInt("Digite sua idade: ");

if (idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}
