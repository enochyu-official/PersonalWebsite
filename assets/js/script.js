// Slides
let currentSlideNumber = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(n) {
  if (n >= slides.length) {
    currentSlideNumber = 0;
  }
  if (n < 0) {
    currentSlideNumber = slides.length - 1;
  }
  
  slides.forEach(slide => {
    slide.classList.remove('active');
  });
  
  dots.forEach(dot => {
    dot.classList.remove('active');
  });
  
  slides[currentSlideNumber].classList.add('active');
  dots[currentSlideNumber].classList.add('active');
}

function changeSlide(n) {
  currentSlideNumber += n;
  showSlide(currentSlideNumber);
}

function currentSlide(n) {
  currentSlideNumber = n;
  showSlide(currentSlideNumber);
}

let slideInterval = setInterval(() => {
  currentSlideNumber++;
  showSlide(currentSlideNumber);
}, 3800);

document.querySelectorAll('.slider-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      currentSlideNumber++;
      showSlide(currentSlideNumber);
    }, 3800);
  });
});

document.querySelectorAll('.dot').forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
      currentSlideNumber++;
      showSlide(currentSlideNumber);
    }, 3800);
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


// Navbar
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  const path = window.location.pathname;

  if (href === '/' && path === '/') {
    link.classList.add('active');
  } 

  else if (href !== '/' && path.startsWith(href)) {
    link.classList.add('active');
  }
});


// Contact
function handleSubmit() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !subject || !message) {
    alert('Please fill in all fields');
    return;
  }

  alert('Thank you for your message!! I will get back to you soon.');
  
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('subject').value = '';
  document.getElementById('message').value = '';
}

// Burger
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
  
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });
  
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    }
  });
}

// Accordion
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
