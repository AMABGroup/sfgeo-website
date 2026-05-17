# SFGEO SEO + Technical Audit — May 2026

Date: 17 May 2026
Scope: sfgeo.com.au (Next.js 16.1.6 App Router, React 19.2.3, Tailwind v4)
Branch reviewed: `claude/laughing-hellman-8a496f` (worktree)
Builds on: `SFGEO SEO + CRO + Competitive Analysis — 2026-04-28.md` (carries forward unresolved items; does not re-litigate items already shipped)

> **Correction (17 May 2026, post-publication).** P0-2 ("Broken image on `/about` projects gallery") was wrong. The Hurlstone Park JPEG was already in `public/`, the production `/about` page renders correctly, and the asset was 221 KB rather than the 5.7 MB originally quoted (the 5.7 MB figure belonged to a different file in the same `ls` output and was conflated during the audit). The repo root held an identical 221 KB duplicate, which has now been deleted. P0-2 is downgraded to a P2 housekeeping note below; Executive Summary and Recommended Next Steps have been updated accordingly. No production behaviour was affected at any point.

---

## Executive Summary

> **Scope note.** This audit is a **technical health check** of the live codebase: schema, metadata, sitemap, internal linking, image and script delivery, and known defects in the deployed site. It does **not** include competitive ranking analysis against Sydney geotechnical competitors, SERP share-of-voice modelling, or paid-search performance review. Those sit in a separate workstream and are partially covered in the April 2026 SEO + CRO + Competitive Analysis document.

The site is in good structural shape: clean URLs, non-www canonical, per-page Service and BreadcrumbList schema, all images routed through `next/image`, Resend wired correctly. The wins from the April 2026 push (canonicals, OG image, H1 keywords on commercial pages) are visible in the code.

Material issues still on the board:

- **Duplicate `metadata` exports** on four routes (About, Services, FAQ, Contact). The layout-level `metadata` is stale or conflicting with the page-level one. Next merges them, but the result is noise and at least one stale title is in the bundle.
- **Sitemap timestamps are frozen** at `2026-04-28`, so every page reports the same lastmod forever. Crawl prioritisation degrades.
- **Schema gaps**: no `founder` (Alli Atmar) on the Organization, no `AggregateRating` despite a live Google Reviews block, no `offers` block on the Site Classification Service even though the page shows fixed pricing.
- **Dead weight in the deploy**: ~20 MB of unreferenced `.HEIC` files in `public/`, plus an unused `nodemailer` dependency duplicating Resend.

Two items the brief flagged that did not reproduce:

- **The "$1,200 homepage pricing bug" is not present in this codebase.** A repo-wide search of `.tsx`, `.ts`, `.md`, `.json`, `.py` returns no `$1,200`, `$1200`, or unqualified `1,200` reference except `width: 1200` for the OG image. The only pricing strings in code are `$750` and `$1,000`, matching the stated correct values. Either it was fixed in a prior commit or the artifact lives outside the codebase (GMB, Google Ads, Instagram bio, an LLM SERP summary). Documented in P0 with the search receipts so it can be re-opened with new evidence.
- **The "14 unindexed pages" figure does not map to 14 canonical routes.** `src/app/` exposes 9 indexable routes. Suspects for the GSC count are listed in P0 with remediation paths.

---

## P0 — Blocking organic visibility (fix this week)

### P0-1. Duplicate `metadata` exports across four routes

**What.** Both `layout.tsx` and `page.tsx` export `metadata` for `/about`, `/services`, `/faq`, and `/contact`. Next.js merges parent and child metadata, with the child winning per field, so the page-level title is what ships. The layout-level copy is dead weight, and on About and FAQ the layout title differs from the page title (a stale title still sitting in the source).

