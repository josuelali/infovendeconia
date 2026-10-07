const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const config = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
for (const section of ['guias', 'negocios']) {
  assert(config.redirects.some(r => r.source === `/${section}/:slug/index.html` && r.destination === `/${section}/:slug/` && r.permanent));
  assert(config.redirects.some(r => r.source === `/${section}/index.html` && r.destination === `/${section}/`));
}
const reviewed = [...fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(m => new URL(m[1]).pathname);
for (const url of reviewed) assert(!config.redirects.some(r => r.source === url), `Reviewed content redirected: ${url}`);
assert(config.redirects.some(r => r.source === '/guias/ia-y-privacidad-de-datos/' && r.destination === '/guias/'));
console.log('PASS: legacy index aliases protected; all sitemap destinations preserved');
