import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; 
import 'swiper/css'; 
import 'swiper/css/pagination'; 
import 'swiper/css/navigation';

export default function Carrusel({ items }) {
  return (
    <div
      className="carrusel-container"
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        speed={2000}
        allowTouchMove={false}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        loop={true}
        navigation
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img src={item.image} alt={item.title} className="slide-image" width={100} height={100} />
              <div className="work-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button
                  className="btn"
                  onClick={() => (window.location.href = item.url)}
                >
                  View Project
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        .carrusel-container {
          width: 100%;
          height: calc(110vh - 100px);
          max-width: 1400px;
          margin: auto;
          padding: 2rem 0;
        }

        .slide {
          display: flex;
          flex-direction: column;
          padding-left: 6rem;
          padding-right: 6rem;
        }

        .slide:hover {
          cursor: pointer;
          transform: scale(1.02);
          transition: transform 0.3s ease;
        }

        .slide-image {
          width: 100%;
          max-width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 5px;
          margin-bottom: 1rem;
        }

        .work-content {
          padding: 0.5rem;
        }

        h3 {
          margin: 0;
          color: var(--warn-color);
          font-family: 'Roboto', sans-serif;
          font-size: 1.5rem;
        }

        p {
          color: var(--primary-color);
          font-family: 'Roboto', sans-serif;
          font-size: 1.5rem;
          margin: 0.5rem 0 1.5rem;
        }

        .btn {
          background-color: var(--warn-color);
          color: var(--primary-color);
          padding: 0.4rem 1rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background-color 0.3s ease;
          margin: 0 0.5rem;
        }

        .swiper-pagination-bullet {
          background-color: var(--primary-color);
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: var(--primary-color);
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            transform: scale(0.6);
          }



          .slide {
            padding-left: 3rem;
            padding-right: 3rem;
          }

          .slide-image {
            max-height: 200px;
          }

          h3 {
            font-size: 1rem;
          }

          p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}
