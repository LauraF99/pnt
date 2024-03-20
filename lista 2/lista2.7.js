//Atribuir uma categoria de acordo com a idade de uma pessoa (criança, adolecente, adulto e idoso).

var readline = require("readline-sync");
var idade = readline.questionInt("Digite sua idade: ");

if (idade < 13) {
    console.log("Criança");
} else if (idade < 18) {
    console.log("Adolescente");
} else if (idade < 64) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}