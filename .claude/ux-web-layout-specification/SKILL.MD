---
name: ux-web-layout-specification
description: Guía de proceso UX y maquetado web (wireframing, arquitectura de información, jerarquía visual, grillas, responsive design y heurísticas de usabilidad) para construir o rediseñar un portafolio personal, landing page o sitio web. Úsala siempre que el usuario pida crear, maquetar, o estructurar un portafolio, landing page o CV web, o cuando pida "estructura de la página", "wireframe", "layout", "orden de las secciones" o "mejora la usabilidad". Complementa a portfolio-banking-style (que define colores/tipografía) enfocándose en cómo se organiza y estructura el contenido en la página, no en su estilo visual.
---

# UX Design y Maquetado Web

Actúa como un UX Designer y maquetador web con experiencia en portafolios de perfiles técnicos. Esta skill define **cómo se organiza y estructura** el contenido de la página — arquitectura de información, jerarquía, grillas y flujo de lectura — como complemento a `portfolio-banking-style` (que define el estilo visual: colores, tipografía, componentes).

**Regla de convivencia entre skills:** `portfolio-banking-style` responde "¿con qué colores y qué forma tienen los elementos?". Esta skill responde "¿en qué orden aparecen, cómo se agrupan y cómo se lee la página?". Úsalas juntas: primero define la estructura con esta skill, luego aplícale el estilo visual de la otra.

## Proceso UX antes de maquetar

Antes de escribir código, resuelve en este orden:
1. **Objetivo de la página:** ¿qué acción única quieres que tome un reclutador de banca/fintech al visitar el portafolio? (ej. "que agende una entrevista" o "que descargue el CV"). Todo el layout debe apuntar a esa acción.
2. **Jerarquía de contenido:** ordena las secciones (usando `professional-summary-specification`, `software-projects` y `technical-skills-specification`) de mayor a menor prioridad para ese objetivo — no por orden cronológico de vida, sino por relevancia para el lector.
3. **Escaneo, no lectura:** un reclutador escanea en 5-8 segundos. La estructura debe permitir entender "quién es, qué sabe hacer, qué ha construido" sin necesidad de leer párrafos completos.

## Arquitectura de información recomendada (portafolio junior → banca/fintech)

Orden sugerido de secciones, de arriba hacia abajo:

1. **Hero** — nombre, rol, una línea de propuesta de valor (usa la versión "tagline" de `professional-summary-specification`), 1-2 CTAs (ej. "Ver proyectos", "Descargar CV")
2. **Sobre mí** — párrafo corto, no la versión larga
3. **Stack tecnológico** — badges agrupados por categoría (backend, frontend, cloud, IA, ciberseguridad), usando `technical-skills-specification`
4. **Proyectos destacados** — 3-4 proyectos priorizados según banca/fintech (no los 10 completos; enlazar a "ver todos" si se necesita)
5. **Experiencia profesional** — timeline con ITSIGHT/Western Union primero
6. **Educación**
7. **Contacto / Footer** — email, LinkedIn, GitHub, CTA final

**Por qué este orden:** stack y proyectos van antes que experiencia completa porque, para un perfil junior, la evidencia técnica concreta (qué construiste) suele pesar más en el primer vistazo que el historial laboral extenso. Si el usuario tiene una razón distinta (ej. quiere destacar Western Union primero), respeta su preferencia.

## Sistema de grilla y layout

- **Grid base:** 12 columnas en desktop, con `max-width` de contenido entre 1120px-1280px centrado, y padding lateral de 24-32px.
- **Breakpoints:** mobile (<640px, 1 columna), tablet (640-1024px, 2 columnas para cards), desktop (>1024px, 3 columnas para cards de proyectos/badges).
- **Espaciado vertical entre secciones:** consistente y generoso (80-120px en desktop, 48-64px en mobile) — el espacio en blanco es lo que separa "profesional" de "amateur" en un portafolio.
- **Ancho de línea de texto:** párrafos entre 60-75 caracteres por línea para legibilidad óptima (usar `max-width` en contenedores de texto, no dejar que el texto ocupe todo el ancho de la pantalla en desktop).

## Jerarquía visual dentro de cada sección

- Un solo H1 por página (el nombre en el hero).
- Cada sección tiene un H2 claro; evitar más de 2 niveles de anidamiento (H2 → H3) para no saturar.
- La primera card/elemento de una lista (ej. primer proyecto, primera experiencia) puede tener un tratamiento ligeramente distinto (más grande, o "destacado") si es el más relevante — pero solo uno, para no perder el efecto.
- Usa proximidad: elementos relacionados (título de proyecto + descripción + badges de stack) deben estar visualmente más cerca entre sí que respecto a otros proyectos.

## Heurísticas de usabilidad a verificar

Antes de dar por terminado el maquetado, revisar:
- **Contraste:** texto legible sobre el fondo (mínimo AA, 4.5:1) — coordinar con `portfolio-banking-style`.
- **Área táctil:** botones y links con al menos 44x44px de área clickeable en mobile.
- **Estado de foco visible:** navegación por teclado debe mostrar qué elemento está enfocado (importante en un portafolio que puede ser revisado por sistemas de accesibilidad corporativos, común en banca).
- **Feedback en interacciones:** hover states en cards y botones, sin animaciones excesivas que distraigan del contenido.
- **Consistencia de patrones:** si una card de proyecto tiene cierto estilo, todas las cards de proyecto deben seguir el mismo patrón — no mezclar formatos entre secciones similares.
- **Navegación:** si el portafolio tiene más de 4-5 secciones, considerar un nav sticky o anchor links para saltar entre secciones.

## Responsive: prioridades por breakpoint

- **Mobile first en el contenido, no solo en el CSS:** en mobile, decide qué información es prescindible (ej. descripciones largas de proyectos pueden acortarse, badges de stack secundario pueden colapsarse en "+3 más").
- **Cards de proyectos:** en desktop 3 columnas, en tablet 2, en mobile 1 columna con scroll vertical (evitar carrouseles horizontales en mobile salvo que sea claramente indicado con affordance de swipe).
- **Stack tecnológico:** en mobile, agrupar por categoría con acordeones o tabs si la lista es larga (recuerda que `technical-skills-specification` tiene 7 categorías), para no generar un muro de badges que obligue a scrollear demasiado.

## Ver también

- `portfolio-banking-style` — paleta, tipografía y estilo de componentes (botones, cards, badges) que se aplican sobre esta estructura.
- `professional-summary-specification`, `software-projects`, `technical-skills-specification` — fuente de contenido real para llenar cada sección de esta arquitectura.