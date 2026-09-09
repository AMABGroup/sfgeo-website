import { Metadata } from 'next';
import FaqClient from './FaqClient';
import { faqs } from '@/data/faqs';
import { pageMeta } from '@/lib/seo';

export const metadata: Metadata = pageMeta(
  "Soil Test & Geotechnical Report FAQ Sydney | SFGEO",
  "Do you need a soil test for a granny flat? What is Class M? How long does a geotechnical report take? Clear answers from the engineers who do the work in Sydney.",
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
