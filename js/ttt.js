let buttons = document.querySelectorAll(".btn");
let Arr = [];
let buttonsArr = Array.from(buttons);
let gameEnded = false;
let heading = document.querySelector(".heading_box");
let game = document.querySelector(".game");
let restartBtn = document.createElement("button");
restartBtn.className = "restart_btn";
restartBtn.setAttribute("onclick", "restartGame()");

buttons.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

function handleClick(event) {
  let btn = event.target;
  if (btn.innerText === "" && Arr.length < 9 && !gameEnded) {
    btn.innerText = "X";
    Arr.push("X");
    if (checkWinner()) return;
    if (Arr.length < 9) {
      setTimeout(() => {
        placeO();
      }, 75);
    }
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getEmptyRandomIndex() {
  let randIndex = getRndInteger(0, 8);
  while (buttonsArr[randIndex].innerText !== "") {
    randIndex = getRndInteger(0, 8);
  }
  return randIndex;
}

function placeO() {
  if (gameEnded) return; // Skip placing "O" if the game has ended

  let combinationsArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < combinationsArr.length; i++) {
    const [a, b, c] = combinationsArr[i];
    // To put O if we have chance for 0 to win
    if (
      buttonsArr[a].innerText === "O" &&
      buttonsArr[b].innerText === "O" &&
      buttonsArr[c].innerText === ""
    ) {
      buttonsArr[c].innerText = "O";
      Arr.push("O");
      if (checkWinner()) return;
      return;
    } else if (
      buttonsArr[b].innerText === "O" &&
      buttonsArr[c].innerText === "O" &&
      buttonsArr[a].innerText === ""
    ) {
      buttonsArr[a].innerText = "O";
      Arr.push("O");
      if (checkWinner()) return;
      return;
    } else if (
      buttonsArr[a].innerText === "O" &&
      buttonsArr[c].innerText === "O" &&
      buttonsArr[b].innerText === ""
    ) {
      buttonsArr[b].innerText = "O";
      Arr.push("O");
      if (checkWinner()) return;
      return;
    }
  }
  // To put O if X has a chance to win
  for (let i = 0; i < combinationsArr.length; i++) {
    const [a, b, c] = combinationsArr[i];
    if (
      buttonsArr[a].innerText === "X" &&
      buttonsArr[b].innerText === "X" &&
      buttonsArr[c].innerText === ""
    ) {
      buttonsArr[c].innerText = "O";
      Arr.push("O");
      if (checkWinner()) return;
      return;
    } else if (
      buttonsArr[a].innerText === "X" &&
      buttonsArr[c].innerText === "X" &&
      buttonsArr[b].innerText === ""
    ) {
      buttonsArr[b].innerText = "O";
      Arr.push("O");
      if (checkWinner()) return;
      return;
    } else if (
      buttonsArr[b].innerText === "X" &&
      buttonsArr[c].innerText === "X" &&
      buttonsArr[a].innerText === ""
    ) {
      buttonsArr[a].innerText = "O";
      Arr.push("O");
      if (checkWinner()) return;
      return;
    }
  }

  // If no blocking move, place "O" randomly
  let randIndex = getEmptyRandomIndex();
  buttonsArr[randIndex].innerText = "O";
  Arr.push("O");
  checkWinner();
}

function checkWinner() {
  let combinationsArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < combinationsArr.length; i++) {
    const [a, b, c] = combinationsArr[i];
    if (
      buttonsArr[a].innerText !== "" &&
      buttonsArr[a].innerText === buttonsArr[b].innerText &&
      buttonsArr[a].innerText === buttonsArr[c].innerText
    ) {
      if (buttonsArr[a].innerText === "O") {
        heading.innerHTML = `<h1 class="heading_box"> Ohh No  !! You Lost </h1>`;
        restartBtn.innerText = "Try again";
        game.appendChild(restartBtn);
      } else {
        heading.innerHTML = `<h1 class="heading_box"> Great Job  !! You Won </h1>`;
        restartBtn.innerText = "Play again";
        game.appendChild(restartBtn);
      }

      gameEnded = true;
      buttons.forEach((btn) => {
        btn.removeEventListener("click", handleClick);
      });
      return true;
    }
  }
  if (Arr.length === 9) {
    heading.innerHTML = `<h1 class="heading_box"> Well Tried  !! Match Draw </h1>`;
    restartBtn.innerText = "Try again";
    game.appendChild(restartBtn);
  }
  return false;
}

function restartGame() {
  Arr = [];
  gameEnded = false;
  heading.innerHTML = `<h1 class="heading_box"> Let's Play </h1>`;
  restartBtn.remove();

  buttons.forEach((btn) => {
    btn.innerText = "";
    btn.addEventListener("click", handleClick);
  });
}
