---
name: software-projects
description: Datos reales y estructurados de los proyectos de software completados por el candidato (proyectos académicos, hackathons y personales), incluyendo stack tecnológico, arquitectura, funcionalidades y enlaces. Úsala siempre que el usuario pida crear o editar su portafolio personal, landing page, CV web, sección "Proyectos" o pida "incluye mis proyectos" o "agrega mis proyectos". No inventes ni completes con datos genéricos de relleno — usa exclusivamente la información de esta skill como fuente de verdad sobre los proyectos del candidato.
---

# Proyectos

Fuente de verdad sobre los proyectos personales, académicos y de hackathon del candidato. Úsala junto con `professional-summary-specification` (experiencia laboral) y `portfolio-banking-style` (guía visual) al construir el portafolio.

**Regla crítica:** no inventes tecnologías, funcionalidades ni enlaces que no estén aquí. Si un dato falta (ej. imagen, link de repo privado), pregúntale al usuario en vez de rellenar con contenido genérico.

## Resumen de proyectos

| Proyecto | Contexto | Stack principal | Enlace |
|---|---|---|---|
| Validación de reportes | Freelance / cliente real (OI-044) | C#, .NET, Vue.js, Node.js, MySQL | [Demo](http://38.25.38.94:5173/) |
| Validación y control de facturas | Freelance / cliente real (OI-044) | C#, .NET, Vue.js, Node.js, MySQL, Docker | [GitHub](https://github.com/Corsersac-Consultant-Platform) |
| E-commerce con recomendaciones personalizadas | Curso UPC — Complejidad Algorítmica | Python, Flask, FastAPI, MySQL | [GitHub](https://github.com/orgs/MyFavoriteProduct-Organization/repositories) |
| App de alquiler de espacios para eventos | Curso UPC — Apps para Dispositivos Móviles | Flutter, C#/.NET, FireAuth, PayPal, SQLite, MySQL | [GitHub](https://github.com/orgs/Applications-for-Mobile-Devices-WX63/repositories) |
| Plataforma de educación a distancia | Hackathon — EducHack 2024 (UPC) | Next.js, NestJS, PostgreSQL, Daily.co | No disponible (confidencial) |
| Colaboración entre Artistas y Escritores | Curso UPC — Desarrollo de Apps Open Source | Spring Boot, Angular, MySQL | [GitHub](https://github.com/orgs/Open-Source-SW54-Group-3-ArtCollab/repositories) |
| EcoGuardian | Curso UPC — Desarrollo de Soluciones IoT (proyecto multi-ciclo, estilo startup) | ASP.NET Core, Vue.js, Flutter, IoT (sensores), DDD, Stripe, Docker | [Landing Page](https://sage-granita-e4aafb.netlify.app/) · [App Web](https://ecoguardian-tf.vercel.app/) · [Repo](https://github.com/WemadeRemastered/EcoGuardian-Report) |
| Vivlo | Proyecto personal / lado a lado con la carrera | Flutter, .NET Core, AWS (API Gateway, Lambda, Bedrock) | Pendiente de agregar |
| Control de asistencia con reconocimiento facial | Freelance | FastAPI, Flutter, MobileNet, MySQL | No disponible |
| ScamShield — Detección de estafas en compras digitales | Tesis de pregrado | .NET Core, Next.js, Machine Learning (Machine Learning, Scikit-Learn), Fine-Tuning (DistilBERT, Transformers) | [Demo](https://scamshield.ryzeon.dev/) |

Detalle completo de cada proyecto (descripción, arquitectura, funcionalidades e imagen) en `references/proyectos-detallados.md`.

## Categorización

- **Proyectos con cliente real:** Validación de reportes, Validación y control de facturas (organismo de inspección ISO 17020, OI-044), Control de asistencia con reconocimiento facial (freelance) — mayor peso para mostrar experiencia profesional real, no solo académica.
- **Hackathon:** Plataforma de educación a distancia (EducHack 2024).
- **Cursos UPC:** E-commerce con recomendaciones, App de alquiler de espacios, Colaboración entre Artistas y Escritores, EcoGuardian.
- **Proyecto propio / IA aplicada:** Vivlo — integra Inteligencia Artificial (AWS Bedrock) con enfoque en salud digital.
- **Tesis de pregrado:** ScamShield — el proyecto de mayor profundidad técnica en IA/ML: combina un modelo de clasificación (Machine Learning) con fine-tuning de un modelo de lenguaje (DistilBERT) para detectar reseñas fraudulentas en el contexto peruano. Es el proyecto más fuerte para demostrar dominio real en Machine Learning, no solo consumo de APIs de IA.

## Versiones por contexto

### 1. Portafolio — Grid de proyectos (cards cortas)
Usa **título + 1-2 líneas de descripción resumida** (no la descripción completa) + badges de tecnología + imagen + link. La descripción completa de cada proyecto en `references/proyectos-detallados.md` es demasiado larga para una card; resume conservando la función principal del sistema y 2-3 tecnologías clave.

> Ejemplo de resumen corto para "Validación de reportes":
> "Sistema de validación de certificados de conformidad para un organismo con acreditación ISO 17020, con gestión administrativa de consumo de clientes."

### 2. Página de detalle de proyecto (si el portafolio lo soporta)
Usa la descripción completa tal como está en `references/proyectos-detallados.md`, sin resumir.

### 3. CV / PDF
Incluye solo los 2-3 proyectos más relevantes según la vacante (prioriza los de cliente real y los de mayor complejidad arquitectónica), con una línea de descripción + stack. No listar los 6 en un CV — satura el documento.

### 4. Cover letter
Menciona como máximo 1 proyecto, el más alineado a la vacante específica (pregunta al usuario por la vacante si no la mencionó).

## Prioridades para sector bancario/fintech

Cuando el contexto sea una postulación a banca o fintech, ordena así:
1. **ScamShield (tesis)** — el proyecto más alineado a banca/fintech de todo el portafolio: detección de fraude/estafas mediante Machine Learning (Machine Learning) y NLP (fine-tuning de DistilBERT), un dominio directamente aplicable a prevención de fraude financiero. Siempre priorizar este proyecto cuando la vacante mencione fraude, riesgo, seguridad transaccional o IA aplicada.
2. **Validación y control de facturas** — maneja pagos, estados financieros, gráficos de consumo; usa Docker (relevante para infraestructura en la nube/Azure).
3. **Validación de reportes** — cliente real con acreditación, gestión administrativa de consumo.
4. **App de alquiler de espacios para eventos** — arquitectura robusta (CQRS + DDD), integra pagos (PayPal), autenticación externa (FireAuth) y pruebas unitarias (XUnit); útil para mostrar madurez técnica aunque el dominio no sea financiero.
5. **Vivlo** — aunque no es de dominio bancario, es relevante para mostrar el interés del candidato en IA/ciencia de datos (usa AWS Bedrock) combinado con su stack fuerte (.NET Core, Flutter); destacarlo si la vacante valora IA aplicada o servicios cloud serverless (Lambda, API Gateway).
6. **EcoGuardian** — proyecto de mayor envergadura y duración (varios ciclos académicos, equipo de 7 personas, metodología ágil con entregables TB1/TB2/TF), útil para mostrar experiencia en proyectos largos, trabajo en equipo y IoT; mencionar si la vacante valora escalabilidad de sistemas o experiencia en equipos grandes.
7. Los proyectos restantes (control de asistencia con reconocimiento facial, cursos/hackathon) se mencionan según espacio disponible, priorizando variedad de arquitecturas y tecnologías sobre patrones repetidos.

## Ver también

- `references/proyectos-detallados.md` — descripción completa de cada proyecto, arquitectura y funcionalidades, tal como las redactó el candidato.