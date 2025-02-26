let index = 0;

function showSlides() {
    let slides = document.querySelector(".slides");
    let totalSlides = document.querySelectorAll(".slide").length;

    index = (index + 1) % totalSlides;
    let offset = -index * 100 + "%";

    slides.style.transform = "translateX(" + offset + ")";
}


setInterval(showSlides, 3000);



// swiper for testimonials
let position = 0;
const testimonials = document.querySelectorAll(".testimonial");

function changeTestimonial(direction) {
    testimonials[position].classList.remove("active");
    index = (position + direction + testimonials.length) % testimonials.length;
    testimonials[position].classList.add("active");
}

// Function to open the form
function openForm() {
    document.getElementById("contactForm").style.display = "flex";
}

// Function to close the form
function closeForm() {
    document.getElementById("contactForm").style.display = "none";
}



// testy
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Swiper for testimonials
    const swiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
      // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },  
    });
});

  