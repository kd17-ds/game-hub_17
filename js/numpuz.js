const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let btns = document.querySelectorAll(".btn");

function shuffleNumbers() {
  const shuffledNumbers = numbers.slice().sort(() => Math.random() - 0.5);
  console.log(shuffledNumbers);
  btns.forEach((btn, index) => {
    if (shuffledNumbers[index] !== undefined) {
      btn.innerText = shuffledNumbers[index];
    } else {
      btn.innerText = "";
    }
  });
}

shuffleNumbers();
