# SFGEO SEO + CRO + Competitive Analysis — April 28, 2026

## EXECUTIVE SUMMARY

### What to do before pushing
- **Fix Canonical Tags**: Ensure every page has a canonical tag pointing to its correct, lowercase URL (especially `/drilling` which currently points to `/drilling-and-sampling`).
- **Update H1 Headings**: Inject primary keywords + "Sydney" into H1s for the Home, About, Site Classification, and Drilling pages.
- **Add OG/Twitter Images**: Define a global `og:image` (1200x630) to prevent generic link previews.
- **Optimise Meta Descriptions**: Shorten descriptions to under 160 characters and ensure a clear call-to-value is present on every page.

### What to do immediately after pushing
- **Submit to GSC**: Use the provided list of new/changed URLs to request indexing in Google Search Console.
- **Update Google Ads**: Shift traffic for "Site Classification" and "Drilling" ad groups to their respective dedicated landing pages rather than the homepage.
- **Monitor Search Console**: Watch for any mobile usability or indexing flags.

### What to do in the next 30 days
- **Backlink Outreach**: Reach out to 5–10 local Sydney builder/architect partners to link back to the new "Partner Network" section.
- **Case Studies**: Add 3 detailed case studies (e.g., "Marrickville Shale", "North Shore Sandstone") to boost E-E-A-T.
- **GMB (Google My Business) Optimisation**: Ensure the business location and service area exactly match the new schema data on the site.

---

## PART A — TECHNICAL / HIDDEN SEO AUDIT

| Page | Title Tag (Target < 60) | Meta Description (Target 150-160) | Canonical | OG/Twitter Tags | H1 Presence | Internal Linking |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Home** | 59 chars - ✅ | 178 chars - ⚠️ (Too long) | ✅ Correct | ⚠️ Image Missing | ✅ One (No keywords) | ✅ Good |
| **About** | 77 chars - ⚠️ (Too long) | 202 chars - ⚠️ (Too long) | ❌ Missing | ⚠️ Image Missing | ✅ One (No keywords) | ✅ Good |
| **Services** | 75 chars - ⚠️ (Too long) | 193 chars - ⚠️ (Too long) | ❌ Missing | ❌ Missing | ✅ One (Good) | ✅ Good |
| **Site Class.** | 55 chars - ✅ | 180 chars - ⚠️ (Too long) | ✅ Correct | ⚠️ Image Missing | ✅ One (No 'Sydney') | ✅ Good |
| **Drilling** | 67 chars - ⚠️ (Too long) | 189 chars - ⚠️ (Too long) | ⚠️ Wrong URL | ❌ Missing | ✅ One (No keywords) | ✅ Good |
| **Contact** | 50 chars - ✅ | 159 chars - ✅ | ✅ Correct | ❌ Missing | ✅ One (Basic) | ✅ Good |
| **FAQ** | 69 chars - ⚠️ (Too long) | 180 chars - ⚠️ (Too long) | ❌ Missing | ❌ Missing | ✅ One (Standard) | ✅ Good |

### Technical Findings:
- **Schema.org**: `FAQPage` and `GeotechnicalEngineer` (LocalBusiness) are well-implemented on Home and FAQ. `Service` schema is present on commercial pages. 
- **Robots Meta**: No accidental noindex found.
- **URL Structure**: Clean, lowercase, hyphenated.
- **Page Speed**: Site uses Next.js with optimized images; LCP and CLS are likely excellent (visual inspection).
- **HTTPS/HSTS**: Correctly configured via Netlify.

---

## PART B — VISIBLE / ON-PAGE SEO AUDIT

### Key Commercial Pages Audit

#### **Site Classification Sydney**
- **Primary Keyword**: "Site Classification Sydney"
- **Keyword Usage**: High in content, alt text, and meta. Missing in H1.
- **Search Intent**: Perfect. Answers "What is it?", "How much?", and "How fast?".
- **Content Depth**: Exceptional. Tables for AS 2870 classes and suburb-specific geological notes are high-value.
- **E-E-A-T**: Strong. Mentions NATA labs, Principal-led, and local experience.

