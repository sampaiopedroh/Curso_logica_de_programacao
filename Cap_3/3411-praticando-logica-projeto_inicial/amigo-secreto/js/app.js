let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value;
    if ((amigo == '') || (amigo.includes(amigo))){
        alert('Informe o nome válido !');
        return;
    }
    let lista = document.getElementById('lista-amigos').textContent;
    amigos.push(amigo);
    if (lista == '') {
        lista = amigo;
    }
    else{
        lista += ', ' + amigo
    }
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    if (amigos.length <= 4) {
        alert('Adicione pelo menso 4 amigos !');
        return;
    }

    embaralharAmigos(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++){
        if (i == amigos.length - 1){
            listaSorteio.innerHTML += amigos[i] + ' -> ' + amigos[0] + '<br>';
        }
        else{
            listaSorteio.innerHTML += amigos[i] + ' -> ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralharAmigos(lista) {
    for (let indice = lista.length; indice; indice--){
        const indiceAleatorio = Math.floor(Math.random()*indice);

        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio') = '';
}