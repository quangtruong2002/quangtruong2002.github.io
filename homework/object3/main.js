const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');
let count = document.querySelector('.count');
let number = +count.innerText;

decrease.addEventListener('click', sub);
reset.addEventListener('click', resetButton);
increase.addEventListener('click', sum);

function sub(){
    number--
    count.innerText = number;
};
function sum() {
    number++
    count.innerText = number;
};

function resetButton() {
    number = 0;
    count.innerHTML = number;
    };