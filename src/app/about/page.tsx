import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Geotechnical Engineers Sydney | About SFGEO",
  description: "Sydney's boutique geotechnical consultancy. Meet the Principal Engineer behind every classification, investigation and drilling job across Sydney.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Geotechnical Engineers Sydney | About SFGEO",
    description: "Sydney's boutique geotechnical consultancy. Meet the Principal Engineer behind every classification, investigation and drilling job across Sydney.",
    url: '/about',
  },
  twitter: {
    card: "summary_large_image",
    images: ['/og/sfgeo-og-card.jpg'],
    title: "Geotechnical Engineers Sydney | About SFGEO",
    description: "Sydney's boutique geotechnical consultancy. Meet the Principal Engineer behind every classification, investigation and drilling job across Sydney.",
  },
};

export default function About() {
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
          "@id": "https://sfgeo.com.au/about",
          "name": "About"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutClient />
    </>
  );
}
