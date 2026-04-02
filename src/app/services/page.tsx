import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: "Geotechnical Services Sydney | Site Classifications & Investigations | SFGEO",
  description: "Site classifications, geotechnical investigations, construction inspections, and design parameters delivered by a locally-owned Sydney consultancy with 15 years of Sydney construction experience.",
  keywords: "Site Classification Sydney, AS2870 Soil Report, NSW Geotech Services, Pavement Design Parramatta, Temporary Works Verification, Slope Stability"
};

export default function ServicesHubPage() {
  return <ServicesClient />;
}
