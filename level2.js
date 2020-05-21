const game = document.querySelector('.game');
const scoreBoard = document.querySelector('.score');


let inProgress = false;
let score = 0;

function randomTime(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomHole(localHoles) {
  let id =  Math.floor(Math.random() * localHoles.length);
  return localHoles[id];
}


function showMole() {
  let time = randomTime(500, 700);
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
  score = 0;
  scoreBoard.textContent = '';
  setTimeout(()=> {
    inProgress = false;
  }, 50000);
  showMole();
}

for ( let i = 1; i<10; i++){
  var html = `<div class="hole hole${i}">
  <div class="mole"></div>
  </div>`;
  game.insertAdjacentHTML('beforeend', html);
  
}

const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');


moles.forEach((mole) => {
  mole.addEventListener('click', kickMole)
})
