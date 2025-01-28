import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";
import "swiper/css";

export function InfiniteCarousel({ items }) {
  return (
    <div className="logo-carousel">
      <Swiper
        modules={[Autoplay, Grid]}
        slidesPerView={3}
        grid={{
          rows: 2,
          fill: "row", 
        }}
        allowTouchMove={false}
        loop={true}
        speed={2000}
        autoplay={{
          delay: 0, 
          disableOnInteraction: false, 
          pauseOnMouseEnter: true,
        }}
  
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 2, spaceBetween: 20 },
          1280: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="carrousel-item"
              onClick={() => (window.location.href = item.url)}
            >
              <img src={item.image} alt={item.title} />
              <div className="carrousel-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        .logo-carousel {
          width: 100%;
          margin: 0 auto;
          padding: 2rem 0;
        }
        .carrousel-item {
          display: flex;
          gap: 20px;
          cursor: pointer;
          opacity: 1;
          transition: opacity 1s ease-in-out, transform 1s ease-in-out;
        }
        .carrousel-item.hidden {
          opacity: 0;
          transform: scale(0.8);
        }
        .carrousel-content {
          display: flex;
          flex-direction: column;
        }
        .carrousel-content h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--warn-color);
          font-family: "Roboto", sans-serif;
          width: 60%;
        }
        .carrousel-content p {
          font-size: 1.2rem;
          color: var(--primary-color);
          line-height: 1.5;
          font-weight: 400;
          font-family: "Roboto", sans-serif;
        }
        .carrousel-item img {
          width: 80px;
          height: 80px;
          border-radius: 8px;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .carrousel-item {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }
          .carrousel-item img {
            width: 70px;
            height: 70px;
          }
          .carrousel-content h3 {
            font-size: 1rem;
            width: 100%;
          }
          .carrousel-content p {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default InfiniteCarousel;