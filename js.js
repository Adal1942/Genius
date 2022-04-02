let order = [];
let clickedOrder = [];
let score = 0;

//0 - azul
//1 - vermelho
//2 - amarelo
//3 - verde

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
//cria ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}
//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() =>{
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() =>{
        element.classList.remove('selected');
    }, number - 150);
}
//checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`)
        nextLevel();
    }
}
//função para o click
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
    
}

//função que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return blue;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return green;
    }
}

//função para próximo nível
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//função de gameover
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo.`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

blue.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
green.onclick = () => click(3);

playGame();