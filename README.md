# JavaScript e seus principais conceitos

## Introdução

JavaScript é uma linguagem de programação de alto nível, interpretada e baseada em protótipos. É amplamente utilizada para o desenvolvimento web, permitindo a criação de páginas dinâmicas e interativas. Sua versatilidade permite que seja utilizada tanto no lado do cliente (frontend) quanto no lado do servidor (backend), com o auxílio do Node.js.

## Principais Conceitos

### 1. Variáveis e Tipos de Dados

JavaScript possui tipagem dinâmica, o que significa que o tipo de uma variável é definido automaticamente pelo seu valor atribuído. Podemos declarar variáveis utilizando:

var nome = "João"; // Declaração antiga
let idade = 25; // Variável mutável
const PI = 3.1415; // Constante

Os principais tipos de dados em JavaScript são:

Primitivos: string, number, boolean, undefined, null, bigint, symbol

Objetos: Arrays, Funções e Objetos personalizados

### 2. Estruturas de Controle

JavaScript permite o uso de estruturas de controle para tomada de decisões e repetição de blocos de código:

Condicionais

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

Laços de Repetição

for (let i = 0; i < 5; i++) {
    console.log("Iteração número " + i);
}

### 3. Funções

Funções são blocos de código reutilizáveis. Existem diversas formas de declarar funções em JavaScript:

Função Tradicional

function saudacao(nome) {
    return "Olá, " + nome + "!";
}

Função Anônima

const soma = function(a, b) {
    return a + b;
};

Arrow Function (ES6)

const multiplicar = (a, b) => a * b;

### 4. Objetos e Arrays

Em JavaScript, objetos são estruturas de dados que armazenam informações em pares chave-valor:

const pessoa = {
    nome: "Carlos",
    idade: 30,
    profissao: "Engenheiro"
};
console.log(pessoa.nome);

Arrays armazenam coleções de valores e suportam métodos como push, map, filter, entre outros:

const numeros = [1, 2, 3, 4, 5];
numeros.push(6);
console.log(numeros);

### 5. Manipulação do DOM

JavaScript permite a manipulação da estrutura HTML da página através da DOM (Document Object Model):

const titulo = document.getElementById("titulo");
titulo.textContent = "Novo Título";

### 6. Assincronismo e Promises

JavaScript possui um modelo de execução assíncrono baseado em eventos. O uso de Promises e async/await permite lidar com operações assíncronas:

Promises

const promessa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Dados carregados!"), 2000);
});

promessa.then(resultado => console.log(resultado));

Async/Await

async function obterDados() {
    let resposta = await fetch("https://api.exemplo.com/dados");
    let dados = await resposta.json();
    console.log(dados);
}

### Conclusão

JavaScript é uma linguagem poderosa e flexível, essencial para o desenvolvimento web moderno. Com o domínio de seus principais conceitos, é possível criar aplicações interativas e dinâmicas tanto no frontend quanto no backend.
