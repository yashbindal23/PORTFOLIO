const hit = document.querySelector(".hit");
const timer = document.querySelector(".timer");
const score = document.querySelector(".score");
const panel = document.querySelector(".display-container");

let timeUp = 30;
let scoreUp = 0;
let rndHit = 0;

function bubbleCreate() {
    let bubble = '';
    for (let i = 0; i < 154; i++) {
        let num = Math.floor(Math.random() * 10);
        bubble += `<div class="bubble"><p>${num}</p></div>`;
    }
    panel.innerHTML = bubble;
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
});

function timeout() {
    const interval = setInterval(function () {
        if (timeUp < 0) {
            clearInterval(interval);
            panel.innerHTML =
                `<p class="game-over">GAME OVER!!!</p>
                 <p class="final-score">your score: ${scoreUp}</p>
                 <button class="reload-btn"><p>REPLAY</p></button>`

            const reloadBtn = document.querySelector(".reload-btn");
            reloadBtn.addEventListener("click", reloadGame);
        } else {
            timer.textContent = timeUp;
            timeUp--;
        }
    }, 1000);
}

function reloadGame() {
    console.log("Restarting the game!");
    scoreUp = 0;
    score.textContent = scoreUp;
    timeUp = 30;
    timer.textContent = timeUp;
    bubbleCreate();
    getNewHit();
    timeout();
}

// Start the game
getNewHit();
timeout();
bubbleCreate();