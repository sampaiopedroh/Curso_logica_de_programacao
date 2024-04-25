function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard_item_img')
    let btn = gameClicado.querySelector('.dashboard_item_button');
    let confirmacao = confirm('Tem certza ?');
    if (confirmacao == true){
        if (imagem.classList.contains('dashboard_item_img--rented')){
            imagem.classList.remove('dashboard_item_img--rented');
            btn.classList.remove('dashboard_item_button--rented');
            btn.textContent = 'Alugar';
        }
        else{
            imagem.classList.add('dashboard_item_img--rented');
            btn.classList.add('dashboard_item_button--rented');
            btn.textContent = 'Devolver';
        }
    }
}