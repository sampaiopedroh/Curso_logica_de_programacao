    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
function numeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sortear(){
    let mensagem = document.getElementById('resultados');
    while (de > ate){
        mensagem.innerHTML = 'Selecione um conjunto válido !!!';
    }
    while(quantidade < (ate - de)){
        mensagem.innerHTML = 'Selecione um conjunto válido !!!';
    }

    let numsSorteados = [];
    let num;
    for (let i = 0; i < quantidade; i++){
        while (numsSorteados.includes(num)){
            num = numeroAleatorio(de, ate);
        }
        num = numeroAleatorio(de, ate);
        numsSorteados.push(num);
    }

    mensagem.innerHTML = `Os números sorteados foram: ${numsSorteados}`;
    alterarBtn();
}


function alterarBtn(){
    let btn = document.getElementById('btn-reiniciar');
    if  (btn.classList.contains('container_botao-desabilitado')){
        btn.classList.remove('container_botao-desabilitado');
        btn.classList.add('container_botao');
    }
    else{
        btn.classList.remove('container_botao');
        btn.classList.add('container_botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultados').innerHTML = 'Números sorteados:  nenhum até agora';
    alterarBtn();
}
