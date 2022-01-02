const tiles = document.querySelectorAll('.tile');
const win = document.querySelector('.win');
const winner = document.querySelector('.winner');
const container = document.querySelector('.container')
const play_again = document.querySelector('.play_again');

const PLAYER_X = 'X';
const PLAYER_O = 'O';
let turn = PLAYER_X;

const boardState = Array(tiles.length);
boardState.fill(null);

tiles.forEach((tile) => tile.addEventListener('click', tilesClick));
play_again.addEventListener('click', playAgain);

function setHoverText() {

    tiles.forEach(tile => {
        tile.classList.remove('x-hover');
        tile.classList.remove('o-hover');
    });

    const classHover = `${turn.toLowerCase()}-hover`;

    tiles.forEach(tile => {
        if (tile.innerText == "") {
            tile.classList.add(classHover);
        }
    });
}

function tilesClick(event) {
    const tile = event.target;
    const tileNumber = tile.dataset.index;

    if (tile.innerText != "") {
        return;
    }

    if (turn === PLAYER_X) {
        tile.innerText = PLAYER_X;
        boardState[tileNumber - 1] = PLAYER_X;
        turn = PLAYER_O;
    }
    else {
        tile.innerText = PLAYER_O;
        boardState[tileNumber - 1] = PLAYER_O;
        turn = PLAYER_X;
    }
    setHoverText();
    winning();
}

function winning() {
    for (const winningCombinations of winningCombination) {
        let { combo } = winningCombinations;
        let tilevalue1 = boardState[combo[0] - 1];
        console.log(tilevalue1);
        let tilevalue2 = boardState[combo[1] - 1];
        let tilevalue3 = boardState[combo[2] - 1];

        if (tilevalue1 != null && tilevalue1 === tilevalue2 && tilevalue1 === tilevalue3) {
            container.classList.add('hiden');
            winner.innerText = "you win";
            win.classList.add('visible');
            return;
        }
    };
};
const winningCombination = [
    // winning row
    { combo: [1, 2, 3] },
    { combo: [4, 5, 6] },
    { combo: [7, 8, 9] },
    // winning collumn
    { combo: [1, 4, 7] },
    { combo: [2, 5, 8] },
    { combo: [3, 6, 9] },
    // diagonals
    { combo: [1, 5, 9] },
    { combo: [3, 5, 7] },
];
function playAgain() {
    play_again.style.backgroundColor = 'rgb(247, 118, 139)'
    window.location.reload();
}