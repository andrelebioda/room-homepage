import "../scss/style.scss";

const imageWrapper = document.querySelector(".image-wrapper");
const imageSlides = [...document.querySelectorAll(".image-wrapper .image")];
const contenBoxes = [...document.querySelectorAll(".content-box")];
const prevButton = document.getElementById("slide-prev");
const nextButton = document.getElementById("slide-next");

let activeSlide = 1;
let slideWidth;

function initSlider() {
  slideWidth = imageWrapper.clientWidth;
  imageSlides.forEach((slide) => (slide.style.minWidth = `${slideWidth}px`));

  showContent(activeSlide);
}
initSlider();

function slideNext() {
  activeSlide += 1;
  if (activeSlide > imageSlides.length) activeSlide = 1;

  imageWrapper.style.transform = `translateX(-${
    slideWidth * (activeSlide - 1)
  }px)`;
  showContent(activeSlide);
}

function slidePrev() {
  activeSlide -= 1;
  if (activeSlide < 1) activeSlide = imageSlides.length;

  imageWrapper.style.transform = `translateX(-${
    slideWidth * (activeSlide - 1)
  }px)`;
  showContent(activeSlide);
}

function showContent(activeSlide) {
  contenBoxes.forEach((box, idx) => {
    activeSlide == idx + 1
      ? box.classList.add("active")
      : box.classList.remove("active");
  });
}

nextButton.addEventListener("click", slideNext);
prevButton.addEventListener("click", slidePrev);

// resize window & init slider again
window.onresize = () => initSlider();
