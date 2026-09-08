// House-voice lint for site copy. Fails the build step it is wired into when copy drifts.
//   node scripts/voice-lint.mjs
// Rules: no em dashes in visible copy (an em dash used as an empty-value marker, e.g. "—", is allowed);
// no banned words; no stale turnaround wording. Code comments are ignored.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const ROOTS = ["src/app", "src/components", "src/data", "src/lib"];
const EXTRA = ["public/llms.txt"];
const EXT = new Set([".ts", ".tsx", ".txt"]);
const BANNED = [/\bgenuinely\b/i, /\bhonestly\b/i, /\bstraightforward\b/i, /\b2\s*[–-]\s*3 business days\b/i];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (EXT.has(extname(p))) out.push(p);
  }
  return out;
}
const files = [...ROOTS.flatMap((r) => walk(r)), ...EXTRA];
const findings = [];
for (const f of files) {
  const lines = readFileSync(f, "utf8").split("\n");
  lines.forEach((line, i) => {
    const t = line.trim();
    if (/^(\/\/|\*|\/\*|\{\/\*)/.test(t)) return; // comment
    // strip em dashes that stand alone as an empty-value marker: "—", '—', `—`, "—")
    const stripped = line.replace(/(["'`])—\1/g, "");
    if (/—|&mdash;/.test(stripped)) findings.push(`${f}:${i + 1}: em dash: ${t.slice(0, 120)}`);
    if (/GoogleReviews/.test(f)) return; // client review text is quoted verbatim, not house copy
    for (const re of BANNED) if (re.test(line)) findings.push(`${f}:${i + 1}: banned wording (${re.source}): ${t.slice(0, 120)}`);
  });
}
if (findings.length) {
  console.error(findings.join("\n"));
  console.error(`\nvoice-lint: ${findings.length} problem(s)`);
  process.exit(1);
}
console.log(`voice-lint: clean (${files.length} files)`);
