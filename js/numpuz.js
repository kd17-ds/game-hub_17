const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, undefined];
let btns = document.querySelectorAll(".btn");
let gameHead = document.querySelector(".gameheading");
let game = document.querySelector(".game");
let moves = 0;
let shuffledNumbers = numbers.slice().sort(() => Math.random() - 0.5);
let highestScore = Infinity;

function countInversions(arr) {
  let inversionCount = 0;

  // ignoring the empty space
  let flattened = arr.filter((num) => num !== undefined);

  // Count inversions in the flattened array
  for (let i = 0; i < flattened.length; i++) {
    for (let j = i + 1; j < flattened.length; j++) {
      if (flattened[i] > flattened[j]) {
        inversionCount++;
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

function attachEventListeners() {
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
}

shuffleUntilSolvable();
attachEventListeners();

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
  game.innerHTML = `<h3> Woo Hoo !! You solved it in : ${moves} moves</h3>
  </br> <h4> Highest Score : ${highestScore} moves</h4>
   <button class="btnfinal" onclick="restartGame()">Try Again</button>`;
}

function restartGame() {
  game.innerHTML = `
  <h2 class="gameheading">Play Time</h2>
    <div class="puzzlebox">
      <div class="puzzlerow">
        <button class="btn"></button>
        <button class="btn"></button>
        <button class="btn"></button>
        <button class="btn"></button>
      </div>
      <div class="puzzlerow">
        <button class="btn"></button>
        <button class="btn"></button>
        <button class="btn"></button>
        <button class="btn"></button>
      </div>
      <div class="puzzlerow">
        <button class="btn"></button>
        <button class="btn"></button>
        <button class="btn"></button>
        <button class="btn"></button>
      </div>
      <div class="puzzlerow">
        <button class="btn"></button>
        <button class="btn"></button>
        <button class="btn"></button>
        <button class="btn"></button>
      </div>
    </div>`;

  btns = document.querySelectorAll(".btn");

  gameHead = document.querySelector(".gameheading");
  shuffledNumbers = numbers.slice().sort(() => Math.random() - 0.5);
  moves = 0;
  shuffleUntilSolvable();
  attachEventListeners();
}
