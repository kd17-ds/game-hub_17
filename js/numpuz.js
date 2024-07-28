const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, undefined];
let btns = document.querySelectorAll(".btn");
let sequence = [];

const shuffledNumbers = numbers.slice().sort(() => Math.random() - 0.5);
console.log(shuffledNumbers);
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
    // Movement for next block
    if (
      btn.innerText !== "" &&
      (index + 1) % 4 !== 0 &&
      index + 1 < btns.length &&
      btns[index + 1].innerText === ""
    ) {
      btns[index + 1].innerText = btn.innerText;
      btn.innerText = "";
    }

    // Movement for below box
    if (
      btn.innerText !== "" &&
      index + 4 < btns.length &&
      btns[index + 4].innerText === "" &&
      index <= 11
    ) {
      btns[index + 4].innerText = btn.innerText;
      btn.innerText = "";
    }

    //Movement for Upper box
    if (
      btn.innerText !== "" &&
      index - 4 >= 0 &&
      btns[index - 4].innerText === ""
    ) {
      btns[index - 4].innerText = btn.innerText;
      btn.innerText = "";
    }

    //Movement for back block
    if (
      btn.innerText !== "" &&
      index - 1 >= 0 &&
      index % 4 !== 0 &&
      btns[index - 1].innerText === ""
    ) {
      btns[index - 1].innerText = btn.innerText;
      btn.innerText = "";
    }
  });
});

// function checkAns() {
//   btns.forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//       sequence = [];
//       btns.forEach((button, i) => {
//         sequence.push(button.innerText);
//       });
//       console.log(sequence);
//       if (numbers == sequence) {
//         console.log("Systum");
//       } else {
//         console.log("no system");
//       }
//     });
//   });
// }
// checkAns();
