let buttons = document.querySelectorAll(".btn");
let Arr = [];
let buttonsArr = Array.from(buttons);
let gameEnded = false;

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
      }, 80);
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
    // To put O if X has a chance to win
    else if (
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
      console.log(`Winner: ${buttonsArr[a].innerText}`);
      gameEnded = true;
      buttons.forEach((btn) => {
        btn.removeEventListener("click", handleClick);
      });
      return true;
    }
  }
  return false;
}
