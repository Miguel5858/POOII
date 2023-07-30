let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

showSlide(currentSlide);

function showSlide(n) {
  if (n >= slides.length) {
    currentSlide = 0;
  }
  if (n < 0) {
    currentSlide = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
    slides[i].style.zIndex = "0";
  }
  slides[currentSlide].style.opacity = "1";
  slides[currentSlide].style.zIndex = "1";
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    prevSlide();
  } else if (event.key === "ArrowRight") {
    nextSlide();
  }
});
