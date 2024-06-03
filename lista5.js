// Questão de contagem regressiva reversa: 

/*let contador = 10
do {
    console.log(contador);
    contador--;
} while (contador >= 1);*/

// 2. Questão de validação de entrada de usuário

let readline = require("readline-sync");
let login = "senha123";

do {
    let senha = readline.question("Digite a senha: ")
} while (login !== senha);


/*while (senha !== login){
    let senha = readline.question("Digite a senha: ")
}*/