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
        "description": "Speak directly with a Sydney geotechnical consultant. Fixed-fee quotes for site classifications, investigations, and drilling services across Greater Sydney.",
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
