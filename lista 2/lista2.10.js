//Determinar a estação do ano com base no mês (primavera, verão, outono e inverno).

var readline = require("readline-sync");
var mesDoAno = readline.question(" Digite o mês do ano em número: ");


if (mesDoAno == 1 || mesDoAno == 2 || mesDoAno == 3 ) {
    console.log("Estamos no verão");
} else if (mesDoAno == 4 || mesDoAno == 5 || mesDoAno == 6) {
    console.log("Estamos no outono");
} else if (mesDoAno == 7 || mesDoAno == 8 || mesDoAno == 9) {
    console.log("Estamos no inverno")
} else {
    console.log("Estamos na primavera")
}

