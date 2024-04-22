let dia_semana = prompt("Que dia da semana é hoje ?");
if (dia_semana == "Sábado" || dia_semana == "Domingo"){
    alert("Bom fim de semana !");
}
else{
    alert("Boa semana !");
}

let num = prompt("Diga um número:");
if (num < 0){
    alert(`${num} é um número negativo`);
}
else{
    alert(`${num} é um número positivo`);
}

let pontuacao = prompt("Diga sua pontuação:");
if (pontuacao >= 100){
    alert("Parabéns, você venceu !");
}
else{
    alert("Tente novamente para ganhar");
}

let nome = prompt("Diga seu nome:");
let saldo = 100
alert(`Bem vindo, ${nome} !\nSeu saldo é de R$${saldo} reais`);
