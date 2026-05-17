import Script from "next/script";

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
          "@id": "https://sfgeo.com.au/#organization"
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
      <script
        id="schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
