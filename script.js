const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
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

  