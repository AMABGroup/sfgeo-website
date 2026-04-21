import { Metadata } from 'next';
import FaqClient from './FaqClient';
import { faqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Geotechnical Engineering Sydney | SFGEO",
  description: "Everything you need to know about geotechnical investigations, AS2870 site classifications, NATA-accredited testing, and construction support in Sydney — answered in plain English.",
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/<br\/>/g, ' ')
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqClient />
    </>
  );
}
