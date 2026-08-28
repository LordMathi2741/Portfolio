---
name: professional-summary-specification
description: Datos reales y estructurados del perfil profesional del candidato (resumen, educación, experiencia y logros) para construir su portafolio, CV, landing page, sección "Sobre mí", perfil de LinkedIn o cualquier documento/sitio de postulación laboral, especialmente orientado al sector bancario/fintech. Úsala siempre que el usuario pida crear o editar su portafolio personal, landing page, CV web, resumen profesional, sección "sobre mí", "experiencia", "educación" o pida "incluye mi resumen profesional" o "agrega mi experiencia". No inventes ni completes con datos genéricos de relleno — usa exclusivamente la información de esta skill como fuente de verdad sobre el candidato.
---

# Perfil Profesional del Candidato

Esta skill contiene la información real y verificada del candidato (estudiante de 9.° ciclo de Ingeniería de Software, orientado al sector bancario). Úsala como **fuente única de verdad** al redactar cualquier contenido que hable de él en primera o tercera persona: portafolio, CV, LinkedIn, cover letters, secciones "Sobre mí", etc.

**Regla crítica:** no inventes empresas, cifras, tecnologías o logros que no estén aquí. Si falta un dato para completar algo (ej. un logo, una fecha exacta, un link), pregúntale al usuario en vez de rellenar con contenido genérico.

## Resumen profesional (versión completa)

> Estudiante de 9.° ciclo de Ingeniería de Software (UPC) y desarrollador Full-Stack con más de 1 año de experiencia en el sector financiero. Persona analítica, proactiva, entusiasta y enfocada en el trabajo en equipo y orientada a resultados.

Este es el texto base. Según el contexto, adáptalo de longitud (ver sección "Versiones por contexto" abajo), pero **nunca cambies los hechos** (ciclo, universidad, años de experiencia, sector).

## Educación

**Universidad Peruana de Ciencias Aplicadas (UPC)**
Ingeniería de Software — 9.° ciclo (en curso)

## Experiencia profesional

Ver el detalle completo, bullets y logros cuantificados en `references/experiencia-detallada.md`. Resumen ejecutivo:

| Empresa | Rol | Periodo | Cliente/Contexto |
|---|---|---|---|
| ITSIGHT CONSULTING | Practicante de Desarrollo de Software | 02/2025 – Actualidad | Cliente: Western Union |
| HiperFast SAC | FullStack Developer | 07/2024 – 01/2025 | Sistemas propios de la empresa |

**Stack técnico evidenciado en la experiencia:** C#, ASP.NET Core, .NET Core, React, Vue.js, SQL Server, MySQL, Docker, JWT, OKTA, CyberArk, APIs RESTful, Checkmarx, OWASP Top 10.

## Versiones por contexto

Genera la versión adecuada según dónde se use el contenido. No mezcles longitudes (ej. no pongas el resumen completo de 3 líneas en un espacio pensado para 1 línea).

### 1. Hero de portafolio / tagline (1 línea, ~12-15 palabras)
Extrae solo lo esencial: rol + especialización + sector.
> Ejemplo: "Desarrollador Full-Stack especializado en soluciones para el sector financiero."

### 2. Sección "Sobre mí" de portafolio (párrafo corto, 3-4 líneas)
Usa el resumen profesional completo tal cual está arriba, opcionalmente fusionado con 1 logro destacado de `references/experiencia-detallada.md` (ej. la reducción del tiempo de transferencias).

### 3. LinkedIn headline (≤220 caracteres)
Combina rol + tecnologías clave + sector, sin verbos en primera persona.
> Ejemplo: "Full-Stack Developer | C# · .NET Core · React | Sector Financiero | Estudiante de Ing. de Software - UPC"

### 4. CV / PDF (versión completa)
Usa el resumen profesional completo + toda la experiencia detallada de `references/experiencia-detallada.md` con bullets y logros tal como están, respetando el formato de logros separados de responsabilidades.

### 5. Cover letter / carta de presentación
Selecciona 2-3 bullets de `references/experiencia-detallada.md` más relevantes para la vacante específica a la que postula (pregunta al usuario por la vacante si no la ha mencionado) — prioriza los que mencionan seguridad, pasarelas de pago o sector financiero si la vacante es bancaria.

## Prioridades de contenido para sector bancario/fintech

Cuando el contexto sea una postulación a banca o fintech, destaca primero (en ese orden):
1. Experiencia directa con **Western Union** (cliente financiero real)
2. Integración de **pasarelas de pago** (Ligo, PaymentHub, PagoEfectivo)
3. **Seguridad**: JWT, OKTA, CyberArk, corrección de vulnerabilidades OWASP Top 10 vía Checkmarx
4. **RBAC** (control de acceso por roles) — relevante para sistemas bancarios con perfiles de usuario
5. Logros cuantificados (tiempos de transferencia, volumen de registros migrados)

Esto conecta directamente con el interés del candidato en ciberseguridad ofensiva/defensiva a mediano plazo — resáltalo quando el espacio lo permita, sin forzarlo si el formato es muy corto (ej. tagline de hero).

## Ver también

- `references/experiencia-detallada.md` — experiencia completa con todos los bullets, responsabilidades y logros tal como los redactó el candidato, lista para copiar/pegar o adaptar.