| Route | Layout title (stale) | Page title (live) |
|---|---|---|
| `/about` | "About SFGEO \| Boutique Engineers in Marrickville, Sydney" | "Geotechnical Engineers Sydney \| About SFGEO" |
| `/faq` | "Geotechnical Engineering FAQs \| SFGEO Sydney" | "Geotechnical Engineering FAQ Sydney \| SFGEO" |
| `/services` | "Geotechnical Engineering Services \| SFGEO Sydney" | "Geotechnical Services Sydney \| SFGEO" |
| `/contact` | "Contact Our Sydney Geotechnical Engineers \| SFGEO" (same as page) | "Contact Our Sydney Geotechnical Engineers \| SFGEO" |

Contact also has an absolute canonical in the layout (`https://sfgeo.com.au/contact`) and a relative one in the page (`/contact`). Both resolve identically thanks to `metadataBase`, but the inconsistency is a maintenance hazard.

**Why it matters.** A confused source of truth for titles, descriptions and canonicals leads to drift. The next person editing one place and not the other will ship a regression. There is also a small risk that future Next.js metadata-merge behaviour changes catch this out.

**Fix.** Pick one location per route. Recommend keeping `metadata` on `page.tsx` (it is co-located with the breadcrumb and Service schema in the same file) and deleting the `metadata` export from the four `layout.tsx` files. The layouts can stay as thin pass-through wrappers if they have other responsibilities, otherwise delete the layout files entirely.

**Files affected.**
- [src/app/about/layout.tsx](src/app/about/layout.tsx) (remove metadata export)
- [src/app/services/layout.tsx](src/app/services/layout.tsx) (remove metadata export)
- [src/app/faq/layout.tsx](src/app/faq/layout.tsx) (remove metadata export)
- [src/app/contact/layout.tsx](src/app/contact/layout.tsx) (decide: this layout also carries the ContactPage + BreadcrumbList JSON-LD, so keep the file and remove only the metadata export, OR move the JSON-LD into the page and delete the layout entirely)

---

### P0-2. ~~Broken image on `/about` projects gallery~~ — **RESOLVED**

Status: **Resolved 17 May 2026.** Finding was incorrect on initial publication. The Hurlstone Park JPEG was already in `public/` and the `/about` gallery has been rendering correctly throughout. The repo-root duplicate (221 KB, byte-identical to the `public/` copy) was a redundant artefact and has been deleted. No production behaviour was ever affected. See correction note at top of document for background.

---

### P0-3. Sitemap `lastModified` is hardcoded to a fixed date

**What.** [src/app/sitemap.ts:5](src/app/sitemap.ts) sets `const today = new Date('2026-04-28')` and uses it for every URL. Every regeneration of the sitemap will publish the same lastmod for every page, regardless of when content actually changed.

**Why it matters.** Google uses `lastmod` to prioritise crawl. A sitemap that never updates teaches Googlebot that nothing on this site ever changes, which lowers crawl frequency. It is also a misleading signal once content does change. Bing is more sensitive to this than Google but both downweight stale signals.

**Fix.** Use `new Date()` for the recently-changed routes (home, site-classification, drilling, services, faq), and per-route fixed dates only for genuinely static pages (privacy-policy, terms-and-conditions). Better still, derive `lastModified` from file mtimes via `fs.statSync` on the corresponding source file, so future edits flow through automatically.

**Files affected.**
- [src/app/sitemap.ts](src/app/sitemap.ts)

---

### P0-4. Schema gaps that block rich-result eligibility

**What.** The combined Organization + ProfessionalService block in [src/app/layout.tsx:78](src/app/layout.tsx) is solid but missing fields specifically called for in the brief:

- No `founder` property. Brief specifies Alli Atmar; without it the Knowledge-Graph link between the firm and the named principal is implicit only.
- No `AggregateRating` despite a live Google Reviews block on the homepage ([src/app/page.tsx:310](src/app/page.tsx) → `GoogleReviews` component). The `/api/reviews` route already fetches the data; emitting it as schema is a separate JSON-LD block.
- No standalone `Person` entity for the Principal Engineer. Helps E-E-A-T attribution on technical content.

