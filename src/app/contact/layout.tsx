import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Our Sydney Geotechnical Engineers | SFGEO",
  description: "Request a bespoke fixed-price fee proposal, site classification, or urgent construction inspection. Our team spans the entire Greater Sydney Metro area including Marrickville and Parramatta.",
  alternates: {
    canonical: "https://sfgeo.com.au/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://sfgeo.com.au/contact/#webpage",
        "url": "https://sfgeo.com.au/contact",
        "name": "Contact Solid Foundation Geotechnical",
        "description": "Contact Sydney's leading boutique geotechnical consultancy for soil testing, site classifications, and drilling services.",
        "breadcrumb": {
          "@id": "https://sfgeo.com.au/contact/#breadcrumb"
        },
        "mainEntity": {
          "@type": "LocalBusiness",
          "name": "Solid Foundation Geotechnical",
          "image": "https://sfgeo.com.au/logo.png",
          "@id": "https://sfgeo.com.au/#organization",
          "url": "https://sfgeo.com.au",
          "telephone": "0423 483 555",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Level 3, 107 Sydenham Road",
            "addressLocality": "Marrickville",
            "addressRegion": "NSW",
            "postalCode": "2204",
            "addressCountry": "AU"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -33.9105,
            "longitude": 151.1611
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "06:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Saturday", "Sunday"],
              "opens": "08:00",
              "closes": "14:00"
            }
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "0423 483 555",
            "contactType": "customer service",
            "areaServed": "Sydney",
            "availableLanguage": "en"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sfgeo.com.au/contact/#breadcrumb",
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
              "@id": "https://sfgeo.com.au/contact",
              "name": "Contact"
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
