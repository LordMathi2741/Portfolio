export const experiencesEn = [
    {
        title: "Junior Software Engineer",
        company: "ITSIGHT Consulting (client: Western Union)",
        location: "Lima, Peru",
        date: "Feb 2025 - Present",
        tags: ["C#", "ASP.NET Core (.NET 8)", "SQL Server", "SSIS", "Azure", "Okta", "CyberArk", "RBAC", "Checkmarx", "Hexagonal Architecture"],
        responsibilities: [
            "Design and development of REST APIs in ASP.NET Core (.NET 8) using Hexagonal, MVC and layered architecture.",
            "System integration through REST APIs with external payment gateways (Ligo and Pago Efectivo), with custom middleware and automated billing flows.",
            "Implementation of authentication and authorization with identity providers (Okta, CyberArk) and role-based access control (RBAC).",
            "Traceability through logging to monitor and detect incidents in production and non-production environments.",
            "Use of Azure services in production applications: Blob Storage, Key Vault, App Service and Azure Database for MySQL.",
            "Maintenance of the WebFX project for web-based currency exchange, with a scalable architecture applicable globally.",
            "Maintenance of back-office applications with progressive .NET upgrades (5, 8 and 10) under Microsoft LTS policies, and optimization of business rules through SQL Server stored procedures.",
            "Migration of legacy Visual Basic .NET modules to .NET Core 8, ensuring compatibility and performance.",
            "Data flows and ETL processes with SQL Server and SSIS for accounting information processed by globally distributed teams.",
            "Requirements gathering and follow-up meetings with stakeholders to ensure technical alignment."
        ],
        achievements: [
            "Reduced the average WebFX transfer time to 1 minute per operation by integrating the Ligo API into a centralized payment-provider API, itself integrated into WebFX.",
            "Remediated 30 critical and high vulnerabilities reported by Checkmarx in the Poseidon Peru project, avoiding delays in the production release.",
            "Cut accounting book generation time from 5 minutes to 50 seconds per book.",
            "Successfully migrated 8 Visual Basic .NET modules to .NET Core 8 in the accounting and tax area, handling accounting books with over 1,000 records.",
            "Automated traceability reports for grouping accounting entries."
        ]
    },
    {
        title: "FullStack Developer",
        company: "Hiperfast SAC",
        location: "Callao, Peru",
        date: "Jul 2024 - Jan 2025",
        tags: ["C#", ".NET Core 8", "MySQL", "Docker"],
        responsibilities: [
            "Development of web systems for ISO 17020 certificate validation and invoice control with a layered architecture in .NET Core 8 and MySQL.",
            "Containerization with Docker and production deployment setup, ensuring high availability and portability.",
            "MySQL query optimization, reducing response times and ensuring transactional integrity in critical operations.",
            "Technical risk assessment and implementation of security measures in production environments."
        ],
        achievements: [
            "Automated the search for technical inspection reports, reducing the time from weeks to 10 seconds per certificate."
        ]
    }
]

export default experiencesEn;
