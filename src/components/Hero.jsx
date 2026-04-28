import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Hero() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        modules: [Autoplay, Pagination],
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  }, []);

  return (
    <section className="container">
      <div className="swiper mySwiper" ref={swiperRef}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src="/images/productss.webp" alt="Image 1" />
          </div>
          <div className="swiper-slide">
            <img src="/images/nana.webp" alt="Image 2" />
          </div>
          <div className="swiper-slide">
            <img
              src="/images/DALL·E 2025-02-26 09.34.02 - A promotional landscape image for Nana Apeko Bedbug Spray and Powder. The image features a clean and modern design with a green and white color scheme.webp"
              alt="Image 3"
            />
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default Hero;