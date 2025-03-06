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

var swiperr = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  // to open form
  function openForm() {
    document.getElementById('contactForm').style.display='flex';
  }

  // to close form
  function closeForm() {
    document.getElementById("contactForm").style.display='none';
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
