const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let btns = document.querySelectorAll(".btn");

const shuffledNumbers = numbers.slice().sort(() => Math.random() - 0.5);

function shuffleNumbers() {
  btns.forEach((btn, index) => {
    if (shuffledNumbers[index] !== undefined) {
      btn.innerText = shuffledNumbers[index];
    } else {
      btn.innerText = "";
    }
  });
}

shuffleNumbers();

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (btn.innerText !== "") {
      console.log(btn, index);
    }
  });
});
