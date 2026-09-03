import { Metadata } from 'next';
import FaqClient from './FaqClient';
import { faqs } from '@/data/faqs';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta(
  "Geotechnical Report Cost & FAQ Sydney | SFGEO",
  "Geotechnical report and soil test costs in Sydney (from $800 + GST), turnaround, and what DA, CDC and certifiers need — from the engineers who do the work.",
  "/faq"
);

export default function FaqPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@id": "https://sfgeo.com.au/",
          "name": "Home"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@id": "https://sfgeo.com.au/faq",
          "name": "FAQ"
        }
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/<br\/>/g, ' ').replace(/href="\//g, 'href="https://sfgeo.com.au/')
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqClient />
    </>
  );
}
