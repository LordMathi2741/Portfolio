# Registro de auditorías de accesibilidad

## 2026-10-21

**Alcance:** `/es/` y `/en/`, modo claro y oscuro, 1440 / 375 / 320px. axe-core 4.10.2 (WCAG 2.0–2.2 A/AA + best-practice) + pruebas de teclado con puppeteer.

**Resultado final:** 0 reglas fallidas en axe en las 12 combinaciones; sin desborde horizontal; todas las pruebas manuales de la tabla de `SKILL.MD` pasan.

### Corregido

| Problema | Criterio WCAG | Archivo |
|---|---|---|
| Número de la navegación y etiqueta "01 / …" de las secciones en `#0EA5E9`: contraste 2.6–2.8:1 | 1.4.3 | `NavBar.astro`, `global.css` |
| Hover de enlaces de navegación y footer en `#0EA5E9` | 1.4.3 | `NavBar.astro`, `Footer.astro` |
| Formulario solo con placeholders, sin `<label>` | 1.3.1, 3.3.2 | `FormContact.jsx` |
| Resultado del envío con `alert()` y solo en español | 4.1.3 | `FormContact.jsx`, `gmail.service.ts` |
| Campos sin `required` ni `autocomplete` | 1.3.5, 3.3.1 | `FormContact.jsx` |
| Borde de campos `#E5E7EB` (1.2:1) | 1.4.11 | `Layout.astro` (`--color-border-input`), `global.css` |
| Lightbox: el foco no entraba al diálogo, no quedaba atrapado ni volvía al cerrar | 2.4.3, 2.1.2 | `CertificationGallery.jsx` |
| Lightbox: "Close/Previous/Next" en inglés también en `/es/` | 3.1.2 | `CertificationGallery.jsx`, `Training.astro` |
| Miniatura de certificado anunciaba el título dos veces (alt + caption) | best-practice | `CertificationGallery.jsx` |
| Sin enlace para saltar la navegación | 2.4.1 | `Home.astro`, `global.css` |
| `<footer>` dentro de `<main>` | 1.3.1 | `Home.astro`, `Footer.astro` |
| `aria-label` de navegación y selector de idioma solo en inglés | 3.1.2 | `NavBar.astro` |
| Menú móvil no se cerraba con `Esc` | 2.1.1 | `NavBar.astro` |
| Filtro de proyectos no anunciaba el resultado | 4.1.3 | `Projects.astro` |
| Sin soporte para `prefers-reduced-motion` | 2.3.3 (AAA, buena práctica) | `global.css` |

### Pendiente / aceptado

- **Selector de idioma:** navega al cambiar la opción (`change`), lo que técnicamente es un cambio de contexto no anunciado (WCAG 3.2.2). Alternativa: reemplazarlo por dos enlaces `ES` / `EN`. No se cambió para no alterar el diseño.
- **Enlaces `target="_blank"`:** no avisan que abren una pestaña nueva. No es un fallo AA; opcional agregar texto `.sr-only` ("se abre en una pestaña nueva").
- **Borde del selector de idioma:** usa `--color-border` (bajo contraste). Su texto "ES/EN" lo identifica, pero conviene pasarlo a `--color-border-input`.
- **No probado con lector de pantalla real** (VoiceOver/NVDA); solo con el árbol de accesibilidad vía axe y puppeteer.
