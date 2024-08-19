const picturesArr = [
  "img/mg-imgs/monkey.png",
  "img/mg-imgs/mango.png",
  "img/mg-imgs/moon.png",
  "img/mg-imgs/lemon.png",
  "img/mg-imgs/monkey.png",
  "img/mg-imgs/lion.png",
  "img/mg-imgs/snowman.png",
  "img/mg-imgs/tree.png",
  "img/mg-imgs/mango.png",
  "img/mg-imgs/snowman.png",
  "img/mg-imgs/lion.png",
  "img/mg-imgs/tree.png",
  "img/mg-imgs/butterfly.png",
  "img/mg-imgs/moon.png",
  "img/mg-imgs/lemon.png",
  "img/mg-imgs/butterfly.png",
  "img/mg-imgs/apple.png",
  "img/mg-imgs/apple.png",
  "img/mg-imgs/ball.png",
  "img/mg-imgs/ball.png",
];
let shuffledImages = picturesArr.slice().sort(() => Math.random() - 0.5);
let images = document.querySelectorAll(".mgcard");

function displayImages() {
  images.forEach((image, index) => {
    image.innerHTML = `<img
          src=${shuffledImages[index]}
          alt=""
        />`;
  });
}
displayImages();

setTimeout(() => {
  images.forEach((image, index) => {
    image.classList.add("animate__flipInY");
    image.innerHTML = "";
  });
}, 3000);

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    image.innerHTML = `<img
    src=${shuffledImages[index]}
    alt=""
  />`;

    let img = image.querySelector("img");

    images.forEach((photo, i) => {
      if (i != index && photo.innerHTML !== "") {
        let p = photo.querySelector("img");
        if (p.src !== img.src) {
          setTimeout(() => {
            image.innerHTML = "";
            photo.innerHTML = "";
          }, 1000);
        }
      }
    });
  });
});
