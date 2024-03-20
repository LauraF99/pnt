//Determinar o dia da semana com base no número (1 a 7).

var readline = require("readline-sync");
var diaDaSemana = 3

switch (diaDaSemana) {
    case 1:
        console.log("Hoje é Segunda-feira")
        break;
    case 2:
        console.log("Hoje é Terça-feira")
        break;    
    case 3:
        console.log("Hoje é Quarta-feira")
        break;
    case 4:
        console.log("Hoje é Quinta-feira")
        break;
    case 5:
        console.log("Hoje é Sexta-feira")
        break;      
    case 6:
        console.log("Hoje é Sábado")
        break;
    case 7:
        console.log("Hoje é Domingo")
        break;         
    default:
        console.log("indefinido")
        break;
}