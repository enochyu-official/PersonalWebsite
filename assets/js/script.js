// Slides
const nav = document.querySelector('.navbar');
document.documentElement.style.setProperty('--nav-height', nav.offsetHeight + 'px');

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


// Contact Form
const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  formData.append("access_key", "f7db8f47-7025-441a-887f-b9c0a354dad5");

  const originalText = submitBtn.textContent;

  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (response.ok) {
      alert("Success! Your message has been sent.");
      form.reset();
    } else {
      alert("Error: " + data.message);
    }

  } catch (error) {
    alert("Something went wrong. Please try again.");
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});

