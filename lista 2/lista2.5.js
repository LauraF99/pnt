var readline = require("readline-sync")
var valorProduto = readline.questionInt("Digite o valor do produto: ");
 if (valorProduto > 1000 < 2000 ) {
    console.log("O valor do imposto é: " + (valorProduto * 7) / 100 )
 } else if (valorProduto > 2000) {
    console.log("O valor do imposto é:" + (valorProduto * 10) / 100 )
} else {
    console.log("indefinido")
}
