let n1 = Number(prompt("Digite um número: "));
let op = String(prompt("Digite um operador(+ adição, * multiplicação, / divisão, - subtração:)"));
let n2 = Number(prompt("Digite outro número: "));

//verifica se o operador digitado é valido
while (op!= "+" && op!= "-" && op!= "*" && op!= "/"){
    op = prompt("Digite um operador válido: ")
}

let resultado;

if (op == "/") {
    resultado = dividir(n1,n2);
} else if (op == "-") {
    resultado = subtrair(n1,n2);
} else if (op == "+") {
    resultado = somar(n1,n2);
} else if (op == "*") {
    resultado = multiplicar(n1,n2);
}

console.log("Resultado: ", resultado);


//Função para executar cada operação matemática
function somar(n1,n2){
    return n1 + n2;
}
function dividir(n1,n2){
    return n1 / n2;
}
function multiplicar(n1,n2){
    return n1 * n2;
}
function subtrair(n1,n2){
    return n1 - n2;
}