The Site Classification `Service` schema in [src/app/site-classification/page.tsx:50](src/app/site-classification/page.tsx) has no `offers` block, even though the page clearly shows fixed-fee starting prices.

**Why it matters.** `founder` + `Person` are the lowest-effort E-E-A-T signal in the YMYL-adjacent professional-services space (geotech sits next to construction safety, which Google treats cautiously). `AggregateRating` unlocks star ratings in rich results, with a measurable CTR uplift. `Offer` on the Site Classification Service is exactly the kind of structured pricing data Google promotes for service queries with cost intent ("site classification Sydney cost").

**Fix.**

1. **Add `founder` and `employee`** to the root Organization:
   ```jsonc
   "founder": {
     "@type": "Person",
     "@id": "https://sfgeo.com.au/about#alli-atmar",
     "name": "Alli Atmar",
     "jobTitle": "Principal Engineer",
     "worksFor": { "@id": "https://sfgeo.com.au/#organization" }
   }
   ```
2. **Emit `AggregateRating`** on the Organization (only if the Google Reviews payload has a real `rating` and `user_ratings_total`; never fabricate). Source it from the existing `/api/reviews` response. Cache for 24h matches the route's existing `revalidate`.
3. **Add `offers` to the Site Classification Service**:
   ```jsonc
   "offers": [
     { "@type": "Offer", "name": "Ancillary residential", "priceSpecification": {
        "@type": "PriceSpecification", "price": "750", "priceCurrency": "AUD",
        "valueAddedTaxIncluded": false, "description": "from $750 + GST" } },
     { "@type": "Offer", "name": "Standard residential", "priceSpecification": {
        "@type": "PriceSpecification", "price": "1000", "priceCurrency": "AUD",
        "valueAddedTaxIncluded": false, "description": "from $1,000 + GST" } }
   ]
   ```
   Pricing values match [src/app/site-classification/page.tsx:372,391](src/app/site-classification/page.tsx) and the FAQ copy at [src/data/faqs.ts:4,87](src/data/faqs.ts).

**Files affected.**
- [src/app/layout.tsx](src/app/layout.tsx) (founder, optional aggregateRating)
- [src/app/site-classification/page.tsx](src/app/site-classification/page.tsx) (offers block on serviceSchema)
- Optional new file `src/components/seo/AggregateRatingSchema.tsx` if you want to render it from real review data

---

### P0-5. "$1,200 pricing bug" — **RESOLVED**

Status: **Resolved 17 May 2026.** Confirmed by the brief owner that the `$1,200` figure was corrected in a prior commit before this audit was run. The current codebase is clean. Verified by repo-wide search for `1200`, `1,200`, `$1200`, `1100`, `1,100`, `$1100`, `$900`, `$800`, and word-form equivalents (`twelve hundred`, `eleven hundred`, etc.) across `*.tsx`, `*.ts`, `*.md`, `*.json`, `*.py`, and `public/`. The only `1200` hit is `width: 1200` for the OG image in [src/app/layout.tsx:56](src/app/layout.tsx) (correct).

**Live pricing inventory (verified clean):**
- `from $750 + GST` — [src/app/site-classification/page.tsx:372](src/app/site-classification/page.tsx) (ancillary residential card)
- `from $1,000 + GST` — [src/app/site-classification/page.tsx:391](src/app/site-classification/page.tsx) (standard residential card)
- `from $750 + GST … from $1,000 + GST` — [src/data/faqs.ts:4](src/data/faqs.ts) (rendered on `/faq`)
- `from $750 + GST … from $1,000 + GST` — [src/data/faqs.ts:87](src/data/faqs.ts) (`homeFaqs`, rendered on homepage)

All four match the brief's stated correct values ($750 ancillary, $1,000 standard). No code change needed.

---

### P0-6. "14 unindexed pages" — only 9 canonical routes exist

**What.** Brief references a 14 unindexed pages issue. `src/app/` contains 9 indexable routes:

