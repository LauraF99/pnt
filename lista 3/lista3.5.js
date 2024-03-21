/*5. Problema de Controle de Acesso: Verificação de Credenciais
Um sistema de login precisa verificar as credenciais de um usuário. 
Dependendo do tipo de usuário e da validade das credenciais, o sistema deve permitir ou 
negar o acesso:*/

var readline = require("readline-sync");
var usuario = readline.question("Digite o usuário: ");
var credencial = readline.question("Digite a credencial: ");

switch (usuario + credencial) {
    case "admin" + "admin":
        console.log("Acesso concedido como administrador");
        break;
    case "funcionario" + "funcao":
        console.log("Acesso concedido como funcionario");
        break;
    default:
        console.log("Acesso negado")
        break;
}
