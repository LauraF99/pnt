/*Problema de Controle de Estoque: Verificação de Disponibilidade
Uma loja online precisa verificar a disponibilidade de um produto em seu estoque. 
Dependendo da quantidade em estoque, o sistema deve informar se o produto está disponível para
compra ou não */

var readline = require("readline-sync");
var quantidade = readline.questionInt("Digite a quantidade em estoque: ");
switch (quantidade) {
    case 0:
        console.log("Produto esgotado");
        break;
    default:
        console.log("Poduto disponível para compra");
        break;
}