import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: "Geotechnical Services Sydney | SFGEO",
  description: "Specialist geotechnical services across Sydney. Principal-led site classifications, investigations, and construction support for residential and commercial builds.",
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: "Geotechnical Services Sydney | SFGEO",
    description: "Specialist geotechnical services across Sydney. Principal-led site classifications, investigations, and construction support for residential and commercial builds.",
    url: '/services',
  },
  twitter: {
    title: "Geotechnical Services Sydney | SFGEO",
    description: "Specialist geotechnical services across Sydney. Principal-led site classifications, investigations, and construction support for residential and commercial builds.",
  },
};

export default function ServicesHubPage() {
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
          "@id": "https://sfgeo.com.au/services",
          "name": "Services"
        }
      }
    ]
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@id": "https://sfgeo.com.au/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Sydney"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Geotechnical Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Preliminary Site Works",
            "description": "Soil Testing & AS2870 Site Classification for residential and commercial projects.",
            "areaServed": "Sydney",
            "provider": { "@id": "https://sfgeo.com.au/#organization" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Construction Phase Support",
            "description": "Rapid on-site geotechnical inspections for footings, piers, and retaining walls.",
            "areaServed": "Sydney",
            "provider": { "@id": "https://sfgeo.com.au/#organization" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Geotechnical Design",
            "description": "Critical foundational data, soil parameters, and pile design inputs.",
            "areaServed": "Sydney",
            "provider": { "@id": "https://sfgeo.com.au/#organization" }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Drilling Services",
            "description": "4WD-mounted drill rig and tight-access borehole drilling across Sydney.",
            "areaServed": "Sydney",
            "provider": { "@id": "https://sfgeo.com.au/#organization" }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <ServicesClient />
    </>
  );
}