| # | Route | In sitemap | Status |
|---|---|---|---|
| 1 | `/` | yes | indexable |
| 2 | `/about` | yes | indexable |
| 3 | `/services` | yes | indexable |
| 4 | `/site-classification` | yes | indexable |
| 5 | `/drilling` | yes | indexable |
| 6 | `/faq` | yes | indexable |
| 7 | `/contact` | yes | indexable |
| 8 | `/privacy-policy` | yes | indexable |
| 9 | `/terms-and-conditions` | yes | indexable |

Plus 2 API routes correctly excluded (`/api/contact`, `/api/reviews`). Plus 1 permanent redirect (`/services/site-classification` → `/site-classification`, configured in [next.config.ts:6](next.config.ts)).

**Why it matters.** The 14 figure must include URL variants GSC has discovered. Most likely contributors:

1. **Protocol / host variants discovered before the redirects took full effect**: `http://sfgeo.com.au/*`, `https://www.sfgeo.com.au/*`, `http://www.sfgeo.com.au/*`. Netlify now 301s all three to apex HTTPS (correct, per [netlify.toml:1-15](netlify.toml)), but GSC retains historical records.
2. **Deep anchor URLs** Google may have separately catalogued: `/services#design`, `/services#inspections`, `/services#investigation`, `/services#partners`, `/drilling#drilling`, `/drilling#tight-access`, `/drilling#environmental`, `/drilling#b2b-drilling`, `/about#team`, `/about#projects`, `/about#accreditations`. These all return the same page body as the canonical, so GSC may flag them as "duplicate, Google chose a different canonical".
3. **The redirected URL** `/services/site-classification`.
4. **Stale URLs** from a prior site structure.

**Fix.**
1. Export the GSC "Why pages aren't indexed" report and confirm the actual 14 URLs.
2. For protocol/host variants: do nothing in code (redirects already in place); use the GSC "Validate fix" button.
3. For deep anchor URLs: harmless once GSC sees they resolve to the canonical via fragment. Optionally add `<link rel="canonical">` server-side (already done via Next metadata) and ignore the noise.
4. For any genuinely orphaned old URLs: add explicit 301s in `next.config.ts` next to the existing `/services/site-classification` rule.

**Files affected.**
- [next.config.ts](next.config.ts) (add redirects only after evidence)
- No other code changes pending the GSC export.

---

## P1 — Material drag on rankings (fix this month)

### P1-1. Homepage and `/faq` both emit the same `FAQPage` JSON-LD entries

**What.** [src/app/page.tsx:16](src/app/page.tsx) emits a `FAQPage` schema for the 6 `homeFaqs`. [src/app/faq/page.tsx:46](src/app/faq/page.tsx) emits one for all 20 `faqs`. The 6 home questions are a subset of the 20 (verbatim text in [src/data/faqs.ts](src/data/faqs.ts) lines 3-4 and 86-87, etc.).

**Why it matters.** Google deduplicates identical `FAQPage` entries across pages and chooses one canonical surface. It often picks the wrong one. Either the homepage steals FAQ rich results from the dedicated FAQ page (diluting `/faq` rankings for the question queries), or `/faq` wins and the homepage schema is wasted overhead. Either way the duplication is working against you.

**Fix.** Pick one: either remove the `FAQPage` schema from the homepage (keep the visible FAQ component for CRO, drop only the JSON-LD), or write 6 distinct FAQs for the homepage that do not appear on `/faq`. Recommend the former — `/faq` is the page that should own those snippets.

**Files affected.**
- [src/app/page.tsx:16-27, 47-50](src/app/page.tsx) (remove the `faqSchema` const and its `<script>` injection)

---

### P1-2. Site Classification `Service` schema has no `offers` block

**What.** See P0-4. Called out separately here because the fix is independently shippable even if the founder/aggregateRating work slips.

**Why.** "Site classification Sydney cost" is exactly the query an `Offer` block is built for.

**Fix.** Add the `offers` array to `serviceSchema` in [src/app/site-classification/page.tsx:50](src/app/site-classification/page.tsx) using the snippet in P0-4.

