//2. Média de três números
//Peça ao usuário para inserir três números e calcule a média aritmética desses números.

var readline = require("readline-sync")
var n1 = readline.questionInt("Digite o número: ");
var n2 = readline.questionInt("Digite o segundo número: ");
var n3 = readline.questionInt("Digite o terceiro número: ");

var media = (n1+n2+n3)/3
console.log(media)
