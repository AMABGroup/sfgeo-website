import { Metadata } from 'next';
import FaqClient from './FaqClient';
import { faqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: "Geotechnical Engineering FAQ Sydney | SFGEO",
  description: "Common questions about geotechnical investigations, site classifications, and soil testing in Sydney. Clear, technical advice for homeowners and builders.",
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: "Geotechnical Engineering FAQ Sydney | SFGEO",
    description: "Common questions about geotechnical investigations, site classifications, and soil testing in Sydney. Clear, technical advice for homeowners and builders.",
    url: '/faq',
  },
  twitter: {
    title: "Geotechnical Engineering FAQ Sydney | SFGEO",
    description: "Common questions about geotechnical investigations, site classifications, and soil testing in Sydney. Clear, technical advice for homeowners and builders.",
  },
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
