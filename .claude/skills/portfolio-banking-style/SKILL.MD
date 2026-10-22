---
name: portfolio-banking-style
description: Guía de estilos visuales para construir o rediseñar un portafolio profesional de un ingeniero de software junior orientado al sector bancario/financiero. Úsala siempre que el usuario pida crear su portafolio personal, landing page, CV web, o cualquier sitio para postular a bancos o fintechs, o cuando pida "colores para mi portafolio", "paleta profesional", "portafolio serio/corporativo" o similares. Define paleta de colores, tipografía, espaciado y componentes UI (botones, cards, badges de tecnologías) coherentes con el tono de confianza y seriedad que se espera en banca. Aplica también si el usuario pide ajustar un portafolio existente para que se vea "más corporativo" o "más bancario".
---

# Portafolio Profesional — Estilo Sector Bancario

Guía de estilos para portafolios de ingenieros de software (junior/entry-level) que apuntan a empresas del sector bancario o financiero. El objetivo es transmitir **confianza, solidez y profesionalismo**, con un toque tech sutil que muestre dominio de tecnología moderna sin restarle seriedad.

## Cuándo usar esta skill

- El usuario pide construir, rediseñar o darle color/estilo a un portafolio personal.
- El usuario menciona que aplicará a bancos, fintechs, aseguradoras o empresas del sector financiero.
- El usuario pide explícitamente una paleta "corporativa", "seria", "profesional" o "bancaria".
- Antes de generar cualquier artifact (HTML/React) de un portafolio, landing page o CV web con este perfil.

Si el usuario no ha confirmado que el target es banca/finanzas, pregúntale brevemente o asume este contexto solo si ya lo mencionó antes en la conversación.

## Paleta de colores: "Corporate Trust"

### Neutros (base)

| Uso | Color | Hex |
|---|---|---|
| Color principal / header / footer | Azul marino oscuro | `#0A2540` |
| Fondo principal | Blanco grisáceo | `#F7F9FC` |
| Texto principal | Gris carbón | `#1C1E21` |
| Texto secundario / subtítulos | Gris medio | `#6B7280` |
| Bordes / separadores | Gris claro | `#E5E7EB` |

### Acento (elegir uno, no mezclar ambos)

| Opción | Color | Hex | Cuándo usarlo |
|---|---|---|---|
| A — Tech | Azul cyan | `#0EA5E9` | Da un toque más "startup tech" sin perder seriedad. Recomendado si el stack incluye React/Next/Azure. |
| B — Finanzas | Verde esmeralda oscuro | `#059669` | Asociación directa con crecimiento/finanzas. Recomendado si se quiere lucir más "banca tradicional". |

**Modo oscuro (opcional):** fondo `#0F172A`, texto `#F1F5F9`, mantener el mismo acento elegido.

### Reglas de aplicación

1. **Un solo acento.** No mezclar el cyan y el verde en el mismo diseño — es el error más común en portafolios junior.
2. **Contraste alto siempre.** Azul marino sobre blanco (o viceversa) para texto y elementos clave; verifica contraste mínimo AA (4.5:1) para accesibilidad.
3. **El acento se usa con moderación:** solo en CTAs, links, hover states, iconos activos y bordes de badges. Nunca como color de fondo grande.
4. **Evitar:** colores muy saturados (rojos, naranjas, morados vibrantes, rosados), gradientes llamativos tipo "creative agency", múltiples acentos compitiendo.

## Tipografía

- **Encabezados:** una sans-serif geométrica/moderna con peso semibold-bold. Opciones: `Inter`, `Sora`, `Manrope`.
- **Cuerpo de texto:** la misma familia en peso regular/medium, o `Inter` como default universal (excelente legibilidad, muy usada en fintech).
- **Jerarquía sugerida:**
  - H1 (hero): 40-56px, bold, azul marino o gris carbón
  - H2 (secciones): 28-32px, semibold
  - Body: 16-18px, regular, gris carbón
  - Caption/meta: 13-14px, gris medio
- Evitar fuentes decorativas, script o hand-written — no encajan con el tono bancario.

## Componentes UI

### Botones (CTA)
- Fondo: color de acento elegido
- Texto: blanco
- Border-radius: 6-8px (esquinas suaves pero no muy redondeadas — evitar el estilo "pill" muy juguetón)
- Hover: oscurecer el acento ~10%

### Cards de proyectos
- Fondo: blanco puro `#FFFFFF`
- Borde: `1px solid #E5E7EB`
- Sombra: sutil, `0 1px 3px rgba(0,0,0,0.08)`
- Hover: elevar sombra ligeramente, sin cambiar color de fondo

### Badges de tecnología (.NET, React, Azure, etc.)
- Fondo: acento con opacidad baja (10-15%), ej. `rgba(14, 165, 233, 0.1)`
- Texto: el acento en su tono sólido
- Border-radius: 4-6px, padding compacto

### Header/Navbar
- Fondo azul marino oscuro (`#0A2540`) con texto blanco, o alternativamente fondo blanco con borde inferior sutil y logo/nombre en azul marino
- Mantener consistente con el footer

## Aplicación por sección (portafolio típico)

1. **Hero:** fondo claro o azul marino con texto blanco; nombre + título profesional + CTA con acento
2. **Sobre mí:** fondo blanco/gris claro, texto legible, foto opcional con borde sutil
3. **Stack tecnológico:** grid de badges usando el estilo de badge descrito arriba
4. **Proyectos:** cards con el estilo definido arriba, 2-3 por fila en desktop
5. **Experiencia/Educación:** timeline vertical simple, línea en gris claro, puntos en el acento
6. **Contacto/Footer:** azul marino oscuro con texto blanco, íconos de redes en blanco o acento

## Notas de contexto del usuario

Si el usuario tiene stack en **.NET, React, Angular, Next.js y Azure**, y está construyendo su marca hacia **IA/ciencia de datos** o eventualmente **ciberseguridad**, considera:
- Usar la opción de acento A (cyan) — conecta mejor visualmente con azure/cloud/tech
- En la sección de "intereses" o "hacia dónde voy", se puede usar un pequeño detalle visual (ícono, badge) que insinúe la dirección hacia ciberseguridad/IA sin desviar la paleta general — nunca introducir un tercer color para esto, reutilizar el acento existente.

## Recursos

- `references/design-tokens.md` — variables CSS listas para copiar/pegar en un proyecto real (HTML/React/Tailwind/Astro).