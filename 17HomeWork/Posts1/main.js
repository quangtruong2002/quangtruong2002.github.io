let seconEl = document.getElementById('secon')
let minutenEl = document.getElementById('minuten')
let startBtn = document.querySelector('.start')
let stoptBtn = document.querySelector('.stopt')
let resetBtn = document.querySelector('.reset')

let min = 0;
let sec = 0;
let Interval;
startBtn.addEventListener('click', function() {
    clearInterval(Interval)
    Interval = setInterval(updateTime, 10)
})

stoptBtn.addEventListener('click', function() {
    clearInterval(Interval)
})

resetBtn.addEventListener('click', function() {
    // window.location.reload()
    window.location.reload()
})

function updateTime() {
    sec ++
    if(sec <= 9) {
        seconEl.innerHTML= '0' + sec;
    }
    else if(sec > 9){
        seconEl.innerHTML = sec;
    }
    if(sec >= 60 ) {
        min++
        minutenEl.innerHTML = '0' + min; 
        sec = 0;
        seconEl.innerHTML= "0" + 0;
    }
    else if(min > 9 ) {
        minutenEl.innerHTML = min;
    }
}

