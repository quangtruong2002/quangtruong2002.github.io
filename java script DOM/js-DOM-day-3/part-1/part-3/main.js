// Truy cập
let primary = document.getElementById('primary-number');
let secondary = document.getElementById('secondary-number');
let guessEle = document.getElementById('guess');
let operatorEl = document.getElementById('operator')

let timeEle = document.querySelector('.time')
let scoreEle = document.querySelector('.score')
let highScoreEle = document.querySelector('.high-score')

// Định nghĩa biến
let firstNumber;
let secondNumber;
let total;

let operator;
let operators = ['+', '-', '*'];

let time;
let highScore = 0;
let score
let interval

// Random số và hiển thị
function randomNumber() {
    firstNumber = Math.floor(Math.random() * 10);
    secondNumber = Math.floor(Math.random() * 10);
    operator = operators[Math.floor(Math.random() * operators.length)];

    total = eval(`${firstNumber} ${operator} ${secondNumber}`);

    primary.innerText = firstNumber
    secondary.innerText = secondNumber
    operatorEl.innerText = operator;
}

// Khởi tạo game
function init() {
    score = 0;
    time = 20;

    timeEle.innerText = `${time}s`
    scoreEle.innerText = score
    highScoreEle.innerText = highScore;

    guess.innerText = '';
    randomNumber();

    interval = setInterval(countDown, 1000);
}

function countDown() {
    time--
    if (time < 10) {
        timeEle.innerText = `0${time}s`
    }
    else{
        timeEle.innerText = `${time}s`
    }
    if(time == 0 ) {
        clearInterval(interval)

        updateHightScore();

        setTimeout(init, 3000);
    }
}

function updateScore() {
    score++;
    scoreEle.innerText = score
}

function updateHightScore() {
    highScore = Math.max(score, highScore);
    highScoreEle.innerText = highScore;
}

// Xử lý khi người chơi kiểm tra kết quá
guessEle.addEventListener('keydown', function (e) {
    if (time == 0) {
    
    }
    if(e.keyCode == 13) {
        let value = Number(this.value)
        console.log(value)
        if(value == total) {
            updateScore();
            randomNumber();
            this.value = '';
        }
        else {
            
            this.value = '';
            return
        }
        
    }
    
});

window.onload = init;