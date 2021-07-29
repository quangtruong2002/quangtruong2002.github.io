let wordEl = document.getElementById('word')
let timeEl = document.getElementById('time')
let inputEl = document.getElementById('text')
let scoreEl = document.getElementById('score')
let selectEl = document.getElementById('level')


let btnStartGameEl = document.getElementById('btn-start-game')
let btnReloadGame = document.getElementById('btn-reload-game')

let startGameEl = document.getElementById('start-game')
let gameEl = document.querySelector('.container')
let endGameEl = document.getElementById('end-game-container')

let words = [ 
    'write',
    'began', 
    'he',
    'sea',
    'eye',
    'learn',
    'present',
    'accept',
    'passed',
    'except', 
    'just',
    'basketball',
    'type',
    'thinking',
    'player',
    'jolly',
    'pumpkin',
    'pecking',
    'distance',
    'finger',
    'comfortable',
    'pneumounoultramicroscovolcanoconiosis',
];
// let words1 = [
//     'write',
//     'began', 
//     'he',
// ];
// let words2 = [
//     'present',
//     'accept',
//     'passed',
// ];
// let words3 = [
//     'basketball',
//     'comfortable',
//     'pneumounoultramicroscovolcanoconiosis',
// ];

let word
let time = 10;
let score = 0;
let interval 
// sự kiện start game 
btnStartGameEl.addEventListener('click', function() { 
    let level = selectEl.value
     if(level == 'hard') {
        words 
        time = 61
    }
    else if(level == 'medium') {
        words
        time = 41
    }
    else {
        words
        time =31
    }
    
    startGameEl.classList.add('hide')
    gameEl.classList.remove('hide')

    text.focus()
    
    interval = setInterval(updateTime, 1000)
})


//xử lí gõ phím
inputEl.addEventListener('input', function(e) {
    let value = e.target.value;
    let characters = document.querySelectorAll('#word span')

   
    if(!word.startsWith(value)) {
        wordEl.style.backgroundColor = 'red'
        // [...characters].map((ele) => (ele.style.color = 'red'));
         for (let i = 0; i < [...characters].length; i++) {
             characters[i].style.color = 'white';
         }
         
    }
    
    else {
        wordEl.style.backgroundColor = 'transparent'
        for (let i = 0; i < [...value].length; i++) {
            characters[i].style.color = 'green';
        }
    }

    if(value == word) {
        //cập nhật điểm
        updateScore()
        //Random ra từ mới
        addWordToDom()

        e.target.value = ''
    }
})

//bắt đầu game
function randomWord(){
        let index = Math.floor(Math.random()* words.length);
     return words[index] 
    
   
}



//đưa word vào giao diện
function addWordToDom() {
    word = randomWord();
    //wordEl.innerText = word
    wordEl.innerHTML = [...word].map(char => `<span>${char}</span>`).join('');
}

//setup thời gian
function updateTime() {
    time--
    timeEl.innerText = `${time}s`

    if (time < 6) {
        timeEl.style.color = 'red'
    }

    else {
        timeEl.style.color = 'while'
    }

    if(time == 0) {
        clearInterval(interval)  
        //hiển thị end game
        endGame()
    }
}

// end game
function endGame() {
    endGameEl.style.display = 'flex';
    gameEl.style.display = 'none'
    endGameEl.querySelector('.score').innerText = score;
}

// reload lại game
btnReloadGame.addEventListener('click', function() {
    window.location.reload();
    
})

function updateScore() {
    score++
    scoreEl.innerText = score
}

window.onload = addWordToDom;