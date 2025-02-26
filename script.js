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


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all buttons (if applicable)
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the selected tab content
    document.getElementById(cityName).style.display = "block";

    // Add active class to clicked button (if applicable)
    if (evt) {
        evt.currentTarget.classList.add("active");
    }
}



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

  