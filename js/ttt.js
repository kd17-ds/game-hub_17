// let buttons = document.querySelectorAll(".btn");
// let Arr = [];

// buttons.forEach((btn, index) => {
//   let buttonsArr = Array.from(buttons);
//   let randIndex = getRndInteger(0, 8);
//   btn.addEventListener("click", () => {
//     if (btn.innerText === "") {
//       btn.innerText = "X";
//       Arr.push("X");

//       while (
//         index !== randIndex &&
//         buttonsArr[randIndex].innerText === "" &&
//         buttonsArr[randIndex].innerText !== "O" &&
//         buttonsArr[randIndex].innerText !== "X"
//       ) {
//         randIndex = getRndInteger(0, 8);
//       }
//       setTimeout(() => {
//         buttonsArr[randIndex].innerText = "O";
//         Arr.push("O");
//         console.log(Arr);
//       }, 1000);
//     }
//   });
// });

// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