**Files affected.** [src/app/site-classification/page.tsx](src/app/site-classification/page.tsx)

---

### P1-3. Footer internal linking is thin and misses the highest-value commercial page

**What.** [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx) lists two service links: `/services` and `/drilling`. It does **not** link to `/site-classification` (the highest-intent commercial page) or `/faq` (the strongest long-tail SEO page).

**Why it matters.** Site-wide footer links pass internal PageRank to every page they appear on. Currently `/site-classification` only receives equity from navbar dropdown and a handful of in-body cross-links. Adding it to the footer adds a site-wide vote.

**Fix.** Restructure the Services column:
```
Services
- Site Classification (AS2870)
- Geotechnical Services
- Drilling Services
- Geotechnical FAQ
```

**Files affected.** [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx)

---

### P1-4. Suburb mentions are unlinked plain text everywhere

**What.** Marrickville, Inner West, North Shore, Western Sydney, Parramatta, Eastern Suburbs, Cumberland Plain, Hills District, Hurlstone Park, Baulkham Hills, Cherrybrook, Kellyville, Surry Hills, Dural, Liverpool, Campbelltown and others appear as flat text across the home, about, services, drilling, site-classification, and ServiceAreaBlock. None are anchored to anything, and no suburb landing pages exist.

**Why it matters.** Two distinct losses. **First**, "geotechnical engineer {suburb}" is a high-intent long-tail pattern with measurable volume across the Sydney basin. With no landing pages, those queries cannot rank. **Second**, internal link equity to the geo-terms is zero, so even if a suburb page existed it would be orphaned.

**Fix (two-phase).**

*Phase 1, this month.* Anchor existing suburb mentions to the closest relevant page. Examples:
- "Inner West" → `/site-classification#suburbs` (the suburb-geology section)
- "North Shore" → same
- "Parramatta" → `/services`
- "Marrickville" → `/contact` (office location) or `/about` (HQ)

*Phase 2, backlog.* Build dedicated suburb landing pages for the 4-6 highest-volume areas using the geological notes already in [src/app/site-classification/page.tsx:523-540](src/app/site-classification/page.tsx) as the content seed. Each becomes a `/site-classification/inner-west`, `/site-classification/north-shore` style URL, with `Service` schema scoped to that `AreaServed`.

**Files affected (phase 1).**
- [src/components/sections/ServiceAreaBlock.tsx](src/components/sections/ServiceAreaBlock.tsx) (suburb names in each region block)
- [src/app/about/AboutClient.tsx](src/app/about/AboutClient.tsx) (Surry Hills, Dural, Kellyville, Marrickville mentions)
- [src/app/site-classification/page.tsx:530-533](src/app/site-classification/page.tsx) (suburb cards)

---

### P1-5. Google Ads gtag loaded as raw `<script>`, bypasses `next/script`

**What.** [src/app/layout.tsx:121-131](src/app/layout.tsx) loads `googletagmanager.com/gtag/js?id=AW-18053070765` via a raw `<script async>` tag in `<head>`, plus an inline `dangerouslySetInnerHTML` for the gtag config. Meanwhile `import Script from "next/script"` sits unused at line 8.

**Why it matters.** `next/script` with `strategy="afterInteractive"` defers loading until after hydration, which removes the gtag request from the LCP path. The current raw-script approach blocks the parser briefly and shows up as render-blocking in Lighthouse. On mobile 4G with a cold cache this is typically 100-200ms shaved off TTI.

**Fix.** Swap both raw scripts for `<Script>`:
```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=AW-18053070765"
  strategy="afterInteractive"
/>
<Script id="gtag-init" strategy="afterInteractive">
  {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-18053070765');`}
