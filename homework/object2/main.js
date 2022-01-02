let contro = document.querySelector('.contro');
const media = document.querySelector('video');
let flag = 1;

contro.addEventListener('click', contros);

function contros() {
    if (media.paused) {
        contro.setAttribute('data-icon', 'u');
        media.play();
        contro.innerText = 'stop';
    }
    else {
        contro.setAttribute('data-icon', 'p');
        media.pause();
        contro.innerText = 'play';
    }
    console.log('object');
}