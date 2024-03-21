/*6. Problema de Verificação de Idade: Restrição de Conteúdo
Um site de conteúdo precisa verificar a idade do usuário para acessar determinados recursos. 
Dependendo da idade informada, o sistema deve permitir ou negar o acesso:*/

var readline = require("readline-sync");
var idade = readline.questionInt("Digite sua idade: ");

switch (true) {
    case idade >= 18:
        console.log("Acesso total permitido");
        break;
    case idade < 18:
        console.log("Acesso restrito para maiores de 18 anos");
        break;
    default:
        break;
}