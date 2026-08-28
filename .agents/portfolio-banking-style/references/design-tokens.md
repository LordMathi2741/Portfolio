# Design Tokens — Portafolio Banking Style

Variables listas para copiar en un proyecto real. Incluye CSS custom properties y configuración de Tailwind.

## CSS Custom Properties

```css
:root {
  /* Neutros */
  --color-primary: #0A2540;      /* Azul marino oscuro */
  --color-bg: #F7F9FC;           /* Fondo principal */
  --color-text: #1C1E21;         /* Texto principal */
  --color-text-secondary: #6B7280;
  --color-border: #E5E7EB;
  --color-surface: #FFFFFF;      /* Cards */

  /* Acento — opción A (Tech/Cyan) */
  --color-accent: #0EA5E9;
  --color-accent-hover: #0284C7;
  --color-accent-bg: rgba(14, 165, 233, 0.1);

  /* Tipografía */
  --font-heading: 'Inter', 'Sora', sans-serif;
  --font-body: 'Inter', sans-serif;

  /* Radios y sombras */
  --radius-button: 8px;
  --radius-card: 8px;
  --radius-badge: 6px;
  --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-card-hover: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Modo oscuro (opcional) */
[data-theme="dark"] {
  --color-bg: #0F172A;
  --color-text: #F1F5F9;
  --color-surface: #1E293B;
  --color-border: #334155;
}
```

## Variante de acento B (Finanzas/Verde)

```css
:root {
  --color-accent: #059669;
  --color-accent-hover: #047857;
  --color-accent-bg: rgba(5, 150, 105, 0.1);
}
```

## Tailwind config (extend)

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0A2540',
        bg: '#F7F9FC',
        text: '#1C1E21',
        'text-secondary': '#6B7280',
        border: '#E5E7EB',
        accent: {
          DEFAULT: '#0EA5E9',
          hover: '#0284C7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        button: '8px',
        card: '8px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
};
```

## Ejemplo de botón (HTML/CSS)

```html
<button style="
  background-color: var(--color-accent);
  color: white;
  border-radius: var(--radius-button);
  padding: 12px 24px;
  border: none;
  font-family: var(--font-body);
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
">
  Ver proyectos
</button>
```

## Ejemplo de badge de tecnología

```html
<span style="
  background-color: var(--color-accent-bg);
  color: var(--color-accent);
  border-radius: var(--radius-badge);
  padding: 4px 10px;
  font-size: 13px;
  font-weight: 500;
  font-family: var(--font-body);
">
  .NET
</span>
```