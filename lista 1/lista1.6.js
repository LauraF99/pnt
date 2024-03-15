//6. Troca de valores
//Leia dois números inteiros e troque seus valores. Ou seja, o valor da primeira variável deve ser atribuído à segunda variável e vice-versa.

var readline = require("readline-sync");

var num1 = 10;
var num2 = 20;
var c = num1;
num1 = num2;
num2 = c;
console.log(num1);
console.log(num2);
