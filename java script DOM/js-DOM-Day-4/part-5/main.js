// Truy cập
let primary = document.getElementById('primary-number');
let secondary = document.getElementById('secondary-number');
let guessEle = document.getElementById('guess');
let operatorEl = document.getElementById('operator');

let timeEle = document.querySelector('.time');
let scoreEle = document.querySelector('.score');
let highScoreEle = document.querySelector('.high-score');

let listPlayerEle = document.querySelector('.list-player');

// Truy cập các màn chơi
let startGameEle = document.querySelector('#start-game');
let gameEle = document.querySelector('#game');
let endGameEle = document.querySelector('#end-game');

let username = document.querySelector('#user-name');
let userAvatar = document.querySelector('#user-avatar');
let btnStartGame = document.querySelector('#btn-start-game');

// Định nghĩa biến
let firstNumber;
let secondNumber;
let total;

let operator;
let operators = ['+', '-', '*'];

let score;
let highScore = 0;
let time;
let interval;

let ranking = [];

let name;
let avatar;

// Lắng nghe sự kiện khi bắt đầu game
btnStartGame.addEventListener('click', function () {
    name = username.value;
    avatar = userAvatar.value;
    if (name == '' || avatar == '') {
        alert('Không được để trống');
        return;
    }
    startGameEle.style.display = 'none';
    gameEle.style.display = 'flex';

    init();
});

// Lấy data từ localStorage để render
function getDataFromLocalStorage() {
    let dataLocalStorage = localStorage.getItem('ranking');
    if (dataLocalStorage) {
        ranking = JSON.parse(dataLocalStorage);
    } else {
        ranking = [];
    }
    renderRanking(ranking);
}

// set data
function setDataToLocalStorage(arr) {
    localStorage.setItem('ranking', JSON.stringify(arr));
    renderRanking(arr);
}

// Random số và hiển thị
function randomNumber() {
    firstNumber = Math.floor(Math.random() * 10);
    secondNumber = Math.floor(Math.random() * 10);
    operator = operators[Math.floor(Math.random() * operators.length)];

    total = eval(`${firstNumber} ${operator} ${secondNumber}`);

    primary.innerText = firstNumber;
    secondary.innerText = secondNumber;
    operatorEl.innerText = operator;
}

// Khởi tạo game
function init() {
    score = 0;
    time = 10;

    timeEle.innerText = `${time}s`;
    scoreEle.innerText = score;
    highScoreEle.innerText = highScore;

    guess.innerText = '';
    randomNumber();
    getDataFromLocalStorage();

    interval = setInterval(countDown, 1000);
}

function countDown() {
    time--;
    if (time < 10) {
        timeEle.innerText = `0${time}s`;
    } else {
        timeEle.innerText = `${time}s`;
    }
    if (time == 0) {
        clearInterval(interval);
        // Cập nhật điểm cao nhất
        updateHighScore();
        // Thêm thông tin người chơi vào ranking
        addPlayerToRanking();
        // Sau 3s thì chơi lại game
        setTimeout(init, 3000);
    }
}

// Cập nhật điểm người chơi
function updateScore() {
    score++;
    scoreEle.innerText = score;
}

// Cập nhật điểm cao nhất người chơi
function updateHighScore() {
    highScore = Math.max(score, highScore);
    highScoreEle.innerText = highScore;
}

// Xử lý khi người chơi kiểm tra kết quả
guessEle.addEventListener('keydown', function (e) {
    if (time == 0) {
        return;
    }
    if (e.keyCode == 13) {
        let value = Number(this.value);
        if (value == total) {
            updateScore();
            randomNumber();
            this.value = '';
        } else {
            this.value = '';
            return;
        }
    }
});

function addPlayerToRanking() {
    let user = {
        name: 'Nguyễn Văn A',
        avatar: 'https://techmaster.vn/media/static/crop/brp4jgc51co0c1746n90',
        score: score,
    };
    ranking.push(user);
    setDataToLocalStorage(ranking);
}

// Hiển thị danh sách ranking ra ngoài giao diện
function renderRanking(arr) {
    // Sắp xếp điểm người chơi giảm dần
    let sortArr = arr.sort(function (a, b) {
        return b.score - a.score;
    });

    listPlayerEle.innerHTML = '';

    for (let i = 0; i < sortArr.length; i++) {
        const p = sortArr[i];
        listPlayerEle.innerHTML += `
            <div class="list-item">
                <div class="list-rank">${i + 1}</div>
                <div class="list-info">
                    <img src="${p.avatar}" alt="${p.name}">
                    <div class="info">
                        <span class="name">${p.name}</span>
                    </div>
                </div>
                <div class="list-score">
                    <span class="top-item-icon"><i class="fa fa-star" aria-hidden="true"></i></span>
                    <span class="top-item-point">${p.score}</span>
                </div>
            </div>
        `;
    }
}
