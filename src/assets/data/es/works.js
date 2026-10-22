export const works = [
    {
        category: 'thesis',
        context: 'Tesis · BTSym 2026',
        title: 'ScamShield — Extensión de navegador para mitigar la probabilidad de riesgo de estafas en compras digitales',
        description: 'Solución distribuida de prevención de fraude en e-commerce que estima la probabilidad de riesgo de estafa con Machine Learning y NLP (fine-tuning de DistilBERT con PyTorch/Transformers), desplegada en Azure.',
        badges: ['.NET Core', 'Flask', 'Next.js', 'MySQL', 'Machine Learning', 'DistilBERT', 'Azure'],
        image: '/images/scamshield.png',
        url: 'https://scamshield.ryzeon.dev/'
    },
    {
        category: 'client',
        context: 'Cliente real · UDEP',
        title: 'Fondo de Becas Amigos UDEP — Plataforma de donaciones',
        description: 'Plataforma de donaciones con pagos en línea vía Niubiz, constancias de donación almacenadas en Azure Blob Storage, dashboard administrativo con autenticación Azure AD, envío de correos con Microsoft Graph y reCAPTCHA.',
        badges: ['ASP.NET Core 8', 'Clean Architecture', 'Next.js', 'Oracle', 'Niubiz', 'Azure', 'xUnit'],
        image: '/images/udep-donaciones.jpg',
        url: 'https://fondoimpacto-donaciones.udep.edu.pe/'
    },
    {
        category: 'client',
        context: 'Cliente real · YAVA S.A.C.',
        title: 'YAVA — Sitio web corporativo',
        description: 'Sitio corporativo para una empresa de transporte y distribución de combustible con 39 años en el mercado: servicios, clientes, políticas y formulario de contacto con Azure Functions, desplegado en Cloudflare con análisis CodeQL en el pipeline.',
        badges: ['Astro', 'TypeScript', 'Tailwind CSS', 'Cloudflare Workers', 'Azure Functions', 'GitHub Actions'],
        image: '/images/yava.jpg',
        url: 'https://www.yava.com.pe/'
    },
    {
        category: 'client',
        context: 'Cliente real · ISO 17020',
        title: 'Validación y control de facturas',
        description: 'Sistema de validación y control de facturas para un organismo de inspección con acreditación ISO 17020, con gestión de estados y gráficos de consumo.',
        badges: ['C#', '.NET', 'Vue.js', 'MySQL', 'Docker', 'Clean Architecture'],
        image: '/images/invoice-validator.jpeg',
    },
    {
        category: 'client',
        context: 'Cliente real · ISO 17020',
        title: 'Validación de reportes',
        description: 'Sistema de validación de certificados de conformidad para un organismo con acreditación ISO 17020, con gestión administrativa de clientes.',
        badges: ['C#', '.NET', 'Vue.js', 'Node.js', 'MySQL'],
        image: '/images/report-validation.png',
        url: 'http://38.25.38.94:5173/'
    },
    {
        category: 'academic',
        context: 'Curso UPC',
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