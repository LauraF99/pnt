
/*7. Problema de Verificação de Cartão: Identificação da Bandeira
Um sistema de pagamento precisa identificar a bandeira de um cartão de crédito para processamento. 
Dependendo dos primeiros dígitos do número do cartão, o sistema deve determinar a bandeira*/

var readline = require("readline-sync");
var digito = readline.questionInt("Digite o primeiro digito do seu cartão: ")

switch (digito) {
    case 4:
        console.log("A bandeira é Visa");
        break;
    case 5:
        console.log("A bandeira é Mastercard");
        break;
    case 3:
        console.log("A bandeira é American Express");
        break;
    default:
        console.log("Bandeira desconhecida")
        break;
}