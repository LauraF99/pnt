/*4. Problema de Priorização de Tarefas: Escalonamento de Projetos
Um gerente precisa priorizar projetos com base em sua urgência. 
Dependendo do nível de urgência do projeto, o sistema deve sugerir uma ação:*/

var readline = require("readline-sync");
var urgência = readline.question("Digite o nível de urgência: ")

switch (urgência) {
    case "urgente":
        console.log("Iniciar imediatamente");
        break;
    case "importante":
        console.log("Programar para esta semana");
        break;
    case "normal":
        console.log("Programar para o próximo mês");
        break;
    case "baixa prioridade":
        console.log("programar para o próximo trimestre");
        break; 
    default:
        break;
}