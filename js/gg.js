let input = document.querySelector("#maxrange");
let btn1 = document.querySelector("#btn1");
let game = document.querySelector(".game");
let btn2 = document.querySelector("#btn2");

let outputbox = document.querySelector("#outputbox");

btn1.addEventListener("click", function () {
  game.innerHTML += `<p>" Your Seletcted Range is 1 to ${input.value}, Time to guess the number "</p>
  <div class="guess-no">
  <label for="guess">Guess the Number : &nbsp; </label>
  <input type="number" id="guess" name="guess" />
  <button class="btn" id="btn2" onclick="guessButton()">Guess</button>
</div>`;
});
let random = Math.floor(Math.random() * input.value) + 1;
function guessButton() {
  let input2 = document.querySelector("#guess");
  console.log(random);
  console.log(input2.value);
  if (random === input2.value) {
    outputbox.innerHTML = `
        <h4>Congratulations!! Your guess ${input2.value} is Correct</h4>
        `;
  } else if (random > input2.value) {
    outputbox.innerHTML = `
    <h4>Ohh!! Your guess ${input2.value} is Incorrect</h4>
    <p>Hint : Guess a Larger number</p>
    `;
  } else if (random < input2.value) {
    outputbox.innerHTML = `
    <h4>Ohh!! Your guess ${input2.value} is Incorrect</h4>
    <p>Hint : Guess a Smaller number</p>
    `;
  } else {
    outputbox.innerHTML = `
    <h4>Ohh!! Your entered a Wrong number</h4>
    <p>Hint : Enter a number between 1 & ${input.value}</p>
    `;
  }
}
