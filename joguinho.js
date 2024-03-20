/*O código pede ao usuário para adivinhar um número entre 1 e 10. 
Ele tem três tentativas para acertar o número. 
Se ele acertar, uma mensagem de parabéns é exibida. Se ele usar todas as tentativas,
uma mensagem informa que o jogo acabou*/
 
var readline = require("readline-sync")
var numAleatorio = Math.floor(Math.random() * 10) + 1;
var palpites;
var vidas = 3;

while (vidas > 0) {
    palpites = readline.questionInt("Qual o seu palpite? (1-10): ");
    
if (numAleatorio == palpites) {
    console.log("parabéns você acertou");
    break;
} else {
    console.log("Tente Novamente");
    vidas--;
    console.log("Vidas Restantes: " + vidas);
}        
    }
if (vidas == 0) {
    console.log("Suas vidas acabaram, o número correto era: " + numAleatorio)
}    

