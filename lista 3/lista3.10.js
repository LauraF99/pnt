
/*10. Problema de Verificação de Tipo de Pagamento: Processamento de Compra
Um sistema de e-commerce precisa determinar o método de pagamento selecionado pelo cliente. 
Dependendo do método escolhido, o sistema deve processar a compra de forma adequada:*/


var readline = require("readline-sync");
var pagamento = readline.question("Digite qual o método de pagamento: ");

switch (pagamento) {
    case "cartão de crédito":
        console.log("Compra realizada com cartão de crédito")
        break;
    case "boleto bancário":
        console.log("Boleto gerado. Aguardando pagamento");
        break;
    case "transferência bancária":
        console.log("Instruções de transferência enviadas. Aguardando confirmação");
        break;
    
    default:
        console.log("Método de pagamento não suportado. Por favor, escolha outra opção")
        break;
}