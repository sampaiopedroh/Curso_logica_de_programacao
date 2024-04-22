let mensagem = "Bem vindo !";
console.log(mensagem);

let nome = "Pedro";
console.log(`Olá, ${nome}.`);
alert(`Olá, ${nome}.`);

let pergunta = prompt(`${nome}, qual é a linguagem de proogramação que você mais gosta ?`);
console.log(pergunta);

let valor1 = prompt(`${nome}, escolha um número:`);
let valor2 = prompt(`${nome}, escolha outro número:`);
soma = valor1 + valor2;
console.log(`${valor1} + ${valor2} = ${soma}}`);
sub = valor1 - valor2;
console.log(`${valor1} - ${valor2} = ${sub}}`);

let idade = prompt(`${nome}, diga sua idade:`);
let menorOuMaior = idade >= 18 ? "maior" : "menor";
console.log(`${nome}, você é ${menorOuMaior} de idade`);

let numero = prompt(`${nome}, diga um número: `);
let positivoOuNegativo = num > 0 ? "positivo" : "negativo";
console.log(`O número ${numero} é ${positivoOuNegativo}`);

qnt = prompt("Diga o tamanho da sequência:");
aux = qnt;
while (aux > 0){
    aux--;
    console.log(qnt - aux);
}

let tam = prompt("Qual será o tamanho do conjunto ?")
let numAleatorio = parseInt((Math.random() * tam) + 1);
console.log(numAleatorio);

