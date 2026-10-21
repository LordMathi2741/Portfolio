---
name: technical-skills-specification
description: Especificación del stack tecnológico y habilidades técnicas del candidato (backend, frontend, bases de datos, IA/ML, cloud, contenedores, metodologías y ciberseguridad) para la creación de un portafolio profesional, CV, landing page o cualquier sitio orientado a postulaciones, especialmente al sector bancario/fintech. Úsala siempre que el usuario pida crear o editar su portafolio personal, landing page, CV web, sección "Stack Tecnológico", "Habilidades", "Skills" o pida "incluye mi stack tecnológico" o "agrega mis habilidades técnicas". No inventes ni completes con tecnologías que no estén aquí — usa exclusivamente esta información como fuente de verdad sobre el stack del candidato.
---

# Stack Tecnológico

Fuente de verdad sobre las tecnologías y herramientas que domina el candidato. Úsala junto con `professional-summary-specification` (experiencia laboral) y `software-projects` (proyectos) al construir el portafolio — evita repetir tecnologías que ya aparecen listadas ahí sin verificar que coincidan con esta especificación.

**Regla crítica:** no inventes tecnologías, certificaciones ni niveles de dominio que no estén aquí. Si el usuario pide destacar una tecnología no listada, pregúntale antes de agregarla.

## Backend Development
1. **.NET / .NET Core** → C# (REST APIs, Background Services, Worker Services, Minimal APIs)
2. **Spring Boot** → Java (REST APIs, Minimal APIs)
3. **FastAPI** → Python (REST APIs, Minimal APIs)
4. **Flask** → Python (REST APIs, Minimal APIs)

## Databases
1. **Microsoft SQL Server** → SQL Server (Relational Database, T-SQL)
2. **MySQL** → MySQL (Relational Database, SQL)
3. **PostgreSQL** → PostgreSQL (Relational Database, SQL)
4. **MongoDB** → MongoDB (NoSQL Database, Document-based)

## Artificial Intelligence and Machine Learning
1. **TensorFlow** → Python (Deep Learning, Neural Networks)
2. **Scikit-learn** → Python (Machine Learning)
3. **Pandas** → Python (Data Manipulation, Data Analysis)
4. **Matplotlib** → Python (Data Visualization)
5. **NumPy** → Python (Numerical Computing)
6. **Azure Foundry Tools** → Python (Agentic AI, RAG, Large Language Models implementation & Deployment)
7. **Transformers** → Python (Implementation and Fine-Tuning models from Hugging Face)

## Cloud Computing
1. **Microsoft Azure** — Azure Functions, Azure App Service, Azure SQL Database, Azure Cosmos DB, Azure Key Vault, Azure Blob Storage, Azure Container Registry, Azure Kubernetes Service, Azure OpenAI, Azure Foundry, Azure MySQL Database, Azure Static Web Apps, Azure Virtual Machine, Azure Policy
2. **AWS** — S3, EC2, Lambda, RDS, Bedrock, API Gateway

## Frontend
1. **React** → JavaScript/TypeScript (Web Applications, Single Page Applications, Progressive Web Apps, Component-based Architecture)
2. **Next.js** → React Framework (Server-Side Rendering, Static Site Generation, API Routes, Full-Stack Applications)
3. **Angular** → TypeScript (Enterprise Applications, Component-based Architecture, SPA, RxJS)

## Containers & Orchestration
1. **Docker** → Containerization (Docker Images, Docker Containers, Docker Compose)

## Methodologies
1. **Agile** → Scrum, Kanban
2. **Test-Driven Development (TDD)** → Unit Testing, Integration Testing
3. **Waterfall** → Requirements Analysis, System Design, Implementation, Testing, Deployment, Maintenance

## Cybersecurity
1. **OWASP Top 10** → Good practices for web application security
2. **Enumeration Tools** → Nmap (Port Scanning), Nikto (Web Server Scanning)
3. **Scanning** → FFuF, SQLMap
4. **Exploitation Framework** → Metasploit
5. **Web Application Pentesting** → Burp Suite

## Uso en portafolio

- **Sección "Stack Tecnológico" (grid de íconos/badges):** usa solo el nombre de la tecnología (ej. ".NET", "React", "Docker"), agrupado por categoría con encabezados cortos. No incluir el detalle entre paréntesis en la vista de badges — eso es para tooltips o para la versión de CV/detalle.
- **CV / sección detallada:** puede incluir el detalle entre paréntesis (ej. "React → JavaScript/TypeScript (SPA, PWA, Component-based)") si hay espacio, priorizando backend, frontend, cloud y BD antes que metodologías.
- **Ciberseguridad:** esta categoría es evidencia del interés del candidato en el área a mediano plazo (ofensiva/defensiva) — no forma parte de su experiencia laboral formal, así que en el portafolio debe presentarse como "Áreas de interés" o "Herramientas exploradas", no mezclada con el stack de producción usado en el trabajo. Ver también `professional-summary-specification` para más contexto sobre este interés.

## Prioridades para sector bancario/fintech

Cuando el contexto sea una postulación a banca o fintech, destacar primero:
1. **.NET / .NET Core** — stack principal usado en el cliente real (Western Union).
2. **Microsoft Azure** — cloud computing corporativo, estándar en banca.
3. **Bases de datos relacionales** (SQL Server, MySQL) — más relevantes que MongoDB en contextos bancarios tradicionales.
4. **OWASP Top 10** — directamente relacionado con la experiencia real de corrección de vulnerabilidades en Western Union (ver `professional-summary-specification`).
5. **Machine Learning / Fine-Tuning** — conecta con el proyecto ScamShield (detección de fraude), altamente relevante para banca.
6. Frontend (React/Next.js/Angular) y el resto de herramientas de ciberseguridad se mencionan como stack complementario, sin ser el foco principal salvo que la vacante lo pida explícitamente.