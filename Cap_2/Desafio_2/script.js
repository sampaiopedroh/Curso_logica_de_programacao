function btn1(){
    alert('Olá mundo !');
}

function btn2(){
    let nome = prompt('Diga seu nome:');
    alert(`Olá, ${nome} !`);
}

function btn3(){
    let num1 = parseInt(prompt('Diga um número:'));
    let cal = num1 * 2;
    alert(`O dobro de ${num1} é: ${cal}`); 
}

function btn4(){
    let num1 = parseInt(prompt('Diga o primeiro número:'));
    let num2 = parseInt(prompt('Diga o segundo número:'));
    let num3 = parseInt(prompt('Diga o terciero número:'));
    let cal = (num1 + num2 + num3) / 3;
    alert(`A média dos três números é: ${cal}`); 
}

function btn5(){
    let num1 = parseInt(prompt('Diga o primeiro número:'));
    let num2 = parseInt(prompt('Diga o segundo número:'));
    if(num1 > num2) {
        num1 = num1;
    }
    else{
        num1 = num2;
    }
    alert(`O maior número é: ${num1}`);
}
function btn6(){
    let num1 = parseInt(prompt('Diga um número:'));
    cal = num1 * num1;
    alert(`${num1} x ${num1} = ${cal}`);
}