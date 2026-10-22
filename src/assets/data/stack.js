// `key` apunta a la traducción del título del grupo en src/i18n/ui.ts;
// los ítems que cambian según idioma se escriben como { es, en }
export const stack = [
    { key: "stack.backend", items: ["C#", ".NET Core / ASP.NET Core", ".NET Framework", "APIs REST", "Python (Flask)", "Node.js", "xUnit", "NUnit"] },
    { key: "stack.architecture", items: ["Hexagonal", { es: "Microservicios", en: "Microservices" }, { es: "Por capas", en: "Layered" }, "MVC", { es: "Monolito Modular", en: "Modular Monolith" }, "DDD", "SOLID", "Clean Code"] },
    { key: "stack.cloud", items: ["Blob Storage", "Key Vault", "App Service", "Azure Database for MySQL", "Functions", "Container Apps", "Azure SQL"] },
    { key: "stack.security", items: ["Okta", "CyberArk", "Auth0", "RBAC", "OWASP Top 10", "Checkmarx"] },
    { key: "stack.databases", items: ["SQL Server", "Azure SQL", "MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Supabase", "Oracle Db"] },
    { key: "stack.devops", items: ["Azure DevOps", "CI/CD", "Docker", "Git", "GitHub", "Linux (bash)", "Postman"] },
    { key: "stack.frontend", items: ["JavaScript", "React", "Next.js", "Angular", "HTML", "CSS", "Bootstrap"] },
    { key: "stack.data", items: ["SSIS", "Pandas", "Power BI"] },
    { key: "stack.ai", items: ["Machine Learning", "FineTuning", "PyTorch", "Transformers", "Scikit-learn"] },
    { key: "stack.aiDev", items: ["Claude Code", "OpenCode", "Antigravity CLI"] },
    { key: "stack.methodologies", items: ["Scrum (SFC)", "Kanban"] },
];

export default stack;
