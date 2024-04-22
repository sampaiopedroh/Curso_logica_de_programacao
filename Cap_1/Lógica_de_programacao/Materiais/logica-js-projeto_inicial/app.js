alert("Boas vindas ao jogo do número secreto !!!");
let num_secreto = parseInt((Math.random() * 100) + 1);
console.log(num_secreto);
let resposta = prompt("Escolha um número:");;
qnt = 1;
while(num_secreto != resposta){
    qnt++;
    if (resposta > num_secreto){
        alert(`Um pouco menos de ${resposta}`);
    }
    else if(resposta < num_secreto){
        alert(`Um pouco mais de ${resposta}`);
    }
    resposta = prompt(`Errou,  ${qnt}˚ tentativas:`);
}
let palavraTentativa = qnt > 1 ? "tentativas" : "tentativa"
if (num_secreto == resposta){
    alert(`Parabéns, o número secreto é ${num_secreto}\nVocê precisou de ${qnt} ${palavraTentativa}`);
}
else{
    alert("Perdeu :(")
}
