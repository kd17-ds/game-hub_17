let startBox = document.getElementById("startBox");
let logobox = document.querySelector(".hide");
let logos = document.querySelectorAll(".position");

startBox.addEventListener("mouseover", function () {
  startBox.classList.toggle("rotate");
  logobox.classList.toggle("image_box");
  logobox.classList.toggle("hide");
});

function gameDetails() {
  for (let logo of logos) {
    logo.addEventListener("mouseover", function () {
      console.log("hi");
      console.dir(logo);
    });
  }
}

gameDetails();
