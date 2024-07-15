let startBox = document.getElementById("startBox");
let logobox = document.querySelector(".hide");
let logos = document.querySelectorAll(".position");

startBox.addEventListener("mouseover", function () {
  startBox.classList.add("rotate");
  logobox.classList.toggle("hide");
});

function gameDetails() {
  for (logo of logos) {
    logo.addEventListener("mouseover", function () {
      console.log("hi");
    });
  }
}

gameDetails();

// startBox.addEventListener("mouseout", function () {
//   startBox.classList.remove("rotate");
//   logos.classList.toggle("hide");
// });
