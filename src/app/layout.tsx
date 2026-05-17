import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactBubble from "@/components/ui/ContactBubble";
import CallBubble from "@/components/ui/CallBubble";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sfgeo.com.au'),
  title: "Solid Foundation Geotechnical | Sydney Engineers & Drilling",
  description: "Sydney's boutique geotechnical consultancy. Principal-led site classifications, investigations, and 4WD drilling with fixed-fee quotes and local expertise.",
  keywords: [
    "Geotechnical Engineer Sydney",
    "Soil Testing Sydney",
    "Site Classification Sydney",
    "AS2870 Site Classification",
    "AS1726 Geotechnical Investigation",
    "Core Drilling Sydney",
    "Tight Access Drilling",
    "Borehole Drilling Sydney",
    "Residential Geotechnical Report",
    "Geotechnical Investigation Sydney",
    "Pavement Design Sydney",
    "Slope Stability Assessment Sydney",
    "Wastewater Management Plan",
    "Permeability Testing Sydney",
    "Marrickville Geotechnical Engineer",
    "Inner West Soil Testing",
    "Western Sydney Geotechnical Services"
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Solid Foundation Geotechnical | Sydney Engineers & Drilling",
    description: "Sydney's boutique geotechnical consultancy. Principal-led site classifications, investigations, and 4WD drilling with fixed-fee quotes and local expertise.",
    url: "/",
    siteName: "SFGEO",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: '/og/sfgeo-og.png',
        width: 1200,
        height: 630,
        alt: 'SFGEO Geotechnical Engineering Sydney',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solid Foundation Geotechnical | Sydney Engineers & Drilling",
    description: "Sydney's boutique geotechnical consultancy. Principal-led site classifications, investigations, and 4WD drilling with fixed-fee quotes and local expertise.",
    images: ['/og/sfgeo-og.png'],
  },
  icons: {
    icon: "/favicon.png",
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
    "url": "https://sfgeo.com.au",
    "logo": {
      "@type": "ImageObject",
      "url": "https://sfgeo.com.au/og/sfgeo-og.png"
    },
    "image": "https://sfgeo.com.au/og/sfgeo-og.png",
    "telephone": "+61423483555",
    "priceRange": "$$",
    "address": "Suite 3.01, Level 3, 107 Sydenham Road, Marrickville, NSW 2204",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.911,
      "longitude": 151.166
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://au.linkedin.com/company/sfgeo",
      "https://instagram.com/sfgeo.syd"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61423483555",
      "contactType": "customer service",
      "areaServed": "AU",
      "availableLanguage": "en"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18053070765"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18053070765');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased min-h-screen flex flex-col`}
      >
        <script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
        />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ContactBubble />
        <CallBubble />
      </body>
    </html>
  );
}
