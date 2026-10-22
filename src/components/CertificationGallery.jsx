import React, { useCallback, useEffect, useRef, useState } from 'react';

const defaultLabels = { close: 'Close', prev: 'Previous', next: 'Next' };

export default function CertificationGallery({ items, verifyLabel = 'Verify', labels = defaultLabels }) {
  const images = items.filter((item) => item.image);
  const [active, setActive] = useState(null);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const openerRef = useRef(null);

  const close = useCallback(() => setActive(null), []);
  const move = useCallback(
    (step) => setActive((current) => (current + step + images.length) % images.length),
    [images.length]
  );

  const isOpen = active !== null;

  // Al abrir, el foco entra al diálogo; al cerrar, vuelve a la miniatura que lo abrió
  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    return () => openerRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') move(1);
      if (e.key === 'ArrowLeft') move(-1);
      if (e.key === 'Tab') {
        // mantiene el foco dentro del diálogo mientras está abierto
        const focusable = dialogRef.current.querySelectorAll('button');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close, move]);

  return (
    <div className="cert-gallery">
      {images.map((item, index) => (
        <div key={item.image} className="cert-card">
        <button
          type="button"
          className="cert-thumb"
          aria-haspopup="dialog"
          onClick={(e) => { openerRef.current = e.currentTarget; setActive(index); }}
        >
          <span className="cert-image">
            <img src={item.image} alt="" loading="lazy" />
            <span className="material-icons cert-zoom" aria-hidden="true">zoom_in</span>
          </span>
          <span className="cert-caption">
            <span className="cert-title">{item.title}</span>
            {item.issuer && (
              <span className="cert-issuer">
                {[item.issuer, item.date].filter(Boolean).join(' · ')}
              </span>
            )}
            {item.credentialId && <span className="cert-id">ID: {item.credentialId}</span>}
          </span>
        </button>
        {item.verifyUrl && (
          <a className="cert-verify" href={item.verifyUrl} target="_blank" rel="noopener">
            {verifyLabel}
            <span className="material-icons" aria-hidden="true">open_in_new</span>
          </a>
        )}
        </div>
      ))}

      {active !== null && (
        <div ref={dialogRef} className="cert-lightbox" role="dialog" aria-modal="true" aria-label={images[active].title} onClick={close}>
          <button ref={closeRef} type="button" className="cert-btn cert-close" onClick={close} aria-label={labels.close}>
            <span className="material-icons" aria-hidden="true">close</span>
          </button>
          {images.length > 1 && (
            <>
              <button
                type="button"
                className="cert-btn cert-prev"
                onClick={(e) => { e.stopPropagation(); move(-1); }}
                aria-label={labels.prev}
              >
                <span className="material-icons" aria-hidden="true">chevron_left</span>
              </button>
              <button
                type="button"
                className="cert-btn cert-next"
                onClick={(e) => { e.stopPropagation(); move(1); }}
                aria-label={labels.next}
              >
                <span className="material-icons" aria-hidden="true">chevron_right</span>
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

        .cert-card {
          display: flex;
          flex-direction: column;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-card);
          background-color: var(--color-surface);
          box-shadow: var(--shadow-card);
          overflow: hidden;
          transition: box-shadow 0.2s, transform 0.3s ease;
        }

        .cert-thumb {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          padding: 0;
          text-align: left;
          border: none;
          background: none;
          color: inherit;
          font: inherit;
          cursor: zoom-in;
        }

        .cert-verify {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          min-height: 44px;
          padding: 0 1.25rem 0.5rem;
          color: var(--color-accent-strong);
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
        }

        .cert-verify:hover {
          text-decoration: underline;
        }

        [data-theme="dark"] .cert-verify {
          color: var(--color-accent);
        }

        .cert-verify .material-icons {
          font-size: 1rem;
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

        .cert-id {
          color: var(--color-text-secondary);
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 0.8rem;
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

        .cert-card:hover,
        .cert-card:focus-within {
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
