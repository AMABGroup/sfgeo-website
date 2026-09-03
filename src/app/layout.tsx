import type { Metadata } from "next";
import { Inter, Montserrat, Archivo } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-archivo",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sfgeo.com.au'),
  title: "Geotechnical Engineer Sydney | Solid Foundation Geotechnical",
  description: "Sydney's boutique geotechnical consultancy. Principal-led site classifications, investigations, and 4WD drilling with fixed-fee quotes and local expertise.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Geotechnical Engineer Sydney | Solid Foundation Geotechnical",
    description: "Sydney's boutique geotechnical consultancy. Principal-led site classifications, investigations, and 4WD drilling with fixed-fee quotes and local expertise.",
    siteName: "SFGEO",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: '/og/sfgeo-og-card.jpg',
        width: 1200,
        height: 630,
        alt: 'SFGEO Geotechnical Engineering Sydney',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Geotechnical Engineer Sydney | Solid Foundation Geotechnical",
    description: "Sydney's boutique geotechnical consultancy. Principal-led site classifications, investigations, and 4WD drilling with fixed-fee quotes and local expertise.",
    images: ['/og/sfgeo-og-card.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": "https://sfgeo.com.au/#organization",
    "name": "Solid Foundation Geotechnical",
    "alternateName": "SFGEO",
    "url": "https://sfgeo.com.au",
    "description": "Family-owned, principal-led geotechnical engineering consultancy in Marrickville, Sydney: AS 2870 site classifications, geotechnical investigations and assessments, footing inspections, design parameters, 4WD tight-access drilling, environmental sampling and concrete coring. Fixed fees in writing within one business day.",
    "slogan": "Geotechnical. Done Properly.",
    "knowsAbout": [
      "Geotechnical engineering",
      "AS 2870 site classification",
      "Geotechnical site investigation (AS 1726)",
      "Slope stability assessment",
      "Footing and pier inspection",
      "Geotechnical design parameters",
      "Borehole drilling",
      "Tight access drilling",
      "Contaminated land investigation",
      "Acid sulfate soils",
      "Concrete coring",
      "Sydney geology"
    ],
    "foundingLocation": { "@type": "Place", "name": "Marrickville, Sydney, Australia" },
    "logo": {
      "@type": "ImageObject",
      "url": "https://sfgeo.com.au/og/sfgeo-logo-square.png"
    },
    "image": "https://sfgeo.com.au/og/sfgeo-og-card.jpg",
    "telephone": "+61423483555",
    "email": "info@sfgeo.com.au",
    "priceRange": "$$",
    "areaServed": [
      { "@type": "City", "name": "Sydney" },
      { "@type": "State", "name": "New South Wales" }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Suite 3.01, Level 3, 107 Sydenham Road",
      "addressLocality": "Marrickville",
      "addressRegion": "NSW",
      "postalCode": "2204",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.911,
      "longitude": 151.166
    },
    "hasMap": "https://www.google.com/maps/place/?q=place_id:ChIJkbo3DVqq1IMRQYQUbuD9XDc",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "14:00"
      }
    ],
    "sameAs": [
      "https://au.linkedin.com/company/sfgeo",
      "https://instagram.com/sfgeo.syd",
      "https://maps.google.com/?cid=3989342510304756801"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61423483555",
      "contactType": "customer service",
      "areaServed": "AU-NSW",
      "availableLanguage": "en"
    },
    "founder": {
      "@type": "Person",
      "name": "Alli Atmar",
      "jobTitle": "Principal Engineer",
      "worksFor": { "@id": "https://sfgeo.com.au/#organization" }
    }
  };

  return (
    <html lang="en-AU">
      <body
        className={`${inter.variable} ${montserrat.variable} ${archivo.variable} antialiased min-h-screen flex flex-col`}
      >
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18053070765"
          strategy="lazyOnload"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18053070765');`}
        </Script>
        <script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
        />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
