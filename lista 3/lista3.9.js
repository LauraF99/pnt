/*9. Problema de Classificação de Veículos: Identificação de Categoria
Um sistema de pedágio precisa classificar os veículos com base em seu tipo.
Dependendo do tipo de veículo, o sistema deve atribuir uma categoria:*/


var readline = require("readline-sync");
var tipoDeVeiculo= readline.question("Digite o tipo do seu veículo: ");

switch (tipoDeVeiculo) {
    case "carro":
        console.log("Categoria: Veículo de passeio")
        break;
    case "caminhão":
        console.log("Categoria: Veículo de carga");
        break;
    case "moto":
        console.log("Categoria: Motocicleta");
        break;
    
    default:
        console.log("Categoria desconhecida")
        break;
}    