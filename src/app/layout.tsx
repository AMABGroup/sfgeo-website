import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactBubble from "@/components/ui/ContactBubble";
import CallBubble from "@/components/ui/CallBubble";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Geotechnical Engineer Sydney | Site Classifications AS 2870 | Geotechnical Investigation AS 1726 | Third Party NATA Accredited Testing | SFGEO",
  description: "Sydney's locally owned geotechnical consultancy. Site Classifications, Geotechnical investigations, and Geotechnical/Environmental Drilling. Principal Engineer led, backed by NATA-accredited lab results. Fixed-fee quotes.",
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
    canonical: 'https://www.sfgeo.com.au',
  },
  openGraph: {
    title: "Geotechnical Engineer Sydney | Site Classifications AS 2870 | Geotechnical Investigation AS 1726 | Third Party NATA Accredited Testing | SFGEO",
    description: "Sydney's locally owned geotechnical consultancy. Site Classifications, Geotechnical investigations, and Geotechnical/Environmental Drilling. Principal Engineer led, backed by NATA-accredited lab results. Fixed-fee quotes.",
    url: "https://www.sfgeo.com.au",
    siteName: "SFGEO",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Geotechnical Engineer Sydney | Site Classifications AS 2870 | Geotechnical Investigation AS 1726 | Third Party NATA Accredited Testing | SFGEO",
    description: "Sydney's locally owned geotechnical consultancy. Site Classifications, Geotechnical investigations, and Geotechnical/Environmental Drilling. Principal Engineer led, backed by NATA-accredited lab results. Fixed-fee quotes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased min-h-screen flex flex-col`}
      >
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
