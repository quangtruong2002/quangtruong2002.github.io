let player1 = document.getElementById('name-0');
let player2 = document.getElementById('name-1');

let score1 = document.getElementById('score-0');
let score2 = document.getElementById('score-1');

let number1 = document.getElementById('current-0');
let number2 = document.getElementById('current-1');
let dice1 = document.getElementById('dice-1');
let dice2 = document.getElementById('dice-2');
let active = document.querySelector('.active')
let rowDice = document.querySelector('.btn-roll')
let holdPoint = document.querySelector('.btn-hold')
let input = document.querySelector('.final-score')
let winner = document.querySelector('.winner')
let newGame = document.querySelector('.btn-new')

let activePlayer = 0
let scorePlayer1 = 0
let scorePlayer2 = 1

function init() {
     gamePlaying = true
     scores = 0

    player1.innerText = "Player 1"
    player2.innerText = "Player 2"
    score1.innerText = 0
    score2.innerText = 0
    number1.innerText = 0
    dice1.style.display = "none"
    dice2.style.display = "none"

    player1.classList.remove('active');
    player2.classList.toggle('active');

}

rowDice.addEventListener('click', function () {
    let randomNum1 = Math.floor(Math.random() * 6) + 1;
    let randomNum2 = Math.floor(Math.random() * 6) + 1;

    dice1.src = `./img/dice-${randomNum1}.png`;
    dice2.src = `./img/dice-${randomNum2}.png`;

    dice1.style.display = 'block'
    dice2.style.display = 'block'

    // let currentEl = document.getElementById(`current-${activePlayer}`)

    if (randomNum1 != 1 && randomNum2 != 1) {
       scores = scores + randomNum1 + randomNum2 
       document.getElementById(`current-${activePlayer}`).textContent = scores
       
    }
    // Khi đổi lượt chơi, cần kiểm tra người chơi hiện tại là người chơi
    // nào. Nếu là người chơi 1 => đổi thành người chơi 2 và ngược lại
    else {
        // reset điểm hiện tại của 2 người chơi về bằng 0
        
        changerPlayer()
    }
})

function changerPlayer() {
    if (activePlayer == 0) {
        activePlayer = 1
    }
    else {
        activePlayer = 0
    }
    // ẩn 2 con xúc xắc

    scores = 0;

    number1.textContent = 0
    number2.textContent = 0

    dice1.style.display = 'none';
    dice2.style.display = 'none';

    


    //chuyển class active cho người chơi tiếp theo
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

// Update số lượng điểm của người chơi hiện tại
holdPoint.addEventListener('click', function () {
     document.querySelector(`#score-${activePlayer}`).textContent = scores + Number(document.querySelector(`#score-${activePlayer}`).textContent)

    let values = Number(input.value)
    if (values == '') {
    checkWinner(20)
    }
    else {
    checkWinner(value)
    }
})
// kiểm tra xem người chơi nào đủ điều kiện để win hay chưa
function checkWinner(number) {
    if (Number(score1.innerText) >= number) {
        activePlayer = 0;
        displayWinner()
    }
     else if (Number(score2.innerText) >= number) {
        activePlayer = 1;
        displayWinner()
    } 
    else {
        changerPlayer()
    }
}
//setup winner
function displayWinner() {
    let namePlayerEl = document.getElementById(`name-${activePlayer}`);
    let playerPanelEl = document.querySelector(`.player-${activePlayer}-panel`);

    namePlayerEl.innerText = 'winner';
    namePlayerEl.style.color = 'yellow';

    playerPanelEl.classList.add('winner')
    playerPanelEl.classList.remove('active')

    dice1.style.display = 'none'
    dice2.style.display = 'none'
    rowDice.style.display = 'none'
    holdPoint.style.display = 'none'

}

//reload lại game
newGame.addEventListener('click', function () {

    window.location.reload()
})



window.onload = init()