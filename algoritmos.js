let nome = "Ana";
let idade = 20;
console.log(`Nome: ${nome}, Idade: ${idade}`);

let numero = 10;
if (numero % 2 === 0) {
    console.log("Número par");
} else {
    console.log("Número ímpar");
}

for (let i = 0; i < 5; i++) {
    console.log("Iteração número " + i);
}

const soma = function(a, b) {
    return a + b;
}

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};
console.log(`Carro: ${carro.marca} ${carro.modelo}, Ano: ${carro.ano}`);