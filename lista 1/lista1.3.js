//3. Conversão de temperatura
//Crie um programa que converta uma temperatura em graus Celsius para Fahrenheit. Peça ao usuário para inserir a temperatura em Celsius e exiba a temperatura equivalente em Fahrenheit.

var readline = require("readline-sync");
var temperatura = readline.questionFloat("Digite a temperatura em celsius");
var conversao = ((temperatura * 9/5) + 32)
console.log(conversao)