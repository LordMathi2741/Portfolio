export const experiences = [
    {
        title: "Ingeniero de Software Junior",
        company: "ITSIGHT Consulting (cliente Western Union)",
        location: "Lima, Perú",
        date: "Feb 2025 - Actualidad",
        tags: ["C#", "ASP.NET Core (.NET 8)", "SQL Server", "SSIS", "Azure", "Okta", "CyberArk", "RBAC", "Checkmarx", "Arquitectura Hexagonal"],
        responsibilities: [
            "Diseño y desarrollo de APIs REST en ASP.NET Core (.NET 8) con arquitectura Hexagonal, MVC y por capas.",
            "Integración de sistemas mediante APIs REST con pasarelas de pago externas (Ligo y Pago Efectivo), con middleware personalizado y automatización de flujos de cobro.",
            "Implementación de autenticación y autorización con gestores de identidad (Okta, CyberArk) y control de accesos por roles (RBAC).",
            "Configuración de trazabilidad mediante logging para monitorear y detectar incidentes en ambientes productivos y no productivos.",
            "Uso de servicios de Azure en aplicaciones productivas: Blob Storage, Key Vault, App Service y Azure Database for MySQL.",
            "Mantenimiento del proyecto WebFX para el intercambio de monedas vía web, con una arquitectura escalable aplicable a nivel global.",
            "Mantenimiento de aplicaciones backoffice con actualizaciones progresivas de .NET (5, 8 y 10) bajo políticas LTS de Microsoft, y optimización de reglas de negocio mediante Stored Procedures en SQL Server.",
            "Migración de módulos legacy de Visual Basic .NET a .NET Core 8, asegurando compatibilidad y rendimiento.",
            "Flujos de datos y procesos ETL con SQL Server y SSIS para información contable procesada por equipos distribuidos a nivel global.",
            "Levantamiento de requerimientos y reuniones de seguimiento con stakeholders para asegurar el alineamiento técnico."
        ],
        achievements: [
            "Reducción del tiempo promedio de transferencias en WebFX a 1 minuto por operación, integrando la API de Ligo en una API centralizadora de proveedores de pago, integrada a su vez en WebFX.",
            "Remediación de 30 vulnerabilidades críticas y altas reportadas por Checkmarx en el proyecto Poseidon Perú, evitando retrasos en el despliegue a producción.",
            "Optimización del tiempo de generación de libros contables de 5 minutos a 50 segundos por libro.",
            "Migración exitosa de 8 módulos de Visual Basic .NET a .NET Core 8 en el área de contabilidad e impuestos, gestionando libros contables con más de 1000 registros.",
            "Automatización de reportes de trazabilidad para la agrupación de movimientos contables."
        ]
    },
    {
        title: "FullStack Developer",
        company: "Hiperfast SAC",
        location: "Callao, Perú",
        date: "Jul 2024 - Ene 2025",
        tags: ["C#", ".NET Core 8", "MySQL", "Docker"],
        responsibilities: [
            "Desarrollo de sistemas web para validación de certificados ISO 17020 y control de facturación con arquitectura por capas en .NET Core 8 y MySQL.",
            "Contenerización con Docker y configuración de despliegues en producción, asegurando alta disponibilidad y portabilidad.",
            "Optimización de consultas en MySQL, reduciendo tiempos de respuesta y garantizando la integridad transaccional en operaciones críticas.",
            "Evaluación de riesgos técnicos e implementación de medidas de seguridad en entornos productivos."
        ],
        achievements: [
            "Automatización de la búsqueda de informes técnicos de inspección, reduciendo el tiempo de semanas a 10 segundos por certificado."
        ]
    }
]

export default experiences;
