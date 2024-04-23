// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10:';
let num = numAleatório();

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
}
exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p', 'Escolha um número entre 1 e 10:');

function verificaChute(){
    let chute = document.querySelector('input').value
    console.log(chute == num);
}

function numAleatório(){
    return parseInt(Math.random() * 10 + 1); 
}