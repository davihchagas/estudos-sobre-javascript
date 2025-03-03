// 1. Variáveis e Tipos de Dados
let nome = "João"; // String
const idade = 25; // Number
let isEstudante = true; // Boolean

// 2. Arrays e Objetos
let habilidades = ["JavaScript", "HTML", "CSS"];
let pessoa = {
    nome: nome,
    idade: idade,
    estudante: isEstudante,
    habilidades: habilidades
};

// 3. Funções e Arrow Functions
function saudacao(nome) {
    return `Olá, ${nome}! Bem-vindo ao JavaScript.`;
}

const soma = (a, b) => a + b;

// 4. Estruturas Condicionais
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// 5. Laços de Repetição
for (let i = 0; i < habilidades.length; i++) {
    console.log(`Habilidade ${i + 1}: ${habilidades[i]}`);
}

// 6. Manipulação do DOM
document.addEventListener("DOMContentLoaded", () => {
    let botao = document.createElement("button");
    botao.textContent = "Clique Aqui";
    document.body.appendChild(botao);

    botao.addEventListener("click", () => {
        alert(saudacao(nome));
    });
});
