/*2. Questão de adivinhação de número: 
Desenvolva um jogo em que o computador escolhe um número aleatório entre 1 e 100, 
e o jogador deve adivinhar qual é esse número. 
O jogador recebe dicas se seu palpite é muito alto ou muito baixo, 
e o jogo continua até que o número seja adivinhado*/

var readline = require("readline-sync")
var numAleatorio = Math.floor(Math.random() * 100) + 1;
var palpites;


while (numAleatorio !== palpites) {
    palpites = readline.questionInt("Qual o seu palpite? (1-100): ");
if (palpites > numAleatorio) {
    console.log("Seu palpite é alto, tente novamente ")
} else {
    console.log("Seu palpite é baixo, tente novamente ")
} 
    
}

if (numAleatorio == palpites){
    console.log("Parabéns, você acertou");
}