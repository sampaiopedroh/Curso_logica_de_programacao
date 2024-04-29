let total = 0
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0';

function adicionar() {
    let produto = document.getElementById('produto');
    let qnt = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];

    let preco = qnt * valorProduto;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${qnt}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;

    total += preco
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${total}`;

    document.getElementById('quantidade').value = 0;
}

function limpar() {
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';
}