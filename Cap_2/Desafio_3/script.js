function btn1(){
    let altura = parseFloat(prompt('Diga sua altura (em m):'));
    let peso = parseFloat(prompt('Diga o seu peso (em kg):'));
    let cal = (peso/(altura ** 2));
    alert(`Seu IMC é: ${cal}`);
}

function btn2(){
    let num = parseInt(prompt('Diga um número:'));
    let fat = num;
    let aux = num;
    let fat_string = `${num}`;
    while (num > 1){
        num -= 1;
        fat *= num;
        fat_string += `.${num}`;
    }
    alert(`A sequência fatorial de ${aux} é: ${fat_string} = ${fat}`);
}

function btn3(){
    let dolar = parseFloat(prompt('Quanto de dinheiro você tem em dolar ?'));
    let cotacao = 4.80
    let cal = dolar/cotacao;
    alert(`Seu $${dolar} valem: R$${cal}.`);
}

function btn4(){
    let largura = parseFloat(prompt('Quanto de largura tem o quadrilátero ?'));
    let comprimento = parseFloat(prompt('Quanto de comprimento tem o quadrilátero ?'));
    let area = largura * comprimento;
    let perimetro = (largura + comprimento) * 2;
    alert(`A área do quadrilátero é: ${area} m².\nO perímetro do quadrilátero é: ${perimetro} m.`);
}

function btn5(){
    let raio = parseFloat(prompt('Quanto de raio tem a sala ?'));
    let area = 3.14 * (raio ** 2);
    let perimetro = 2 * 3.14 * raio
    alert(`A área da sala é: ${area} m².\nO perímetro da sala é: ${perimetro} m.`);
}

function btn6(){
    let qnt = 0;
    let num = parseInt(prompt('Diga um número:'));
    while (qnt < 10){
     qnt++;
     let cal = num * qnt;
     alert(`${num} X ${qnt} = ${cal}`);
    }
}