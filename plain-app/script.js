let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function nextSlide() {
  slides[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % totalSlides;
  slides[currentIndex].style.display = 'block';
}

// Change slide every 2 seconds
setInterval(nextSlide, 2000);