let buttons = document.querySelectorAll(".btn");
let Arr = [];
let buttonsArr = Array.from(buttons);

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "" && Arr.length <= 8) {
      btn.innerText = "X";
      Arr.push("X");
    }
    if (Arr.length <= 8) {
      let randIndex = getRndInteger(0, 8);
      while (buttonsArr[randIndex].innerText !== "") {
        randIndex = getRndInteger(0, 8);
      }

      setTimeout(() => {
        buttonsArr[randIndex].innerText = "O";
        Arr.push("O");
        checkWinner();
      }, 250);
    }
  });
});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkWinner() {
  if (
    (buttonsArr[0].innerText !== "" &&
      buttonsArr[0].innerText !== undefined &&
      buttonsArr[0].innerText === buttonsArr[1].innerText &&
      buttonsArr[1].innerText === buttonsArr[2].innerText) || // First row
    (buttonsArr[3].innerText !== "" &&
      buttonsArr[3].innerText !== undefined &&
      buttonsArr[3].innerText === buttonsArr[4].innerText &&
      buttonsArr[4].innerText === buttonsArr[5].innerText) || // Second row
    (buttonsArr[6].innerText !== "" &&
      buttonsArr[6].innerText !== undefined &&
      buttonsArr[6].innerText === buttonsArr[7].innerText &&
      buttonsArr[7].innerText === buttonsArr[8].innerText) || // Third row
    (buttonsArr[0].innerText !== "" &&
      buttonsArr[0].innerText !== undefined &&
      buttonsArr[0].innerText === buttonsArr[3].innerText &&
      buttonsArr[3].innerText === buttonsArr[6].innerText) || // First column
    (buttonsArr[1].innerText !== "" &&
      buttonsArr[1].innerText !== undefined &&
      buttonsArr[1].innerText === buttonsArr[4].innerText &&
      buttonsArr[4].innerText === buttonsArr[7].innerText) || // Second column
    (buttonsArr[2].innerText !== "" &&
      buttonsArr[2].innerText !== undefined &&
      buttonsArr[2].innerText === buttonsArr[5].innerText &&
      buttonsArr[5].innerText === buttonsArr[8].innerText) || // Third column
    (buttonsArr[0].innerText !== "" &&
      buttonsArr[0].innerText !== undefined &&
      buttonsArr[0].innerText === buttonsArr[4].innerText &&
      buttonsArr[4].innerText === buttonsArr[8].innerText) || // Diagonal
    (buttonsArr[2].innerText !== "" &&
      buttonsArr[2].innerText !== undefined &&
      buttonsArr[2].innerText === buttonsArr[4].innerText &&
      buttonsArr[4].innerText === buttonsArr[6].innerText) // Diagonal
  ) {
    console.log("Winner is found");
  }
}
