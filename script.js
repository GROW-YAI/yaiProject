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

// testimonial slider

// to open form
function openForm() {
  document.getElementById("contactForm").style.display = "flex";
}

// to close form
function closeForm() {
  document.getElementById("contactForm").style.display = "none";
}

const container = document.querySelector(".testim-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

nextBtn.addEventListener("click", () => {
  if (index < 2) {
    index++;
  } else {
    index = 0;
  }
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
  } else {
    index = 2;
  }
  updateCarousel();
});

function updateCarousel() {
  const cardWidth = document.querySelector(".card").offsetWidth;
  container.style.transform = `translateX(-${index * cardWidth}px)`;
}

// hamburger
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

// contact us form
// Contact Us Form
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const form = this;
    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          alert("Thank you! Your message has been sent.");
          form.reset();
        } else {
          alert("Yikes! Something went wrong.");
        }
      })
      .catch(() => {
        alert("Network error! Please try again later.");
      });
  });
