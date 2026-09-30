import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; 
import 'swiper/css'; 
import 'swiper/css/pagination'; 
import 'swiper/css/navigation';

export default function Carrusel({ items, buttonLabel }) {
  const shouldLoop = items.length > 1;
  return (
    <div
      className="carrusel-container"
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        initialSlide={0}
        pagination={{ clickable: true }}
        speed={500}
        allowTouchMove={true}
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        navigation
        loop={shouldLoop}
        breakpoints={{
          768: { 
            slidesPerView: Math.min(2, items.length), 
            spaceBetween: 20 
          },
          1024: { 
            slidesPerView: Math.min(3, items.length), 
            spaceBetween: 30 
          },
          1400: { 
            slidesPerView: Math.min(4, items.length), 
            spaceBetween: 40 
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide card">
              <div className="image-wrapper">
                  <img src={item.image} alt={item.title} className="slide-image" />
              </div>
              <div className="work-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.badges && item.badges.length > 0 && (
                  <div className="badges-container">
                    {item.badges.map((badge, idx) => (
                      <span key={idx} className="badge">{badge}</span>
                    ))}
                  </div>
                )}
                <div className="button-container">
                    <button
                      className="btn"
                      onClick={() => (window.location.href = item.url)}
                    >
                    {buttonLabel}
                    </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        .carrusel-container {
          width: 100%;
          max-width: 1800px;
          margin: auto;
          padding: 2rem 0;
        }

        .slide {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-card);
          box-shadow: var(--shadow-card);
          overflow: hidden;
          transition: box-shadow 0.2s, transform 0.3s ease;
        }

        .slide:hover {
          box-shadow: var(--shadow-card-hover);
        }

        .image-wrapper {
            width: 100%;
            height: 200px;
            overflow: hidden;
            border-bottom: 1px solid var(--color-border);
        }

        .slide-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .work-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        h3 {
          margin: 0 0 0.5rem 0;
          color: var(--color-primary);
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 700;
        }

        p {
          color: var(--color-text-secondary);
          font-family: var(--font-body);
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0 0 1rem 0;
          flex-grow: 1;
        }

        .badges-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .badge {
          background-color: var(--color-accent-bg);
          color: var(--color-accent);
          border-radius: var(--radius-badge);
          padding: 4px 10px;
          font-size: 12px;
          font-weight: 600;
          font-family: var(--font-body);
        }

        .button-container {
          margin-top: auto;
        }

        .btn {
          background-color: var(--color-accent);
          color: white;
          padding: 0.6rem 1.2rem;
          border: none;
          border-radius: var(--radius-button);
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          font-family: var(--font-body);
          transition: background-color 0.2s;
          width: 100%;
        }
        
        .btn:hover {
            background-color: var(--color-accent-hover);
        }
      `}</style>
    </div>
  );
}
