//✅ 1. Variáveis e entrada de dados

//Enunciado:
//Peça para o usuário digitar seu nome e sua idade. Mostre uma mensagem no console e no alert dizendo:

   // "Olá, [nome]! Você tem [idade] anos."

let nome = string(prompt("Digite seu nome: "));
let idade1 = number(prompt("Digite sua idade: "));
console.log("olá,", nome, "! Você tem", idade1, anos );

//✅ 3. Operador ternário

//Enunciado:
//Peça a idade do usuário e mostre no console:

    //"Maior de idade" se for >= 18

    //"Menor de idade" caso contrário
    //Use operador ternário.

let idade3 = number(prompt("Digite sua idade: "));
if (idade3 >= 18) {
    console.log("Maior de idade!")
} else {
    console.log("Menor de idade!")
}

//✅ 4. Estrutura switch

//Enunciado:
//Peça ao usuário para escolher uma fruta (maçã, banana, uva).
//Use switch para exibir:

    //“Você escolheu uma maçã.”

   // “Você escolheu uma banana.”

   // “Você escolheu uma uva.”

   // Caso não seja nenhuma dessas, exiba “Fruta inválida”.

let fruta = string(prompt("Escolha uma fruta (maçã, banana, uva): "));
switch(fruta){
    case maçã:
        console.log("Você escolheu uma maçã.");
        break;
    case banana:
        console.log("Você escolheu uma banana.");
        break;
    case uva:
        console.log("Você escolheu uma uva.");
        break;
    default:
        console.log("Fruta inválida");
}

//✅ 5. Laço for com condição

//Enunciado:
//Mostre no console todos os números ímpares de 1 a 20 usando for e continue.

for(let i=1; i<20; i++){
    if(i%2===0){
        continue;
    } 
    console.log(i);
}

//✅ 6. Array com laço

//Enunciado:
//Crie um array com 5 nomes.
//Use um for para mostrar cada nome com a frase:

   // “Olá, [nome]!”

let nomeFem = ["Gabriela", "Laís", "Vitória", "Fernanda", "júlia"];
for(let i=0;i<nomeFem.length;i++){
    console.log("Olá,",nomeFem[i]);
}

//✅ 7. Array de objetos

//Enunciado:
//Crie um array de objetos com 3 pessoas, contendo nome e idade.
//Use um laço for para exibir no console:

    //"[nome] tem [idade] anos."

let nomes = [
    {
        nome:"Gabriela",
        idade: 19
    },
    {
        nome:"Fernanda",
        idade: 25
    },
    {
        nome:"Ester",
        idade: 15
    }
];

for(let i=0;i<nomes.length;i++){
    console.log(nomes[i].nome,"tem",nomes[i].idade);
}

//✅ 8. Função com parâmetros e retorno
//Enunciado:
//Crie uma função multiplicar(a, b) que receba dois números e retorne o resultado da multiplicação.
let a = number(prompt("Digite um número: "));
let b = number(prompt("Digite outro número: "));
multiplicar(a,b);

function multiplicar(a,b){
resultado = a*b
console.log(resultado);
}

