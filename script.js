// Navbar scroll effect
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Modal Pop-Up
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.about-btn');
  const modals = document.querySelectorAll('.modal');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  modals.forEach(modal => {
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => closeModal(modal));
    }
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(m => closeModal(m));
    }
  });

  function closeModal(modal) {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
});


// Hero slider auto change every 4s
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000);


//Send message script
const form = document.querySelector("form");
const popup = document.getElementById("form-popup");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let data = new FormData(form);
  let response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    showPopup("✅ Thank you! Your message has been sent.");
    form.reset();
  } else {
    showPopup("⚠️ Error occurred. Please reach us at CandAevents.mngt@gmail.com", true);
  }
});

function showPopup(message, isError = false) {
  popup.textContent = message;
  popup.classList.toggle("error", isError);
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 7000); // hides after 4 sec
}


//Scroll-wheel
window.addEventListener("load", function() {
    const scrollContainer = document.querySelector(".scroll-container");

    // Scroll to the middle
    const middlePosition = (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;
    scrollContainer.scrollLeft = middlePosition;
    });


//Portfolio Modal popup image
const modalPortfolio = document.getElementById("modal-portfolio");
const modalPortfolioImg = document.getElementById("modal-portfolio-img");
const closePortfolio = document.querySelector(".close-portfolio");

  document.querySelectorAll(".scroll-item img").forEach(img => {
    img.addEventListener("click", function() {
      modalPortfolio.style.display = "flex";
      modalPortfolioImg.src = this.src;
    });
  });

  closePortfolio.onclick = function() {
    modalPortfolio.style.display = "none";
  }

  window.onclick = function(e) {
    if (e.target === modalPortfolio) modalPortfolio.style.display = "none";
  }