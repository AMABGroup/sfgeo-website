// Answer-engine check for question-form copy. Report only; never fails the build.
//   node scripts/aeo-check.mjs
// The GEO study (Aggarwal et al., KDD 2024) found answers carrying a concrete figure, a named
// standard or a quotable specific are cited far more often by generative engines. This lists
// every FAQ answer and direct-answer paragraph in the site that carries none of those.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const SPECIFIC = /\d|\bAS\s?\d|\$|NATA|business day|kPa|mm\b|metre|Class [A-Z]/;
function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (p.endsWith(".tsx") || p.endsWith(".ts")) out.push(p);
  }
  return out;
}
const files = walk("src");
let total = 0, weak = [];
for (const f of files) {
  const src = readFileSync(f, "utf8");
  const answers = [...src.matchAll(/\b(?:a|answer):\s*"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);
  for (const a of answers) {
    total += 1;
    if (!SPECIFIC.test(a)) weak.push(`${f}: ${a.slice(0, 110)}...`);
  }
}
console.log(`aeo-check: ${total} answers scanned, ${weak.length} carry no figure, standard or specific:`);
for (const w of weak) console.log("  " + w);
