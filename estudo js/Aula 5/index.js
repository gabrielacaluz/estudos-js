//Pergunta o nome da pessoa.

//Pergunta o ano de nascimento.

//Calcula a idade atual (assuma que estamos em 2025).

//Mostra no alert:
//"Gabriela, você tem 22 anos."

let nome = prompt("Digite o seu nome:");
let ano = prompt("Em qual ano você nasceu? ");
let anoNasc = Number(ano);

let idade = (2025 - anoNasc);
alert(nome + ", você tem " + idade + " anos");