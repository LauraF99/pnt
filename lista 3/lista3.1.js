
/* 1. Problema da Cafeteria: Controle de Pedidos
Uma cafeteria precisa controlar o status dos pedidos para garantir que sejam entregues no prazo.
 Dependendo do estado atual do pedido, o sistema deve imprimir mensagens diferentes: */

 var readline = require("readline-sync");
 var status = readline.question("Digite o status do pedido: ");

 switch (status) {
    case "pendente":
        console.log("Pedido em andamento, aguarde");
        break;
    case "preparando":
        console.log("Pedido em preparo");
        break;
    case "pronto":
        console.log("Pedido pronto para retirada");
        break;
    case "Entregue":
        console.log("Pedido entregue com sucesso");
        break;
    default:
        console.log("Status do pedido desconhecido");
        break;
 }
