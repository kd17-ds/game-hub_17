let startBtnbox = document.querySelector(".startbtn");
let startbtn = document.querySelector("#btn");
let simongame = document.querySelector(".simongame");
let giveseq = [];
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");
let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let colorArr = ["green", "red", "yellow", "blue"];
let userSeq = [];
let level = 0;
let lvl = document.querySelector("#lvl");

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

startbtn.addEventListener("click", function () {
  startBtnbox.classList.toggle("hide");
  simongame.classList.toggle("hide");

  levelUp();
  userClick();
});

function flashcolor(colorname) {
  colorname.classList.add("animate__flash");
  setTimeout(() => {
    colorname.classList.remove("animate__flash");
  }, 700);
}

function userClick() {
  let colors = document.querySelectorAll(".color");
  for (clr of colors) {
    clr.addEventListener("click", clickUser);
  }
}

function clickUser() {
  console.log("box click");
  let clickedbox = this;
  flashcolor(clickedbox);
  let clickedColor = clickedbox.getAttribute("id");
  console.log(clickedColor);
  userSeq.push(clickedColor);
  checkAns(userSeq.length - 1);
  console.log(userSeq);
  console.log(giveseq);
}

function checkAns(index) {
  if (userSeq[index] === giveseq[index]) {
    if (userSeq.length === giveseq.length) {
      setTimeout(levelUp, 1000);
    }
  }
}

function levelUp() {
  console.log("inside level up");
  userSeq = [];
  level++;
  lvl.innerText = `Level : ${level}`;

  let randnum = getRndInteger(0, 3);
  giveseq.push(colorArr[randnum]);
  let colorName = document.getElementById(colorArr[randnum]);
  flashcolor(colorName);
}
