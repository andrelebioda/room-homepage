import "../scss/style.scss";

const imageWrapper = document.querySelector(".image-wrapper");
const imageSlides = Array.from(
  document.querySelectorAll(".image-wrapper .image")
);
const prevButton = document.getElementById("slide-prev");
const nextButton = document.getElementById("slide-next");

// imageWrapper.style.width = `${imageWrapper.clientWidth * imageSlides.length}px`;

let activeSlide = 0;

nextButton.addEventListener("click", () => slider("next"));
prevButton.addEventListener("click", () => slider("prev"));

function slider(direction) {
  let slideWidth = imageWrapper.clientWidth;

  if (direction == "next") activeSlide += 1;
  if (direction == "prev") activeSlide -= 1;

  if (activeSlide == imageSlides.length) activeSlide = 0;
  if (activeSlide == -1) activeSlide = imageSlides.length - 1;

  imageWrapper.style.transform = `translateX(-${slideWidth * activeSlide}px)`;
}