#### **Geotechnical Drilling Sydney**
- **Primary Keyword**: "Geotechnical Drilling Sydney"
- **Keyword Usage**: Strong in content and subheads. Missing in H1.
- **Search Intent**: Good. Addresses access issues (4WD, tight access) which is a major pain point.
- **Content Depth**: Good. Detailed rig capabilities and B2B section are strong.

#### **About (The "Sydney Geotechnical Engineer" Page)**
- **Primary Keyword**: "Geotechnical Engineer Sydney"
- **Keyword Usage**: High in content.
- **Search Intent**: Matches people looking for the "person" behind the firm.
- **Local SEO**: Natural mentions of Marrickville, Inner West, and North Shore.

---

## PART C — CRO AUDIT (CONVERSION RATE OPTIMISATION)

### Above-The-Fold Analysis
- **Value Proposition**: "Geotechnical Done Properly" (Home) is bold but abstract. "Engineered Properly" (Site Class) is better. Recommend: "Sydney's Geotechnical Specialists. Engineered Properly."
- **Primary CTA**: Clear "Request an Inspection" or "Discuss Project" buttons. Consistent across site.
- **Trust Signals**: Engineers Australia / AGS logos are present but lower down. Recommend moving accreditation logos closer to the hero on About/Home.

### Friction & Social Proof
- **Friction**: 1 click to contact form from any page. Clickable phone numbers are site-wide.
- **Social Proof**: Google Reviews block is excellent and builds immediate trust.
- **FAQ**: Answering "How much?" directly on the Site Classification page is a huge CRO win.

### Opinion: Will this version convert better?
**Yes, significantly.** The prior version (presumably) lacked the depth of "Suburbs" data and the "Volume vs. SFGEO" comparison table. This table creates a "binary choice" for the user where choosing a competitor feels like choosing a "corporate template." This is high-leverage CRO.

---

## PART D — COMPETITIVE ANALYSIS (SYDNEY METRO)

### Top 5 Competitors
1. **Ideal Geotech**: Ranking for high-volume "soil test" queries. Positioning: High speed, high volume. Gaps: Corporate feel, lack of direct senior access.
2. **Momentum Geotechnical**: Strong on residential. Positioning: Fast turnaround. SFGEO can beat them on "Technical Depth" and "Construction Experience."
3. **Atlas Engineering**: Technical authority. Positioning: Complex commercial. SFGEO can win on "Residential Agility" and "Transparent Pricing."
4. **BHM Geotechnical**: Strong digital presence. Positioning: Online ordering. Gap: Their drilling is often subcontracted; SFGEO's "Integrated Rig" is a cost/control win.
5. **Douglas Partners**: The "Behemoth." Positioning: Tier 1 Infrastructure. SFGEO can win on "Boutique care" for premium residential/commercial.

### Day One Ranking Prediction
- **"Site Classification Sydney"**: Likely Page 2-3 initially, moving to Page 1 within 60 days due to content depth.
- **"Geotechnical Drilling Sydney"**: Page 1 potential within 30 days (less competitive than 'engineering' queries).
- **"4WD Drill Rig Sydney"**: High probability of Top 3 ranking due to specific keyword targeting in H2s and Alt tags.

---

## PART E — SITEMAP & SEARCH CONSOLE READINESS

### Sitemap Status
- **Current URL**: [https://www.sfgeo.com.au/sitemap.xml](https://www.sfgeo.com.au/sitemap.xml) (Generated via `src/app/sitemap.ts`)
- **Action**: Submit this URL to GSC immediately after deploy.

### URLs for GSC Submission
1. `https://www.sfgeo.com.au/site-classification` (Core commercial)
2. `https://www.sfgeo.com.au/drilling` (Core commercial)
3. `https://www.sfgeo.com.au/services` (Service hub)
4. `https://www.sfgeo.com.au/faq` (Long-tail SEO)

### Google Ads Updates
| Landing Page URL | Ad Group | Note |
| :--- | :--- | :--- |
| `/site-classification` | Site Classification / Soil Testing | Replace Home link for higher quality score. |
| `/drilling` | Geotechnical & Environmental Drilling | Perfect match for "4WD Rig" and "Borehole" queries. |
| `/services` | Geotechnical Engineering / Investigations | Best for broad "Geotechnical Engineer" intent. |
| `/contact` | Lead Generation / Quote Requests | For "Emergency" or "Urgent" search queries. |
