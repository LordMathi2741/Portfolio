---
name: accesibility-checker
description: Auditoría y corrección de accesibilidad (WCAG 2.2 AA) del portafolio en Astro. Úsala siempre que el usuario pida "revisa la accesibilidad", "audita a11y", "¿cumple WCAG?", "contraste", "lectores de pantalla", "navegación con teclado", o antes de dar por terminado cualquier cambio que agregue o modifique componentes interactivos (botones, filtros, formularios, modales, menús), colores o textos de interfaz. Define el proceso de auditoría (axe-core automático + pruebas manuales de teclado), las convenciones de accesibilidad ya establecidas en el proyecto y el estado de la última auditoría.
---

# Accesibilidad — Portafolio

Objetivo: el sitio cumple **WCAG 2.2 nivel AA** en español e inglés, modo claro y oscuro, de 320px a escritorio. Complementa a `portfolio-banking-style` (colores) y `ux-web-layout-specification` (estructura): ninguna decisión visual o de layout puede romper estas reglas.

## Cuándo usar esta skill

- El usuario pide revisar, auditar o mejorar la accesibilidad.
- Se agrega o modifica un componente interactivo (filtros, galería/lightbox, formulario, menú, selector de idioma).
- Se cambia un color, un token de `src/layouts/Layout.astro` o un texto visible / `aria-label`.
- Antes de hacer commit de cambios de UI: correr al menos la auditoría automática.

## Proceso de auditoría

### 1. Automática (axe-core)

1. `npm run build` y luego `npx astro preview --port 4329` en segundo plano.
2. Instalar las dependencias **fuera del repo** (scratchpad), nunca en `package.json`:
   `npm i puppeteer-core@23.11.1 axe-core@4.10.2` en un directorio temporal.
3. `node .claude/skills/accesibility-checker/scripts/axe-audit.cjs <dir-temporal>`
   Recorre `es`/`en` × claro/oscuro × 1440/375/320px, imprime las reglas fallidas y detecta desborde horizontal (WCAG 1.4.10). Sale con código 1 si encuentra algo.
4. Detener el servidor de preview al terminar.

**Ojo:** las capturas con `chrome --headless --window-size=390,...` muestran un desborde falso porque Chrome no baja de ~500px de ancho en ese modo. Para medir anchos usar puppeteer con `setViewport`, como hace el script.

### 2. Manual (lo que axe no detecta)

axe solo cubre ~40% de WCAG. Verificar siempre con puppeteer o a mano:

| Prueba | Resultado esperado |
|---|---|
| Primer `Tab` en la página | Aparece "Saltar al contenido"; `Enter` lleva el foco a `<main id="main-content">` |
| Filtro de proyectos | El `<p aria-live>` anuncia "Mostrando N proyectos"; `aria-pressed` marca la pill activa |
| Abrir certificado con `Enter` | El foco va al botón "Cerrar"; `Tab` no sale del diálogo; `Esc` cierra y el foco vuelve a la miniatura |
| Menú móvil (≤1024px) | `aria-expanded` cambia; `Esc` lo cierra y devuelve el foco al botón |
| Formulario vacío + enviar | Validación nativa (`required`) lo bloquea; cada campo tiene `<label>` visible |
| Envío del formulario | El estado (enviando / éxito / error) se anuncia en `role="status"`, nunca con `alert()` |
| `prefers-reduced-motion: reduce` | Sin scroll suave ni transiciones |
| Ambos idiomas | Ningún `aria-label` o texto oculto queda en el idioma equivocado |

## Convenciones del proyecto

Respetarlas en cualquier componente nuevo:

- **Color de texto con acento:** en modo claro usar `--color-accent-strong` (#0369A1, 6:1). `--color-accent` (#0EA5E9) da solo 2.6–2.8:1 sobre fondos claros: úsalo únicamente para íconos decorativos, bordes o en modo oscuro (`:global([data-theme="dark"])`).
- **Bordes de controles de formulario:** `--color-border-input` (≥3:1, WCAG 1.4.11). `--color-border` es decorativo y no cumple para delimitar campos.
- **Textos de interfaz y `aria-label`:** siempre desde `src/i18n/ui.ts` con `t()`, en ambos idiomas. Nunca literales en inglés o español dentro del componente. En componentes React, pasarlos como props desde el `.astro` (ver `labels` en `CertificationGallery`).
- **Íconos Material:** `aria-hidden="true"` en el `<span class="material-icons">`; si el botón solo tiene ícono, el nombre va en `aria-label`. Si no, el lector lee la ligadura ("menu", "zoom_in").
- **Imágenes:** `alt` descriptivo; `alt=""` cuando el texto al lado ya dice lo mismo (miniaturas de certificados con su título en el caption).
- **Texto solo para lectores:** clase global `.sr-only`.
- **Regiones vivas:** el elemento con `aria-live`/`role="status"` debe existir en el DOM desde el inicio (vacío), no crearse ni pasar de `display:none` al mostrarse.
- **Diálogos:** `role="dialog"` + `aria-modal` + `aria-label`, foco inicial dentro, trampa de `Tab`, `Esc` cierra, foco devuelto al disparador.
- **Botones de filtro / toggles:** `<button type="button">` con `aria-pressed`, agrupados en `role="group"` con `aria-label`.
- **Landmarks:** un solo `<main>`; el `<footer>` va fuera de `<main>` (si no, pierde el rol `contentinfo`).
- **Áreas táctiles:** mínimo 44×44px en enlaces y botones interactivos (40px en pills es aceptable por WCAG 2.5.8, que pide 24px).
- **Foco visible:** ya hay `:focus-visible` global con `--color-accent`; no usar `outline: none` salvo en destinos de foco programático (`#main-content`).

## Estado

El resultado de la última auditoría, lo que se corrigió y lo que queda pendiente está en `references/audit-log.md`. Actualizarlo cada vez que se corra una auditoría.
