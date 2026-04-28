import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Geotechnical Engineers Sydney | About SFGEO",
  description: "Sydney's boutique geotechnical consultancy. Meet the principal-led team delivering site classifications, investigations, and 4WD drilling across Greater Sydney.",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "Geotechnical Engineers Sydney | About SFGEO",
    description: "Sydney's boutique geotechnical consultancy. Meet the principal-led team delivering site classifications, investigations, and 4WD drilling across Greater Sydney.",
    url: '/about',
  },
  twitter: {
    title: "Geotechnical Engineers Sydney | About SFGEO",
    description: "Sydney's boutique geotechnical consultancy. Meet the principal-led team delivering site classifications, investigations, and 4WD drilling across Greater Sydney.",
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
