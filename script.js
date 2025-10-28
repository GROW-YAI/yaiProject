// ==========================
// SWIPER INITIALIZATION
// ==========================
const swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ==========================
// FORM OPEN/CLOSE LOGIC
// ==========================
function openForm() {
  document.getElementById("contactForm").style.display = "flex";
}

function closeForm() {
  document.getElementById("contactForm").style.display = "none";
}

// ==========================
// TESTIMONIAL CAROUSEL
// ==========================
const container = document.querySelector(".testim-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

if (nextBtn && prevBtn && container) {
  nextBtn.addEventListener("click", () => {
    index = (index + 1) % 3;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + 3) % 3;
    updateCarousel();
  });

  function updateCarousel() {
    const cardWidth = document.querySelector(".card").offsetWidth;
    container.style.transform = `translateX(-${index * cardWidth}px)`;
  }
}

// ==========================
// HAMBURGER MENU LOGIC
// ==========================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Close menu when a link is clicked
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
}

// ==========================
// CONTACT FORM SUBMISSION
// ==========================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(contactForm);

    fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          alert("Thank you! Your message has been sent.");
          contactForm.reset();
        } else {
          alert("Yikes! Something went wrong.");
        }
      })
      .catch(() => {
        alert("Network error! Please try again later.");
      });
  });
}
