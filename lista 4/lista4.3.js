/*3. Questão de cálculo de fatorial: 
Escreva um programa que solicite ao usuário um número inteiro positivo 
e então calcule e imprima o fatorial desse número*/

var readline = require("readline-sync");
var num = readline.questionInt("Digite um número inteiro: ");
var result = num

while (num > 1) {
num --;
result *= num

}
console.log(result);