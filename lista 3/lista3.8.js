/*8. Problema de Notificação de Pagamento: Status de Transação
Um sistema de pagamentos online precisa notificar os usuários sobre o status de suas transações. 
Dependendo do código de status da transação, o sistema deve enviar uma mensagem adequada:*/

var readline = require("readline-sync");
var status = readline.question("Digite o status da transação: ");

switch (status) {
    case "aprovado":
        console.log("Aprovado com sucesso")
        break;
    case "pendente":
        console.log("Aguardando confirmação do pagamento");
        break;
    case "recusado":
        console.log("Pagamento recusado. Tente novamente");
        break;
    case "cancelado":
        console.log("Pagamento cancelado pelo usuário");
        break; 
    default:
        break;
}