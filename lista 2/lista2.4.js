//Classificar um triângulo por seus lados (equilátero, isósceles e escaleno). 

var readline = require("readline-sync")

var lados = readline.questionInt("Quantos lados são iguais? ")

if (lados == 2) {
    console.log("isosceles")
} else if (lados == 3) {
    console.log("equilatero")
} else {
        console.log("escaleno")
}
