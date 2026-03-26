import { Metadata } from 'next';
import DrillingClient from './DrillingClient';

export const metadata: Metadata = {
  title: "Environmental Drilling & Rock Coring Sydney | SFGEO",
  description: "Sydney's tight-access subsurface drilling specialists. Core drilling, environmental sampling, and reliable rock core logging for complex sites.",
  keywords: "Rock Drilling Sydney, Restricted Access Rig, NMLC Coring, Environmental Soil Sampling, Geotech Boreholes Inner West, Auger Drilling",
  alternates: {
    canonical: '/drilling-and-sampling',
  }
};

export default function DrillingSamplingPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Solid Foundation Geotechnical (SFGEO)",
    "image": "https://www.sfgeo.com.au/img_0078_v3.png",
    "@id": "https://www.sfgeo.com.au/drilling-and-sampling",
    "url": "https://www.sfgeo.com.au/drilling-and-sampling",
    "telephone": "+61400000000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Marrickville",
      "addressLocality": "Sydney",
      "addressRegion": "NSW",
      "postalCode": "2204",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.9111,
      "longitude": 151.1578
    },
    "areaServed": [
      { "@type": "City", "name": "Marrickville" },
      { "@type": "City", "name": "Inner West" },
      { "@type": "City", "name": "Parramatta" },
      { "@type": "City", "name": "Western Sydney" },
      { "@type": "City", "name": "Greater Sydney" }
    ],
    "priceRange": "$$"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Geotechnical Drilling & Environmental Sampling",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Solid Foundation Geotechnical"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <DrillingClient />
    </>
  );
}
