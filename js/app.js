const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let inProgress = false;
let score = 0;

moles.forEach((mole) => {
    mole.addEventListener('click', kickMole)
})


function randomTime(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomHole(localHoles) {
   let id =  Math.floor(Math.random() * localHoles.length);
   return localHoles[id];
}

function showMole() {
    let time = randomTime(1000, 1000);
    let hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(()=> {
        hole.classList.remove('up');
        if(inProgress) showMole();
    }, time);
}

function kickMole() {
    this.parentElement.classList.remove('up');
    score++;
    scoreBoard.textContent = score;
}

function startGame() {
    inProgress = true;
    let score = 0;
    scoreBoard.textContent = '';
    setTimeout(()=> {
        inProgress = false;
    }, 50000);
    showMole();
}

