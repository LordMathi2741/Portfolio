// Auditoría automática con axe-core sobre el sitio compilado.
// Uso: node axe-audit.cjs <dir-con-node_modules> [baseUrl]
// Requiere puppeteer-core y axe-core instalados en <dir-con-node_modules> y Google Chrome.
const deps = process.argv[2];
const base = process.argv[3] || 'http://localhost:4329';
const puppeteer = require(deps + '/node_modules/puppeteer-core');
const axePath = require.resolve(deps + '/node_modules/axe-core/axe.min.js');

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const LANGS = ['es', 'en'];
const THEMES = ['light', 'dark'];
const VIEWPORTS = [[1440, 900], [375, 800], [320, 700]];

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new' });
  let total = 0;
  for (const lang of LANGS) for (const theme of THEMES) for (const [width, height] of VIEWPORTS) {
    const page = await browser.newPage();
    await page.setViewport({ width, height });
    await page.evaluateOnNewDocument((t) => localStorage.setItem('theme', t), theme);
    await page.goto(`${base}/${lang}/`, { waitUntil: 'networkidle0' });
    await page.addScriptTag({ path: axePath });
    const result = await page.evaluate(async () => {
      const r = await axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] });
      return {
        overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
        violations: r.violations.map((v) => ({
          id: v.id,
          impact: v.impact,
          nodes: v.nodes.map((n) => n.target.join(' ') + ' | ' + (n.any[0]?.message || n.failureSummary || '')),
        })),
      };
    });
    const label = `${lang}-${theme}-${width}`;
    console.log(`${label}: ${result.violations.length} reglas fallidas${result.overflow ? ', DESBORDE HORIZONTAL' : ''}`);
    for (const v of result.violations) {
      console.log(`  [${v.impact}] ${v.id}`);
      v.nodes.forEach((n) => console.log('    ' + n.slice(0, 200)));
    }
    total += result.violations.length + (result.overflow ? 1 : 0);
    await page.close();
  }
  await browser.close();
  process.exit(total > 0 ? 1 : 0);
})();
