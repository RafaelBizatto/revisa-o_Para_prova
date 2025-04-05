/* 
1. Somador de Números 

let total = 0;
let qtd = parseInt(prompt("Quantos números você deseja somar?"));
for (let i = 0; i < qtd; i++) {
  let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
  total += numero;
}
console.log(`Resultado da soma: ${total}`);
*/

/* 
2. Contagem Regressiva da NASA 

let contagem = 10;
let timer = setInterval(() => {
  console.log(contagem);
  contagem--;
  if (contagem < 0) {
    clearInterval(timer);
    console.log("Lançamento!");
  }
}, 1000);
*/

/* 
3. Balanço Financeiro Anual 

let ganhoBruto = parseFloat(prompt("Digite o ganho bruto mensal da empresa:"));
let totalGanhos = ganhoBruto * 12;
let totalGastos = 0;
for (let i = 1; i <= 12; i++) {
  let gasto = parseFloat(prompt(`Digite o gasto do mês ${i}:`));
  totalGastos += gasto;
}
let saldoFinal = totalGanhos - totalGastos;
console.log(`Total de ganhos: R$${totalGanhos.toFixed(2)}`);
console.log(`Total de gastos: R$${totalGastos.toFixed(2)}`);
console.log(`Saldo final: R$${saldoFinal.toFixed(2)}`);
console.log(saldoFinal >= 0 ? "Lucro no ano!" : "Prejuízo no ano!");
*/

/* 
4. Números em Ordem Decrescente 

let numeros = [];
for (let i = 0; i < 4; i++) {
  numeros.push(parseInt(prompt(`Digite o ${i + 1}º número:`)));
}
numeros.sort((a, b) => b - a);
console.log("Números em ordem decrescente:", numeros);
*/

/* 
5. Transformador de Par em Ímpar 

let numeroTransformar = parseInt(prompt("Digite um número:"));
if (numeroTransformar % 2 === 0) {
  numeroTransformar += 1; // transforma em ímpar
} else {
  numeroTransformar -= 1; // transforma em par
}
console.log("Resultado:", numeroTransformar);
*/

/* 
6. Vogal ou Consoante 

let letra = prompt("Digite uma letra:").toLowerCase();
let vogais = ['a', 'e', 'i', 'o', 'u'];
if (vogais.includes(letra)) {
  console.log("É uma vogal.");
} else {
  console.log("É uma consoante.");
}
*/

/* 
7. Cardápio da Picoleteria 

let sabores = {
  "Chocolate": 1.50,
  "Morango": 2.50,
  "Creme": 2.50,
  "Manga": 3.20,
  "Melancia": 3.40,
  "Vanilla Ice": 3.00,
  "Céu Azul": 3.60,
  "Brownie": 4.00,
  "Hawaiano": 5.00
};
let escolha = prompt("Escolha um sabor:\n" + Object.keys(sabores).join(", "));
if (sabores[escolha]) {
  console.log(`O valor do picolé ${escolha} é R$${sabores[escolha].toFixed(2)}`);
} else {
  console.log("Sabor não encontrado.");
}
*/

/* 
8. Jogo de Adivinhação 

let sorteado = Math.floor(Math.random() * 100) + 1;
let palpite;
do {
  palpite = parseInt(prompt("Adivinhe o número de 1 a 100:"));
  if (palpite > sorteado) {
    console.log("Muito alto!");
  } else if (palpite < sorteado) {
    console.log("Muito baixo!");
  } else {
    console.log("Parabéns! Você acertou!");
  }
} while (palpite !== sorteado);
*/

/* 
9. Contador de Vogais 

let frase = prompt("Digite uma frase:");
let contador = 0;
let vogaisContador = ['a', 'e', 'i', 'o', 'u'];
for (let char of frase.toLowerCase()) {
  if (vogaisContador.includes(char)) {
    contador++;
  }
}
console.log(`Quantidade de vogais: ${contador}`);
*/

/* 
10. Validador de Senha 

let senha = prompt("Digite uma senha:");
let temMaiuscula = /[A-Z]/.test(senha);
let temMinuscula = /[a-z]/.test(senha);
let temNumero = /[0-9]/.test(senha);
if (senha.length >= 8 && temMaiuscula && temMinuscula && temNumero) {
  console.log("Senha válida!");
} else {
  console.log("Senha inválida. Requisitos: mínimo 8 caracteres, uma maiúscula, uma minúscula e um número.");
}
*/

/* 
11. Tabuada Inteligente 

let numeroTabuada = parseInt(prompt("Digite um número para ver a tabuada:"));
console.log(`Tabuada do ${numeroTabuada}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
}
*/

/* 
12. Cadastro de Produtos 

let produtos = [];
for (let i = 0; i < 5; i++) {
  let nome = prompt(`Digite o nome do ${i + 1}º produto:`);
  let preco = parseFloat(prompt(`Digite o preço de ${nome}:`));
  produtos.push({ nome, preco });
}
let totalCarrinho = 0;
console.log("Lista de produtos:");
for (let produto of produtos) {
  console.log(`${produto.nome} - R$${produto.preco.toFixed(2)}`);
  totalCarrinho += produto.preco;
}
console.log(`Valor total do carrinho: R$${totalCarrinho.toFixed(2)}`);
*/