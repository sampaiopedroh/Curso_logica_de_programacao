alert("Boas vindas ao nosso site !!!");
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 100;
let mensagemDeErro = "Erro! Preencha todos os campos"
alert(mensagemDeErro);
nome = prompt("Diga seu nome: ");
idade = prompt("Diga sua idade: ");
if(idade >= 18){
    alert("Pode tirar a habilitação !");
}