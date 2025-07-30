let idade = Number(prompt("Digite sua idade:"));

//verifica a faixa etária
if (idade < 13) {
    alert("Você é uma criança");
} else if (idade <= 17) {
    alert("Você é um adolescente");
} else {
    alert("Você é um adulto");
}