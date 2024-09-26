
// let buttons = document.querySelectorAll("button");
// buttons.forEach(buttons => {
//     buttons.addEventListener("click", function () {
//         console.log(buttons.innerText);
//     })
// })

// console.log(buttons)

let symO = true;
let count = 0;
const turnSound = new Audio('./turn3.mp3');
const gamePlaySound = new Audio('./gamePlaySound2.mp3');
const gameDrawSound = new Audio('./drawSound.mp3');
const winnerSound = new Audio('./winner.mp3');

const box0 = document.querySelector("#box-0");
const box1 = document.querySelector("#box-1");
const box2 = document.querySelector("#box-2");
const box3 = document.querySelector("#box-3");
const box4 = document.querySelector("#box-4");
const box5 = document.querySelector("#box-5");
const box6 = document.querySelector("#box-6");
const box7 = document.querySelector("#box-7");
const box8 = document.querySelector("#box-8");
const resetbtn = document.querySelector("#reset");
const showMsg = document.querySelector(".show-msg");
const gif = document.querySelector(".gif-box");
const newGamebtn = document.querySelector("#newGame");
const turn = document.querySelector(".turn");
turn.innerText = "Trun is: O";
const boxes = [box0, box1, box2, box3, box4, box5, box6, box7, box8];


//EventListener
box0.addEventListener("click", function () { show(symO, box0) });
box1.addEventListener("click", function () { show(symO, box1) });
box2.addEventListener("click", function () { show(symO, box2) });
box3.addEventListener("click", function () { show(symO, box3) });
box4.addEventListener("click", function () { show(symO, box4) });
box5.addEventListener("click", function () { show(symO, box5) });
box6.addEventListener("click", function () { show(symO, box6) });
box7.addEventListener("click", function () { show(symO, box7) });
box8.addEventListener("click", function () { show(symO, box8) });
resetbtn.addEventListener("click", function () { resetGame() });
newGamebtn.addEventListener("click", function () { resetGame() });

//function for show 'O' and "X"
function show(sym, box) {
    gamePlaySound.play();
    gamePlaySound.loop = true;
    if (symO) {
        turnSound.play();
        turn.textContent = "Turn is: X";
        box.textContent = "O";
        box.style.color = "#5a0202";
        // console.log('player O ', sym);
        symO = false;
    } else {
        turnSound.play();
        box.textContent = "X";
        turn.innerText = "Trun is: O";
        // console.log('player O', sym);
        symO = true;
    }
    //draw
    count++;
    // draw(count);
    box.disabled = true;
    win(count);
}

let winCom = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// const boxes = document.querySelectorAll(".btn-box");
// const boxes = [box0, box1, box2, box3, box4, box5, box6, box7, box8];
// turnFn();
// console.log(boxes);

//function wining conbination
function win(count) {
    for (let combination of winCom) {
        // count++;
        // console.log(combination[0], combination[1], combination[2])
        // console.log(boxes[combination[0]].innerText, boxes[combination[1]].innerText, boxes[combination[2]].innerText)
        position1 = boxes[combination[0]].innerText;
        position2 = boxes[combination[1]].innerText;
        position3 = boxes[combination[2]].innerText;
        if ((position1 && position2 && position3) != "") {
            if (position1 === 'O' && position2 === 'O' && position3 === 'O') {
                console.log('Player O win!!');
                winnerSound.play();
                showMsg.innerText = "Winner is Player O !!";
                turn.innerText = "Yeah!! Winner is: O";
                showMsg.style.display = "block";
                newGamebtn.style.display = "block";
                gif.style.display = "block";
                for (let box of boxes) {
                    box.disabled = true;
                };
                return;
            } else if (position1 === 'X' && position2 === 'X' && position3 === 'X') {
                console.log("Player X win!!");
                winnerSound.play();
                showMsg.innerText = "Winner is Player X !!";
                turn.innerText = "Yeah!! Winner is: X";
                showMsg.style.display = "block";
                gif.style.display = "block";
                newGamebtn.style.display = "block";
                for (let box of boxes) {
                    box.disabled = true;
                };
                return;
            };
        };
    };
    // Check for draw
    if (count === 9) {
        console.log('count: ', count);
        draw();
    };
};

//Reset
function resetGame() {
    for (let box of boxes) {
        symO = true;
        box.innerText = '';
        box.disabled = false;
        showMsg.style.display = "none";
        newGamebtn.style.display = "none";
        gif.style.display = "none";
        turn.innerText = "Trun is: O";
        count = 0;
    }
}


//Draw
function draw() {
    // console.log("draw: ", count)
    for (let box of boxes) {
        box.disabled = true;
    }
    turn.innerText = "Draw Match !!";
    showMsg.innerText = "Upps!! Match Is Draw";
    gamePlaySound.pause();
    gameDrawSound.play();
    showMsg.style.display = "block";
    newGamebtn.style.display = "block";
    count = 0;
};
