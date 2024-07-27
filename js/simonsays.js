let startBtnbox = document.querySelector(".startbtn");
let startbtn = document.querySelector("#btn");
let simongame = document.querySelector(".sghead");
let giveseq = [];
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");
let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let colorArr = ["green", "red", "yellow", "blue"];
let userSeq = [];
let level = 0;
let lvl = document.querySelector("#lvl");
let result = document.querySelector(".result");

// Switching boxes on start press

startbtn.addEventListener("click", function () {
  startBtnbox.classList.toggle("hide");
  simongame.classList.toggle("hide");

  colorDecider();
  userClick();
});

// Generating a random integer to flash color

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Creating a random color to flash

function colorDecider() {
  userSeq = [];
  console.log("inside level up");
  let randnum = getRndInteger(0, 3);
  giveseq.push(colorArr[randnum]);
  let colorName = document.getElementById(colorArr[randnum]);
  flashcolor(colorName);
}

// Flashing a color Randomly

function flashcolor(colorname) {
  colorname.classList.add("colorFlash");
  setTimeout(() => {
    colorname.classList.remove("colorFlash");
  }, 1000);
}

// Flashing a color on click

function flashclickedcolor(colorname) {
  colorname.classList.add("userFlash");
  setTimeout(() => {
    colorname.classList.remove("userFlash");
  }, 250);
}

// Creating all colors clickable

function userClick() {
  let colors = document.querySelectorAll(".color");
  for (clr of colors) {
    clr.addEventListener("click", checkClick);
  }
}

// Functionality on user click

function checkClick() {
  console.log("box click");
  let clickedbox = this;
  console.log(clickedbox);
  flashclickedcolor(clickedbox);
  let clickedColor = clickedbox.getAttribute("id");
  console.log(clickedColor);
  userSeq.push(clickedColor);
  checkAns(userSeq.length - 1);
  console.log(userSeq);
  console.log(giveseq);
}

// Checking the correct sequence

function checkAns(index) {
  if (userSeq[index] === giveseq[index]) {
    console.log("Same element");
    if (userSeq.length === giveseq.length) {
      console.log("same length");
      setTimeout(colorDecider, 1200);
      level++;
      console.log(level);
      lvl.innerText = `Sequence is Correct, You reached Level : ${level} `;
    }
  } else {
    let highscore = highScore(level);
    result.innerHTML = ` <h2>" Ohh !! Wrong sequence Entered "</h2>
    <h4>Your Score : ${level}</h4>
    <h4>Highest Score : ${highscore}</h4>
    <button id="resultbtn" onclick = "onRestart()"> Restart </button>`;

    simongame.classList.toggle("hide");
    result.classList.toggle("hide");
  }
}

//Calculating higscore

let highestScore = 0;

function highScore(level) {
  if (level > highestScore) {
    highestScore = level;
  }
  return highestScore;
}

// Restarting game

function onRestart() {
  result.classList.toggle("hide");
  startBtnbox.classList.toggle("hide");
  level = 0;
  userSeq = [];
  giveseq = [];
  lvl.innerText = `Let's Go `;
}
