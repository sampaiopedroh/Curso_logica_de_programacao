// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10:';
let listaSorteados = [];
let qntNumeros = 10;
let num = numAleatório();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
}

function mensagemInicial(){
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10:');
}

mensagemInicial();

function verificaChute(){
    let chute = document.querySelector('input').value;
    let maiorOuMenor = chute > num ? `Um pouco menos de ${chute}.` : `Um pouco mais de ${chute}.`;
    if(chute == num){
        exibirTexto('h1', 'Acertou !!!');
        exibirTexto('p', `Parabéns, o número secreto era ${num}. Você precisou de ${tentativas} tentativas.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        exibirTexto('h1', 'Quase !');
        if(chute > num){
            exibirTexto('p', `${maiorOuMenor}`);
        }
        else{
            exibirTexto('p', `${maiorOuMenor}`);
        }
        tentativas++;
        limparCampo();
    }
    limparCampo();
}

function numAleatório(){
    let numeroSecreto = parseInt(Math.random() * qntNumeros + 1); 
    let elementosLista =listaSorteados.length;

    if(elementosLista == qntNumeros){
        listaSorteados = [];
    }

    if (listaSorteados.includes(numeroSecreto)){
        return numAleatório
    }
    else{
        listaSorteados.push(numeroSecreto);
        return numeroSecreto;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    num = numAleatório();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}