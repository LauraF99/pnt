//9. Tempo de viagem
//Peça ao usuário a distância em quilômetros e a velocidade média em km/h. Calcule o tempo estimado de viagem e mostre-o ao usuário.

var readline = require("readline-sync");
var distância = readline.questionInt("Digite a distância em km: ");
var velocidade = readline.questionInt("Digite a velocidade média em km/h: ");
var tempo = distância/velocidade
console.log("o tempo estimado é de " + tempo + " horas")