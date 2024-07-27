let startBox = document.getElementById("startBox");
let logobox = document.querySelector(".hiden");
let logos = document.querySelectorAll(".position");
let gamedetails = document.querySelector(".gamedetails");
let gamedescr = document.querySelector(".gamedescr");
let gametitle = document.querySelector(".gametitle");
let playbtn = document.querySelector(".playbtn");
let cross = document.querySelector(".cross");

const games = [
  {
    title: "Guessing Game",
    subtitle: "Test your luck out here",
    description:
      "Enter the realm of numbers and anticipation with our thrilling guessing game! Choose your desired range and let the challenge begin. Utilize your deduction skills to guess the hidden number within the chosen range. With each guess, receive valuable clues to guide you closer to victory.",
    link: "gg.html",
  },
  {
    title: "Memory Game",
    subtitle: "Time to enhance your Memory",
    description:
      "Embark on a journey to sharpen your memory with our captivating memory game! Immerse yourself in a world of challenges as you flip cards to find matching pairs. Test your cognitive skills across various levels of difficulty, from novice to expert. Are you ready to become a memory master?",
    link: "memory.html",
  },
  {
    title: "Number Puzzle",
    subtitle: "Let's check your thinking Speed",
    description:
      "Engage your mind in this captivating number puzzle game! Slide the numbers around to arrange them in sequential order. Test your strategic skills and patience as you strive to solve each level. With every move, unlock new challenges and enjoy the satisfaction of cracking the puzzle!",
    link: "numberpuz.html",
  },
  {
    title: "Simon Says Game",
    subtitle: "Boost your IQ here",
    description:
      "Experience the ultimate test of memory and reflexes with our four-color Simon Says game! Watch as the colors light up in a sequence, then repeat it back in the correct order to progress. Perfect for all ages, this classic game will keep you entertained for hours, whether you're playing solo or competing with friends.",
    link: "simonsays.html",
  },
  {
    title: "Tic Tac Toe",
    subtitle: "Classic game of strategy",
    description:
      "Challenge your friends or the computer in this classic game of Tic Tac Toe! Place your X's or O's in a row, column, or diagonal to win. Perfect for quick games and honing your strategic thinking skills. Relax your mind and enjoy the time with evoliving your thinking skills.",
    link: "tictactoe.html",
  },
  {
    title: "Snake Game",
    subtitle: "Let's build your reflexes",
    description:
      "Challenge your friends or the computer in this classic game of Tic Tac Toe! Place your X's or O's in a row, column, or diagonal to win. Perfect for quick games and honing your strategic thinking skills. Relax your mind and enjoy the time with evoliving your thinking skills.",
    link: "snakeg.html",
  },
];

logos.forEach((logo, index) => {
  logo.addEventListener("click", function () {
    logobox.classList.add("hide");
    startBox.classList.add("hide");
    gametitle.textContent = games[index].title;
    gamedescr.textContent = games[index].description;
    playbtn.href = games[index].link;
    gamedetails.classList.remove("hide");
  });
});
cross.addEventListener("click", function () {
  gamedetails.classList.add("hide");
  logobox.classList.remove("hide");
  startBox.classList.remove("hide");

  startBox.classList.add("zoom-in");
  logobox.classList.add("zoom-in");
  logos.forEach((logo, index) => {
    logo.classList.add("zoom-in");
  });
});
