# Proyectos — Detalle Completo

Fuente de verdad para toda redacción sobre proyectos. Copiar/adaptar según el contexto (card de portafolio, página de detalle, CV), pero no alterar tecnologías, arquitectura ni enlaces.

---

## Validación de reportes
**Contexto:** Proyecto para un organismo de inspección con acreditación ISO 17020 (OI-044)
**Imagen:** `/images/report-validation.png`
**Enlace:** [Demo](http://38.25.38.94:5173/)

**Descripción completa:**
Desarrollé y mantuve un sistema de validación de certificados de conformidad para un organismo de inspección con acreditación ISO 17020 (OI-044), con funciones administrativas para gestionar el consumo de los clientes. El proyecto empleó tecnologías como C# junto con .NET, Vue.js y Node.js, con una base de datos MySQL para la persistencia de datos. Se implementó una arquitectura en capas basada en principios de Arquitectura Limpia, asegurando la mantenibilidad y escalabilidad del sistema.

**Stack:** C#, .NET, Vue.js, Node.js, MySQL
**Arquitectura:** En capas, basada en Arquitectura Limpia (Clean Architecture)

---

## Validación y control de facturas
**Contexto:** Proyecto para un organismo de inspección con acreditación ISO 17020 (OI-044)
**Imagen:** `/images/invoice-validator.jpeg`
**Enlace:** [GitHub](https://github.com/Corsersac-Consultant-Platform)

**Descripción completa:**
Desarrollé un sistema de validación y control de facturas para un organismo de inspección con acreditación ISO 17020 (OI-044), con funcionalidades administrativas avanzadas para gestionar estados de facturas y analizar estadísticas de consumo mediante gráficos interactivos. El proyecto utilizó tecnologías como C# junto con .NET, Vue.js y Node.js, con una base de datos MySQL para la persistencia de datos. Se implementó una arquitectura en capas basada en principios de Arquitectura Limpia, lo que garantizó la mantenibilidad del sistema. Además, la portabilidad del software se logró mediante contenedores Docker, optimizando su despliegue y escalabilidad.

**Stack:** C#, .NET, Vue.js, Node.js, MySQL, Docker
**Arquitectura:** En capas, basada en Arquitectura Limpia (Clean Architecture)

---

## E-commerce de productos con recomendaciones personalizadas
**Contexto:** Curso de Complejidad Algorítmica — UPC
**Imagen:** `/images/my-favorite-product.jpeg`
**Enlace:** [GitHub](https://github.com/orgs/MyFavoriteProduct-Organization/repositories)

**Descripción completa:**
Desarrollé un sistema de e-commerce con recomendaciones personalizadas basadas en las compras iniciales y el historial de usuarios, como parte del curso de Complejidad Algorítmica en la UPC. El sistema incluye funcionalidades de carrito de compras, recomendaciones generales y personalizadas. Utilicé tecnologías como Python, Flask, FastAPI y MySQL para la persistencia de datos, implementando una arquitectura MVC en el backend para garantizar la mantenibilidad y escalabilidad. Además, incorporé un grafo de compras para generar recomendaciones mediante algoritmos como Dijkstra, DFS y Quick-Union.

**Stack:** Python, Flask, FastAPI, MySQL
**Arquitectura:** MVC (backend)
**Detalle algorítmico:** Grafo de compras con Dijkstra, DFS y Quick-Union para generar recomendaciones

---

## Aplicación de alquiler para espacios de eventos
**Contexto:** Curso de Aplicaciones para Dispositivos Móviles — UPC
**Imagen:** `/images/alquilafacil.jpeg`
**Enlace:** [GitHub](https://github.com/orgs/Applications-for-Mobile-Devices-WX63/repositories)

**Descripción completa:**
Desarrollé una aplicación de alquiler de espacios para eventos, como parte del curso de Aplicaciones para Dispositivos Móviles en la UPC. La aplicación incluye como funcionalidades más resaltantes la gestión de reservas mediante calendario, también la priorización de reservas para usuarios con suscripción premium así como también la posibilidad de realizar reseñas a los espacios alquilados y guardar espacios como favoritos. Utilicé tecnologías como Flutter, C# con .NET, FireAuth para la autenticación con sistemas externos, PayPal para la gestión de pagos, SQLite como base de datos local para almacenar espacios favoritos, XUnit para realizar pruebas unitarias en el backend y MySQL para la persistencia de datos en el backend. En el lado del backend se utilizó una arquitectura CQRS junto con el enfoque de DDD para asegurar la escalabilidad del software de acuerdo al negocio. Por otro lado, en el frontend se aplicó una arquitectura limpia para garantizar la escalabilidad de la aplicación móvil.

**Stack:** Flutter, C#/.NET, FireAuth, PayPal, SQLite, XUnit, MySQL
**Arquitectura:** CQRS + DDD (backend), Clean Architecture (frontend móvil)
**Funcionalidades clave:** Reservas por calendario, priorización premium, reseñas, favoritos, pruebas unitarias

---

## Plataforma de educación a distancia
**Contexto:** Hackathon EducHack 2024, auspiciada por UPC
**Imagen:** `/images/handin.jpeg`
**Enlace:** No disponible — confidencial por acuerdo con la organizadora del hackathon

**Descripción completa:**
Desarrollé una plataforma educativa como parte de la EducHack 2024 auspiciada por la UPC. Entre las funcionalidades más resaltantes se incluye la gestión de cursos para profesores, la creación de videoconferencias y la gestión de usuarios por parte de los administradores. Utilicé tecnologías como Next.js, NestJS, ImgUrl como servicio externo para manejar archivos, Daily.co para la creación de videoconferencias, PayPal para la gestión de pagos y Postgres para la persistencia de datos. En el lado del backend se utilizó una arquitectura MVC para separar la persistencia de la lógica de negocio.

**Stack:** Next.js, NestJS, PostgreSQL, ImgUrl, Daily.co, PayPal
**Arquitectura:** MVC (backend)
**Nota:** No mostrar enlace a repositorio ni a la aplicación desplegada por confidencialidad de la organizadora.

---

## Aplicación para colaboración entre Artistas y Escritores
**Contexto:** Curso de Desarrollo de Aplicaciones Open Source — UPC
**Imagen:** `/images/artcollab.png`
**Enlace:** [GitHub](https://github.com/orgs/Open-Source-SW54-Group-3-ArtCollab/repositories)

**Descripción completa:**
Desarrollé una aplicación para colaboración entre artistas y escritores como parte del curso de Desarrollo de Aplicaciones Open Source en la UPC. La aplicación incluye como funcionalidades más resaltantes la publicación de libros, interacción entre artistas y escritores y la visualización de portafolios. Utilicé tecnologías como Spring Boot, Angular, PayPal para la gestión de pagos y MySQL para la persistencia de datos. En el lado del backend se aplicó la arquitectura de CQRS junto con el enfoque de DDD para asegurar la escalabilidad del software de acuerdo al negocio. En el frontend igualmente se aplicó un enfoque bajo DDD para garantizar la escalabilidad de la aplicación web.

**Stack:** Spring Boot, Angular, PayPal, MySQL
**Arquitectura:** CQRS + DDD (backend y frontend)

---

## EcoGuardian
**Contexto:** Curso de Desarrollo de Soluciones IoT (1ASI0572) — UPC. Proyecto tipo startup desarrollado a lo largo de varios ciclos académicos (entregas TB1, TB2 y TF), en equipo de 7 integrantes, bajo la startup ficticia "WeMade".
**Enlaces:**
- [Repositorio de documentación](https://github.com/WemadeRemastered/EcoGuardian-Report)
- [Landing Page](https://sage-granita-e4aafb.netlify.app/) — [repo](https://github.com/wemade-IoT/landing-page)
- [Aplicación Web (Frontend)](https://ecoguardian-tf.vercel.app/) — [repo](https://github.com/wemade-IoT/eco-guardian-frontend)

**Descripción completa:**
EcoGuardian es una solución IoT que ayuda a cuidar plantas mediante sensores de humedad, temperatura, luz, entre otros. La solución multiplataforma envía alertas inmediatas y recopila información para generar recomendaciones personalizadas realizadas por personal experimentado en el área. Está dirigida a hogares, oficinas, pequeños agricultores y empresas del sector agrícola, cada uno con distintos planes de pago (modelo de suscripción). Entre sus funciones principales destacan la monitorización en tiempo real, estadísticas, recomendaciones y seguimiento de crecimiento de las plantas.

La arquitectura del sistema está distribuida por contenedores (siguiendo el modelo C4): aplicaciones web, móvil, embebida y de edge computing se comunican con un backend central vía API REST, permitiendo procesar datos localmente, enviar notificaciones, controlar hardware IoT y gestionar pagos de forma eficiente. El diseño del backend siguió principios de Domain-Driven Design (DDD).

**Stack:** ASP.NET Core (backend), Vue.js (web), Flutter (móvil), sensores IoT (humedad, temperatura, luz), Stripe (pagos), Docker
**Arquitectura:** Distribuida por contenedores (modelo C4) — web, móvil, embebida y edge computing comunicadas vía API REST con backend central; Domain-Driven Design (DDD)
**Rol del candidato:** Participó en la definición de APIs REST con ASP.NET Core, entrevistas de validación con usuarios, mejoras de UI/UX en la app móvil, integración de sistema de internacionalización (i18n) y ajustes de comunicación entre servicios en el backend.
**Contexto adicional:** Proyecto académico de larga duración con metodología ágil (entregables iterativos TB1 → TB2 → TF), útil para evidenciar experiencia en proyectos de varios meses y trabajo en equipos grandes (7 personas).

---

## Vivlo
**Contexto:** Proyecto propio, asistente de Inteligencia Artificial para el acompañamiento de pacientes con diabetes.
**Enlaces:** Pendiente de agregar (preguntar al usuario por el link cuando lo tenga disponible)

**Descripción:**
Vivlo es un asistente de Inteligencia Artificial orientado al acompañamiento de pacientes con diabetes, apoyando su seguimiento y cuidado mediante IA generativa.

**Stack:** Flutter, .NET Core (tecnologías principales); AWS API Gateway, AWS Lambda, AWS Bedrock (IA generativa)
**Arquitectura:** Serverless en AWS (API Gateway + Lambda) con modelo de IA gestionado vía Bedrock
**Nota:** Es el único proyecto del portafolio que integra explícitamente Inteligencia Artificial generativa — relevante para destacar el interés del candidato en IA/ciencia de datos. Faltan detalles adicionales (funcionalidades específicas, arquitectura detallada, fecha, enlace al repo) — completar cuando el candidato los proporcione, sin inventarlos mientras tanto.

---

## Control de asistencia con reconocimiento facial
**Contexto:** Proyecto freelance
**Repositorios locales:** `control_asistencia` (app Flutter) y `control_asistencia_api` (API FastAPI) — se presentan como un solo proyecto
**Enlace:** No disponible (repositorio privado / sin publicar) — no mencionar ningún enlace.

**Descripción:**
Aplicación móvil para el control de asistencia de empleados mediante reconocimiento facial en el dispositivo: detección de rostro con Google ML Kit y generación de embeddings con MobileFaceNet (TensorFlow Lite), comparando por distancia euclidiana contra los rostros enrolados (guardados localmente en SQLite). La asistencia se registra en una API REST (FastAPI + SQLAlchemy + MySQL) con endpoints de registro, asistencias del día e historial protegido por API key.

**Stack:** Flutter (BLoC, go_router), TensorFlow Lite, Google ML Kit, SQLite; FastAPI, SQLAlchemy, MySQL 8, Docker Compose, Pytest
**Arquitectura:** App por features (domain/data/presentation); API en capas (application / infrastructure / interface)
**Pruebas:** unitarias, de integración con MySQL y de API (Pytest)
**Nota:** La notificación por Gmail de la app es un stub; no presentarla como funcionalidad terminada.

---

## Fichas de Mantenimiento
**Contexto:** Proyecto freelance para una empresa (carpeta local `Documents/Fichas de Mantenimiento`)
**Enlace:** No disponible

**Descripción:**
App móvil (Flutter, Android/iOS) que reemplaza la hoja de campo de registro de actividades de mantenimiento. El técnico busca el equipo por código, completa responsable, descripción y fotos; al guardar se genera un PDF que se sube a Google Drive (`/Mantenimiento/<CODIGO>/AAAA-MM-DD_HHmm_CODIGO.pdf`) a través de un servicio intermedio en Google Apps Script (valida API key, nombre, tipo y tamaño). Sin login; catálogo de equipos sincronizado desde Drive y cola de PDFs cuando no hay señal.

**Automatización en Make:** integración con las APIs de Google Drive y Google Sheets para el llenado automático diario de información, con el propósito de crear reportes de valor a partir de los registros de actividades.

**Stack:** Flutter, BLoC, get_it, fpdart, sqflite, pdf, Google Apps Script, Google Drive API, Google Sheets API, Make
**Arquitectura:** Clean Architecture por features (domain en Dart puro, data, presentation)
**Pruebas:** unitarias, BLoC, widget e integración

---

## FLUX Tecnología — Visualización de productos por catálogo
**Contexto:** Proyecto para cliente (FLUX Tecnología, importadora de maquinaria industrial, urea automotriz y otros productos)
**Repositorio:** `LordMathi2741/flux-technologies` (privado — no enlazar)
**Enlace:** [Sitio público](https://flux-tecnologia-catalogo.pages.dev/)

**Descripción:**
Catálogo web de productos con dos frontends independientes. El sitio público (HTML5/CSS3/JavaScript vanilla, sin frameworks) muestra las líneas de negocio (maquinaria industrial, urea automotriz, otros productos) con filtros por categoría, búsqueda global, paginación, detalle de producto con varias imágenes y cotización vía WhatsApp. El panel de administración (React 19 + Vite) permite a los administradores autenticados registrar, editar y eliminar productos. Ningún cliente accede directamente a los datos: todo pasa por Azure Functions, que concentran el acceso a Cloud Firestore, Cloudinary (imágenes) y la verificación del ID Token de Firebase Authentication.

**Stack:** HTML5, CSS3, JavaScript vanilla; React 19, Vite; Azure Functions (Node 22, modelo v4, Flex Consumption); Cloud Firestore, Firebase Authentication, Cloudinary; Cloudflare Pages; GitHub Actions
**Arquitectura:** Frontends estáticos desacoplados + backend serverless como única capa con acceso a datos (C4 nivel 2 documentado); reglas de Firestore que deniegan todo acceso de cliente; caché en memoria invalidada por versión del catálogo
**Migración:** desde un prototipo en Supabase a Firebase, con scripts de exportación / importación / verificación
**Pruebas:** unitarias (`npm test`), E2E contra la Function App desplegada y QA de navegador con Playwright
**CI/CD:** despliegue continuo de ambos frontends a Cloudflare Pages con GitHub Actions

---

## ScamShield — Detección de estafas en compras digitales
**Contexto:** Tesis de pregrado
**Enlace:** [Demo](https://scamshield.ryzeon.dev/)

**Descripción:**
Aplicación web con bibliotecas de Inteligencia Artificial para mitigar el riesgo de estafa en compras digitales. Combina dos componentes de IA: un modelo de clasificación entrenado con Machine Learning (Scikit-Learn) y un modelo de lenguaje re-entrenado mediante fine-tuning (DistilBERT, usando la biblioteca Transformers), enfocado específicamente en la detección de reseñas fraudulentas dentro del contexto peruano.

**Stack:** .NET Core (backend), Next.js (frontend), Machine Learning: Machine Learning con Scikit-Learn (clasificación); Fine-Tuning: DistilBERT con Transformers (detección de reseñas fraudulentas)
**Arquitectura:** Aplicación web full-stack con capa de Machine Learning integrada para el análisis de riesgo de fraude
**Nota:** Es el proyecto más alineado a un contexto financiero/bancario de todo el portafolio — detección de fraude es un caso de uso directo en banca. Es también el proyecto con mayor profundidad técnica en IA/ML (entrenamiento y fine-tuning de modelos, no solo consumo de APIs externas). Faltan detalles adicionales (funcionalidades específicas de la app, arquitectura detallada, fecha) — completar cuando el candidato los proporcione, sin inventarlos mientras tanto.

---

## Notas de uso

- **No confundir** los dos proyectos de "Validación..." — ambos son para el mismo cliente (OI-044) pero son sistemas distintos (certificados vs. facturas); mencionarlos por separado, nunca fusionarlos.
- **Plataforma de educación a distancia:** jamás incluir un link inventado o de placeholder — respetar la confidencialidad indicada.
- **Patrones arquitectónicos repetidos:** si se necesita mostrar variedad técnica y el espacio es limitado, priorizar proyectos con arquitecturas distintas entre sí (Clean Architecture, CQRS+DDD, MVC) en vez de repetir el mismo patrón dos veces.