let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function btnConsole(){
    console.log('O botão foi clicado');
}

function btnAlert(){
    alert('Eu amo JS');
}

function btnPrompt(){
    let cidade = prompt('Fale uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function btnSoma(){
    let num1 = window.prompt('Diga um número:');
    let num2 = window.prompt('Diga outro número:');
    let cal = parseInt(num1) + parseInt(num2)
    alert(`${num1} + ${num2} = ${cal}`);
}