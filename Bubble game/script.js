const hit = document.querySelector(".hit");
const timer = document.querySelector(".timer");
const score = document.querySelector(".score");
const gameArea = document.querySelector(".display-container");
const timeUp = timer.textContent = 30;
const panel = document.querySelector(".display-container");
let scoreUp = 0;
let rndHit = 0;

function bubbleCreate() {
    let bubble = '';
    for (let i = 0; i < 154; i++) {
        let num = Math.floor((Math.random() * 10));
        bubble += `<div class="bubble"><p>${num}</p></div>`;
    }
    gameArea.innerHTML = bubble;
}


function getNewHit() {
    rndHit = Math.floor(Math.random() * 10);
    hit.textContent = rndHit;
}

function scoreIncrease() {
    scoreUp += 10;
    score.textContent = scoreUp;
    console.log(scoreUp);
}


panel.addEventListener("click", function (dets) {
    const clkdNum = Number(dets.target.textContent);
    if (clkdNum === rndHit) {
        scoreIncrease();
        bubbleCreate();
        getNewHit();
    }
})

function timeout(timeUp) {
    const interval = setInterval(function () {
        if (timeUp < 0) {
            clearInterval(interval);
            panel.innerHTML =
                `<p class="game-over">GAME OVER!!!</p>
                <p class="final-score">your score : ${scoreUp}</p>`;
        }
        else {
            timer.textContent = timeUp--;
        }
    }, 1000);
}

getNewHit()
timeout(timeUp);
bubbleCreate();