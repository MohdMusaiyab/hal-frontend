// ==============================For Header and Login Functionality==============================
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('loginModal');
    const loginBtn = document.querySelector('.login-btn');
    const closeBtn = document.querySelector('.close');
  
    loginBtn.addEventListener('click', function() {
      modal.style.display = 'block';
    });
  
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Here you can add your login logic
      console.log('PB Number:', document.getElementById('pbno').value);
      console.log('Password:', document.getElementById('password').value);
      modal.style.display = 'none';
    });
  });



// JavaScript for Slider Functionality

let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const dots = document.querySelector('.dots');

// Create dots
slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.addEventListener('click', () => goToSlide(index));
  dots.appendChild(dot);
});

const allDots = document.querySelectorAll('.dot');

function showSlides() {
  slides.forEach((slide, index) => {
    slide.style.display = 'none';
    allDots[index].classList.remove('active');
  });
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  allDots[slideIndex - 1].classList.add('active');
  
  // Reset and start fade-in animation
  slides[slideIndex - 1].style.animation = 'none';
  slides[slideIndex - 1].offsetHeight; // Trigger reflow
  slides[slideIndex - 1].style.animation = 'fadeIn 1s ease-in-out ';
  
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function goToSlide(index) {
  slideIndex = index;
  showSlides();
}

// Initialize the slider
showSlides();

// Add event listeners for prev and next buttons
document.querySelector('.prev').addEventListener('click', () => {
  slideIndex -= 2;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlides();
});

document.querySelector('.next').addEventListener('click', () => {
  showSlides();
});
// ====================For Marqueee========================
document.addEventListener('DOMContentLoaded', () => {
    const marquee = document.querySelector('.marquee');
    const cards = document.querySelectorAll('.birthday-card');

    // Clone the cards to create a seamless loop
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        marquee.appendChild(clone);
    });

    // Pause animation on hover
    marquee.addEventListener('mouseenter', () => {
        marquee.style.animationPlayState = 'paused';
    });

    marquee.addEventListener('mouseleave', () => {
        marquee.style.animationPlayState = 'running';
    });
});


// ====================For Retirement Section========================
function animateEmployeeCards() {
    const cards = document.querySelectorAll('.employee-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    cards.forEach(card => {
      observer.observe(card);
    });
  }
  
  // Call the function when the page loads
  window.addEventListener('load', animateEmployeeCards);