</Script>
```
Place these in the `<body>` block, not `<head>`. The unused `Script` import becomes used.

**Files affected.** [src/app/layout.tsx](src/app/layout.tsx)

---

### P1-6. Oversized source images and a misplaced `priority` preload

**What.** Several committed images exceed 3 MB at source. `next/image` does transform them on demand, but the source assets bloat the repo and the Netlify deploy, and the first transform on a cold cache is slow:

| File | Size | Used in |
|---|---|---|
| `4wd-geotechnical-drilling-rig-residential-sydney-mobilisation.jpg` | 5.7 MB | [drilling B2B block](src/app/drilling/DrillingClient.tsx) |
| `footing-pile-inspection-north-willoughby-geotechnical.jpg` | 5.5 MB | [about projects gallery](src/app/about/AboutClient.tsx) |
| `geotechnical-engineer-led-field-operations-sydney.jpg` | 5.4 MB | [about hero portrait](src/app/about/AboutClient.tsx) |
| `service-investigation-detail.png` | 3.2 MB | [services investigation block](src/app/services/ServicesClient.tsx) |

Separately, [src/app/drilling/DrillingClient.tsx:218](src/app/drilling/DrillingClient.tsx) sets `priority` on `prelim-investigation.jpg`, which is the **second** content block on the page, well below the fold. `priority` triggers a `<link rel="preload">` and tells the browser to skip lazy loading. It should be reserved for the LCP image only.

**Why it matters.** LCP regression risk on `/about` and `/drilling`. The misplaced `priority` actively hurts CWV by competing with the genuine LCP image for bandwidth.

**Fix.**
1. Compress the four source images. Target: ≤500 KB at 2400px wide for JPEG, ≤300 KB for PNG. Tools: `squoosh`, `sharp` CLI, or ImageOptim.
2. Remove `priority` from [src/app/drilling/DrillingClient.tsx:218](src/app/drilling/DrillingClient.tsx). Keep `priority` only on the drilling page's first hero image if there is one (there is not currently; the hero is text-only, so no `priority` is needed at all on this page).
3. Audit other `priority` flags: legitimate uses are the homepage hero [src/app/page.tsx:63](src/app/page.tsx) and the About hero [src/app/about/AboutClient.tsx:74](src/app/about/AboutClient.tsx). The Navbar logo also uses `priority` ([src/components/layout/Navbar.tsx:74](src/components/layout/Navbar.tsx)), which is reasonable.

**Files affected.**
- Source images in `public/` (re-export and replace in place)
- [src/app/drilling/DrillingClient.tsx](src/app/drilling/DrillingClient.tsx)

---

### P1-7. Dead HEIC files in `public/` (~20 MB)

**What.** Four files in `public/`:
- `sydney-sandstone.HEIC` (6.7 MB)
- `sydney-sandstone-integrated.HEIC` (5.6 MB)
- `pile-drilling.HEIC` (5.4 MB)
- `pile-drilling2.heic` (3.1 MB)

None are referenced anywhere in `src/`. HEIC is not a browser-renderable format, so even if referenced they would not display.

**Why it matters.** ~20 MB added to every Netlify deploy, slower CI, slower local clones. No SEO value. Risk that someone wires them up by mistake.

**Fix.** Delete:
```
git rm public/sydney-sandstone.HEIC public/sydney-sandstone-integrated.HEIC public/pile-drilling.HEIC public/pile-drilling2.heic
```
If the underlying photos are wanted, convert to optimised JPEG/WebP at sensible dimensions and add only the converted versions.

**Files affected.** `public/` (4 files removed)

---

### P1-8. `nodemailer` is an unused dependency duplicating Resend

**What.** [package.json:15,25](package.json) declares both `nodemailer` (^8.0.2) and `@types/nodemailer` (^7.0.11). The contact API route at [src/app/api/contact/route.ts:2](src/app/api/contact/route.ts) only imports and uses Resend. `nodemailer` is not imported anywhere.

**Why it matters.** Bundle weight (less critical for an API route, but still); supply-chain surface; cognitive overhead for the next developer wondering which mailer to use; dependabot churn.

**Fix.**
```
npm uninstall nodemailer @types/nodemailer
```

**Files affected.** [package.json](package.json), `package-lock.json`

---

## P2 — Optimisations (backlog)

- **Per-page OG image variants.** All pages share `/og/sfgeo-og.png`. Site Classification, Drilling, About each merit their own 1200x630 image. Bigger LinkedIn / Slack CTR.
- **Drop the `keywords` meta array.** [src/app/layout.tsx:24-42](src/app/layout.tsx) — Google has ignored meta keywords since 2009. Harmless noise; remove for cleanliness.
- **`lang="en-AU"`** instead of `lang="en"` in [src/app/layout.tsx:119](src/app/layout.tsx). Aligns with the Australian English brand voice and is a tiny locale signal.
- **GA4.** Only Google Ads conversion (`AW-18053070765`) is wired. No GA4 measurement ID. Add `G-XXXXXXX` for organic-search analytics if you want it.
- **Meta description length.** Several descriptions are 162-175 chars (Google truncates at ~155-160 in SERPs). Tighten on About, Services, Site Classification, Drilling.
- **Repo root cleanup.** Three Python scripts (`swap_sections.py`, `update_homepage.py`, `update_page.py`) sit at the repo root. Move to `scripts/` or remove if obsolete. (A duplicate `tier-1-...jpg` formerly at the root has already been deleted; the canonical asset lives in `public/`.)
- **Unused `Script` import** in [src/app/layout.tsx:8](src/app/layout.tsx) goes away when P1-5 is fixed.
- **Person schema for Alli Atmar.** Standalone `Person` JSON-LD on `/about`, separate from the Organization `founder`. Helps Google associate technical content with a named expert.
- **Add `BreadcrumbList` to the homepage.** Currently absent. One-item list pointing to home, for consistency with every other route.

---

## What is already done well

- Non-www canonical strategy is clean: `metadataBase` in root, Netlify 301s for www and HTTP, consistent absolute URLs in schema.
- Every commercial page has `BreadcrumbList` + page-specific `Service` schema.
- All images go through `next/image`; no raw `<img>` in the codebase.
- Fonts loaded via `next/font/google` with automatic self-hosting and `font-display: swap` defaults.
- `robots.txt` + sitemap exist and reference the correct host.
- `FAQPage` schema on `/faq` covers all 20 questions (homepage duplication aside).
- HSTS + security headers via Netlify.
- ContactForm has a working honeypot.
- H1 hierarchy: every page has exactly one H1 (verified).
- Site Classification page content depth (suburb-by-suburb geology, AS 2870 class table, transparent fixed-fee pricing) is genuinely strong and converts well per the April 2026 analysis.

---

## Recommended next steps (ordered)

1. **Today.** Delete the four duplicate `metadata` exports (P0-1). Replace the hardcoded sitemap date with `new Date()` for the dynamic routes (P0-3). Both are 15-minute fixes. (P0-2 has been retracted, see correction note at top.)
2. **This week.** Add `founder` (Alli Atmar) to the Organization schema and `offers` to the Site Classification Service (P0-4 + P1-2). Remove the homepage FAQ JSON-LD (P1-1). Remove `nodemailer` from dependencies (P1-8).
3. **This week.** Get the GSC "Why pages aren't indexed" export and resolve P0-6 with evidence. Get a screenshot or URL for the `$1,200` artefact (P0-5) and remediate at source.
4. **This month.** Move gtag to `next/script` (P1-5). Compress the four oversized source images and fix the misplaced `priority` flag (P1-6). Delete the four HEIC files (P1-7). Add `/site-classification` and `/faq` to the footer (P1-3).
5. **This month.** Phase-1 suburb-anchor pass: link existing suburb mentions to the closest relevant page (P1-4). Defer Phase-2 (suburb landing pages) to the next sprint planning cycle once GSC has confirmed search demand by suburb.
6. **Backlog.** P2 items in priority order: per-page OG images → GA4 → meta description tightening → repo cleanup → Person schema → homepage BreadcrumbList → `lang="en-AU"` → drop `keywords` meta.

---

*End of audit.*
