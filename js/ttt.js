let buttons = document.querySelectorAll(".btn");
let Arr = [];
let buttonsArr = Array.from(buttons);

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (btn.innerText === "" && Arr.length <= 8) {
      btn.innerText = "X";
      Arr.push("X");

      if (Arr.length <= 8) {
        let randIndex = getRndInteger(0, 8);
        while (buttonsArr[randIndex].innerText !== "") {
          randIndex = getRndInteger(0, 8);
        }

        setTimeout(() => {
          buttonsArr[randIndex].innerText = "O";
          Arr.push("O");
          checkWinner();
        }, 80);
      }
      checkWinner();
    }
  });
});

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
      buttonsArr[a].innerText !== undefined &&
      buttonsArr[a].innerText === buttonsArr[b].innerText &&
      buttonsArr[b].innerText === buttonsArr[c].innerText
    ) {
      console.log("systum");
      return;
    }
  }
}
