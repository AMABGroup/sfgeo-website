import { Metadata } from 'next';
import DrillingClient from './DrillingClient';

export const metadata: Metadata = {
  title: "Geotechnical Drilling Sydney | 4WD Mobilised | SFGEO",
  description: "Geotechnical and environmental drilling in Sydney. 4WD-mounted rig, tight-access capability and PSI/DSI sampling for residential and commercial sites.",
  alternates: {
    canonical: '/drilling',
  },
  openGraph: {
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Geotechnical Drilling Sydney | 4WD Mobilised | SFGEO",
    description: "Geotechnical and environmental drilling in Sydney. 4WD-mounted rig, tight-access capability and PSI/DSI sampling for residential and commercial sites.",
    url: '/drilling',
  },
  twitter: {
    card: "summary_large_image",
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Geotechnical Drilling Sydney | 4WD Mobilised | SFGEO",
    description: "Geotechnical and environmental drilling in Sydney. 4WD-mounted rig, tight-access capability and PSI/DSI sampling for residential and commercial sites.",
  },
};

export default function DrillingSamplingPage() {
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
          "@id": "https://sfgeo.com.au/drilling",
          "name": "Drilling"
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Geotechnical Drilling & Environmental Sampling",
    "provider": {
      "@id": "https://sfgeo.com.au/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Sydney"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Drilling Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Borehole Drilling & NMLC Rock Coring"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tight-Access & Restricted Access Drilling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Environmental Sampling (PSI/DSI Fieldwork)"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <DrillingClient />
    </>
  );
}
