// 1. Soma de dois números
//Escreva um programa que solicite ao usuário dois números inteiros e imprima a soma deles.

var readline = require("readline-sync");
var n1 = readline.questionInt("Digite um número: ");
var n2 = readline.questionInt("Digite o segundo número: ");

var soma = n1+n2;
console.log("a soma é " + soma)