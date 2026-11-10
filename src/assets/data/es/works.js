export const works = [
    {
        category: 'thesis',
        context: 'Tesis · BTSym 2026',
        title: 'ScamShield — Prevención de estafas en compras digitales con ML y NLP',
        featured: true,
        description: 'Solución distribuida de prevención de fraude en e-commerce que estima la probabilidad de riesgo de estafa con Machine Learning y NLP (fine-tuning de DistilBERT con PyTorch/Transformers), desplegada en Azure.',
        badges: ['.NET Core', 'Flask', 'Next.js', 'MySQL', 'Machine Learning', 'DistilBERT', 'Azure'],
        image: '/images/scamshield.png',
        url: 'https://scamshield.ryzeon.dev/'
    },
    {
        category: 'client',
        context: 'Cliente · UDEP',
        title: 'Fondo de Becas Amigos UDEP — Plataforma de donaciones',
        description: 'Plataforma de donaciones con pagos en línea vía Niubiz, constancias de donación almacenadas en Azure Blob Storage, dashboard administrativo con autenticación Azure AD, envío de correos con Microsoft Graph y reCAPTCHA.',
        badges: ['ASP.NET Core 8', 'Clean Architecture', 'Next.js', 'Oracle', 'Niubiz', 'Azure', 'xUnit'],
        image: '/images/udep-donaciones.jpg',
        url: 'https://fondoimpacto-donaciones.udep.edu.pe/'
    },
    {
        category: 'client',
        context: 'Cliente · YAVA S.A.C.',
        title: 'YAVA — Sitio web corporativo',
        description: 'Sitio corporativo para una empresa de transporte y distribución de combustible con 39 años en el mercado: servicios, clientes, políticas y formulario de contacto con Azure Functions, desplegado en Cloudflare con análisis CodeQL en el pipeline.',
        badges: ['Astro', 'TypeScript', 'Tailwind CSS', 'Cloudflare Workers', 'Azure Functions', 'GitHub Actions'],
        image: '/images/yava.jpg',
        url: 'https://www.yava.com.pe/'
    },
    {
        category: 'client',
        context: 'Cliente · FLUX Tecnología',
        title: 'FLUX Tecnología — Catálogo de productos industriales',
        description: 'Catálogo web de una importadora de maquinaria industrial y urea automotriz, con filtros, búsqueda y cotización por WhatsApp, más un panel de administración en React para el CRUD de productos. Backend serverless en Azure Functions sobre Firestore y Cloudinary, con autenticación Firebase y despliegue continuo a Cloudflare Pages.',
        badges: ['JavaScript', 'React', 'Azure Functions', 'Node.js', 'Firestore', 'Firebase Auth', 'Cloudinary', 'Cloudflare Pages', 'GitHub Actions'],
        image: '/images/flux-tecnologia.jpg',
        url: 'https://flux-tecnologia-catalogo.pages.dev/'
    },
    {
        category: 'client',
        context: 'Cliente · CORSERSAC S.A.C.',
        title: 'Validación y control de facturas',
        description: 'Sistema de validación y control de facturas para un organismo de inspección con acreditación ISO 17020, con gestión de estados y gráficos de consumo.',
        badges: ['C#', '.NET', 'Vue.js', 'MySQL', 'Docker', 'Clean Architecture'],
        image: '/images/invoice-validator.jpeg',
    },
    {
        category: 'client',
        context: 'Cliente · HIPERFAST S.A.C.',
        title: 'Validación de reportes',
        description: 'Sistema de validación de certificados de conformidad para un organismo con acreditación ISO 17020, con gestión administrativa de clientes.',
        badges: ['C#', '.NET', 'Vue.js', 'Node.js', 'MySQL'],
        image: '/images/report-validation.png',
        url: 'http://38.25.38.94:5173/'
    },
    {
        category: 'client',
        context: 'Freelance',
        title: 'Fichas de Mantenimiento — Registro de actividades y reportes automatizados',
        description: 'App móvil que reemplaza la hoja de campo de mantenimiento: el técnico busca el equipo por código, registra responsable, descripción y fotos, y se genera un PDF que se guarda en Google Drive, con cola sin conexión. Además automaticé en Make, integrando las APIs de Google Drive y Google Sheets, el llenado diario de la información para generar reportes de valor a partir de los registros de actividades.',
        badges: ['Flutter', 'BLoC', 'Clean Architecture', 'Google Apps Script', 'Google Drive API', 'Google Sheets API', 'Make'],
        image: '/images/fichas-mantenimiento.jpg',
    },
    {
        category: 'client',
        context: 'Freelance',
        title: 'Control de asistencia con reconocimiento facial',
        description: 'App móvil que registra la asistencia de empleados con reconocimiento facial en el dispositivo (detección con ML Kit y embeddings con MobileFaceNet en TensorFlow Lite) y una API REST en FastAPI con MySQL para el registro e historial, cubierta con pruebas unitarias, de integración y de API.',
        badges: ['Flutter', 'BLoC', 'TensorFlow Lite', 'ML Kit', 'FastAPI', 'SQLAlchemy', 'MySQL', 'Docker', 'Pytest'],
        image: '/images/control-asistencia.jpg',
    },
    {
        category: 'academic',
        context: 'Curso UPC · Aplicaciones Móviles',
        title: 'App de alquiler de espacios para eventos',
        description: 'Plataforma con gestión de reservas, integración de pagos y sistema de reseñas. Arquitectura robusta enfocada en la escalabilidad del negocio.',
        badges: ['Flutter', 'C#', 'Firebase', 'PayPal', 'CQRS', 'DDD'],
        image: '/images/alquilafacil.jpeg',
    },
    {
        category: 'academic',
        context: 'Curso UPC · Diseño de Experimentos',
        title: 'MoviRent — Alquiler de scooters eléctricos',
        description: 'Plataforma que conecta a dueños de scooters eléctricos con arrendatarios, construida con Experiment-Driven Development: hipótesis, experiment cards, pruebas A/B y BDD con Gherkin.',
        badges: ['Vue.js', 'Flutter', 'Docker', 'PostgreSQL', 'Render', 'Gherkin'],
        image: '/images/movirent.jpg',
    },
    {
        category: 'personal',
        context: 'Proyecto propio',
        title: 'Vivlo',
        description: 'Asistente de Inteligencia Artificial enfocado en el acompañamiento y cuidado de pacientes con diabetes, utilizando modelos fundacionales en la nube.',
        badges: ['Flutter', '.NET Core', 'AWS API Gateway', 'AWS Lambda', 'AWS Bedrock'],
        image: '/images/vivlo.png',
        url: '#'
    },
    {
        category: 'academic',
        context: 'Curso UPC · equipo de 7',
        title: 'EcoGuardian',
        description: 'Solución IoT para monitorización agrícola con alertas en tiempo real, recomendaciones personalizadas y arquitectura distribuida.',
        badges: ['ASP.NET Core', 'Vue.js', 'Flutter', 'IoT', 'Stripe', 'Docker'],
        image: '/images/ecoguardian.png',
        url: 'https://ecoguardian-tf.vercel.app/'
    }
]

export default works;