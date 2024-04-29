function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qnt = parseInt(document.getElementById('qtd').value);

    if(tipo == 'pista') {
        comprarPista(qnt);
    }
    else if (tipo == 'superior') {
        comprarInferior();
    }
}

function comprarPista() {
    let qntPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qnt > qntPista) {
        alert('Quantidade indisponível para tipo pista');
    }
    else {
        qntPista -= qnt;
        document.getElementById('qtd-pista').textContent = qntPista;
        alert('Compra realizada com sucesso');
    }
}

function comprarSuperior() {
    let qntSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qnt > qntSuperior) {
        alert('Quantidade indisponível para tipo pista');
    }
    else {
        qntSuperior -= qnt;
        document.getElementById('qtd-superior').textContent = qntSuperior;
        alert('Compra realizada com sucesso');
    }
}

function comprarInferior() {
    let qntInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qnt > qntInferior) {
        alert('Quantidade indisponível para tipo pista');
    }
    else {
        qntInferior -= qnt;
        document.getElementById('qtd-inferior').textContent = qntInferior;
        alert('Compra realizada com sucesso');
    }
}
