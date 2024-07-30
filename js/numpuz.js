const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, undefined];
let btns = document.querySelectorAll(".btn");
let gameHead = document.querySelector(".gameheading");
let game = document.querySelector(".game");
let moves = 0;
let shuffledNumbers = numbers.slice().sort(() => Math.random() - 0.5);
let highestScore = Infinity;

function countInversions(arr) {
  let inversionCount = 0;
  const gridSize = 4; // 4x4 grid

  // Convert 1D array to 2D grid
  let grid = [];
  for (let i = 0; i < arr.length; i += gridSize) {
    grid.push(arr.slice(i, i + gridSize));
  }

  // Count inversions within each row
  for (let row of grid) {
    for (let i = 0; i < row.length; i++) {
      for (let j = i + 1; j < row.length; j++) {
        if (row[i] !== undefined && row[j] !== undefined && row[i] > row[j]) {
          inversionCount++;
        }
      }
    }
  }
  return inversionCount;
}

function shuffleUntilSolvable() {
  let inversionCount = countInversions(shuffledNumbers);
  while (inversionCount % 2 !== 0) {
    shuffledNumbers = numbers.slice().sort(() => Math.random() - 0.5);
    inversionCount = countInversions(shuffledNumbers);
  }
  shuffleNumbers();
}

function shuffleNumbers() {
  btns.forEach((btn, index) => {
    if (shuffledNumbers[index] !== undefined) {
      btn.innerText = shuffledNumbers[index];
    } else {
      btn.innerText = "";
    }
  });
}

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
      moves++;
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
      moves++;
    }

    // Movement for Upper box
    if (
      btn.innerText !== "" &&
      index - 4 >= 0 &&
      btns[index - 4].innerText === ""
    ) {
      btns[index - 4].innerText = btn.innerText;
      btn.innerText = "";
      moves++;
    }

    // Movement for back block
    if (
      btn.innerText !== "" &&
      index - 1 >= 0 &&
      index % 4 !== 0 &&
      btns[index - 1].innerText === ""
    ) {
      btns[index - 1].innerText = btn.innerText;
      btn.innerText = "";
      moves++;
    }
    gameHead.innerText = ` Total Moves : ${moves}`;
    checkIfSolved();
  });
});

shuffleUntilSolvable();

function checkIfSolved() {
  // Convert button states to an array
  const currentNumbers = Array.from(btns).map((btn) =>
    btn.innerText === "" ? undefined : parseInt(btn.innerText)
  );

  // Compare currentNumbers with numbers using a for loop
  for (let i = 0; i < currentNumbers.length; i++) {
    if (currentNumbers[i] !== numbers[i]) {
      // If any number does not match, the puzzle is not solved
      return;
    }
  }
  if (moves < highestScore) {
    highestScore = moves;
  }
  game.innerHTML = `<h3> Woo Hoo !! You solved it in : ${moves} </h3>
  </br> <h3>The Highest Score was ${highestScore}</h3>
   <button class="btnfinal" onclick = "restartGame()">Try Again</button>`;
}

function restartGame() {
  shuffleUntilSolvable();
  moves = 0;
}
