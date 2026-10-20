import React, { useCallback, useEffect, useState } from 'react';

export default function CertificationGallery({ items }) {
  const images = items.filter((item) => item.image);
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);
  const move = useCallback(
    (step) => setActive((current) => (current + step + images.length) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') move(1);
      if (e.key === 'ArrowLeft') move(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [active, close, move]);

  return (
    <div className="cert-gallery">
      {images.map((item, index) => (
        <button
          key={item.image}
          type="button"
          className="cert-thumb"
          onClick={() => setActive(index)}
        >
          <span className="cert-image">
            <img src={item.image} alt={item.title} loading="lazy" />
            <span className="material-icons cert-zoom" aria-hidden="true">zoom_in</span>
          </span>
          <span className="cert-caption">
            <span className="cert-title">{item.title}</span>
            {item.issuer && <span className="cert-issuer">{item.issuer}</span>}
          </span>
        </button>
      ))}

      {active !== null && (
        <div className="cert-lightbox" role="dialog" aria-modal="true" aria-label={images[active].title} onClick={close}>
          <button type="button" className="cert-btn cert-close" onClick={close} aria-label="Close">
            <span className="material-icons">close</span>
          </button>
          {images.length > 1 && (
            <>
              <button
                type="button"
                className="cert-btn cert-prev"
                onClick={(e) => { e.stopPropagation(); move(-1); }}
                aria-label="Previous"
              >
                <span className="material-icons">chevron_left</span>
              </button>
              <button
                type="button"
                className="cert-btn cert-next"
                onClick={(e) => { e.stopPropagation(); move(1); }}
                aria-label="Next"
              >
                <span className="material-icons">chevron_right</span>
              </button>
            </>
          )}
          <img
            src={images[active].image}
            alt={images[active].title}
            className="cert-full"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style>{`
        .cert-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
          padding: 2rem 0;
        }

        .cert-thumb {
          display: flex;
          flex-direction: column;
          padding: 0;
          text-align: left;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-card);
          background-color: var(--color-surface);
          box-shadow: var(--shadow-card);
          overflow: hidden;
          cursor: zoom-in;
          transition: box-shadow 0.2s, transform 0.3s ease;
        }

        .cert-image {
          position: relative;
          display: block;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-bottom: 1px solid var(--color-border);
        }

        .cert-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .cert-caption {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 1rem 1.25rem;
          flex-grow: 1;
        }

        .cert-title {
          color: var(--color-primary);
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
        }

        .cert-issuer {
          color: var(--color-text-secondary);
          font-family: var(--font-body);
          font-size: 0.9rem;
        }

        .cert-zoom {
          position: absolute;
          right: 12px;
          bottom: 12px;
          padding: 6px;
          border-radius: 50%;
          background-color: var(--color-accent);
          color: white;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .cert-thumb:hover,
        .cert-thumb:focus-visible {
          box-shadow: var(--shadow-card-hover);
          transform: translateY(-4px);
        }

        .cert-thumb:hover .cert-zoom,
        .cert-thumb:focus-visible .cert-zoom {
          opacity: 1;
        }

        .cert-lightbox {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 64px 16px;
          background-color: rgba(10, 37, 64, 0.9);
          cursor: zoom-out;
        }

        .cert-full {
          max-width: min(1200px, 100%);
          max-height: 100%;
          object-fit: contain;
          border-radius: var(--radius-card);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
          cursor: default;
        }

        .cert-btn {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border: none;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.15);
          color: white;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .cert-btn:hover {
          background-color: var(--color-accent);
        }

        .cert-close {
          top: 12px;
          right: 12px;
        }

        .cert-prev {
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
        }

        .cert-next {
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
        }
      `}</style>
    </div>
  );
}
