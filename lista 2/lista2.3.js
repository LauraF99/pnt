//Verificar se um número é par ou ímpar (utilizar operador de resto ‘%’).

var numero = 22

switch (numero % 2) {
    case 0:
        console.log("par")
        break;
    case 1:
        console.log("ímpar");
        break;
    default:
        console.log("indefinido")
        break;
}
