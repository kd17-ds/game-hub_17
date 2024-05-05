let btn1 = document.querySelector("#btn1");
let input = document.querySelector("#maxrange");
let guessnum = document.querySelector(".guessnum");
let outputbox = document.querySelector("#outputbox");

// Triggering Button 1
let maxRange;

btn1.addEventListener("click", function () {
  btn1Press();
});
input.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    btn1Press();
  }
});
btn1.addEventListener("mouseover", function () {
  if (btn1.disabled) {
    alert("You have already Selected the Range");
  }
});

// Function for  execution after button 1 is pressed

function btn1Press() {
  let random = Math.floor(Math.random() * parseInt(input.value)) + 1;
  maxRange = input.value;
  if (input.value == "") {
    alert("You have not entered any number");
  } else {
    guessnum.innerHTML += `
    <p>" Your Selected Range is 1 to ${input.value} "</p>
    <div class="guess-no">
      <label for="guess">Guess the Number : &nbsp; </label>
      <input type="number" id="guess" onkeypress="if(event.keyCode === 13){guessButton(${random} , ${maxRange})}" name="guess" />
      <button class="btn" id="btn2" onclick="guessButton(
        ${random}, ${maxRange}
      )">Guess</button>
    </div>`;

    btn1.disabled = true;
    input.value = "";
  }
}

let buttonpress = 0;

function guessButton(random, maxRange) {
  let input2 = document.querySelector("#guess");
  let guessValue = parseInt(input2.value);

  if (input2.value == "") {
    alert("You have not guessed any number");
  } else {
    buttonpress = buttonpress + 1;

    if (random === guessValue) {
      outputbox.innerHTML = `
        <h4>Congratulations!! Your guess ${guessValue} is Correct</h4>
        <h3>Guess Count : ${buttonpress}</h3>
        <button class="btn btn3" onclick="refresh()">Restart</button>
        `;
      input2.disabled = true;
      btn2.disabled = true;
      input2.value = "";
    } else if (guessValue > maxRange || guessValue <= 0) {
      outputbox.innerHTML = `
    <h4>Ohh!! You entered a Wrong number</h4>
    <p>Hint : Enter a number between 1 & ${maxRange}</p>
    <h3>Guess Count : ${buttonpress}</h3>
    <button class="btn btn3" onclick="refresh()">Quit</button>
    `;
      input2.value = "";
    } else if (random > guessValue) {
      outputbox.innerHTML = `
    <h4>Ohh!! Your guess ${guessValue} is Incorrect</h4>
    <p>Hint : Guess a Larger number</p>
    <h3>Guess Count : ${buttonpress}</h3>
    <button class="btn btn3" onclick="refresh()">Quit</button>
    `;
      input2.value = "";
    } else if (random < guessValue) {
      outputbox.innerHTML = `
    <h4>Ohh!! Your guess ${guessValue} is Incorrect</h4>
    <p>Hint : Guess a Smaller number</p>
    <h3>Guess Count : ${buttonpress}</h3>
    <button class="btn btn3" onclick="refresh()">Quit</button>
    `;
      input2.value = "";
    }
  }
}
function refresh() {
  guessnum.innerHTML = "";
  outputbox.innerHTML = "";
  document.querySelector("#maxrange").disabled = false;
  document.querySelector("#btn1").disabled = false;
  buttonpress = 0;
}
