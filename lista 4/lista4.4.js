/*4. Questão de média de números: 
Faça um programa que peça ao usuário para inserir uma série de números inteiros positivos.
 O programa deve calcular e imprimir a média desses números. 
 A entrada de dados deve parar quando o usuário digitar um número negativo.*/

 var readline = require("readline-sync");

var condition = true;
var soma = 0;
var cont = 0;
var num;

while (condition) {
    num = readline.questionInt("Digite um número inteiro positivo,\nse quiser parar, digite um número < 0: ");
    if (num < 0) {
        condition = false;
    } else {
        cont++;
        soma+=num;
    }

}
console.log(soma/cont);