/*3. Problema de Avaliação de Desempenho: Classificação de Funcionários
Uma empresa deseja classificar seus funcionários com base em suas avaliações de desempenho.
 Dependendo da nota obtida, o sistema deve atribuir uma classificação */

 var readline = require("readline-sync");
 var nota = readline.questionFloat("Digite a nota do funcionário: ")

 switch (true) {
    case nota >= 9:    
        console.log("Excelente desempenho")
        break;
    case nota >= 7:
        console.log("Bom desempenho");
        break;
    case nota >= 5:
        console.log("Desempenho razoável");
        break;
    case nota < 5:
        console.log("Desempenho insatisfatório");
        break;             
    default:
        console.log("deu errado")
        break;
 }