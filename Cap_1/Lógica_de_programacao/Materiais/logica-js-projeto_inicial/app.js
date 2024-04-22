alert("Boas vindas ao jogo do número secreto !!!");
let num_secreto = 29;
let pergunta = prompt("Escolha um número entre 1 e 30");
if (num_secreto == pergunta){
    console.log("Parabéns");
}
else{
    if (pergunta > num_secreto){
        console.log("Um pouco menos");
    }
    else{
        console.log("Um pouco mais");
    }
}