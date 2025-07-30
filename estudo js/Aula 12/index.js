let n1 = Number(prompt("Digite um número: "));
let resultado;
resultado = dobro(n1);
console.log("o dobro de ", n1, "é: ", resultado);

function dobro(n1){
    return n1*2;
}