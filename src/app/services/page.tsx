import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: "Geotechnical Services & Soil Reports Sydney | SFGEO Inner West",
  description: "Specialized geotechnical engineering services in Sydney. Site classifications, subgrade testing, and complex structural foundation reports.",
  keywords: "Site Classification Sydney, AS2870 Soil Report, NSW Geotech Services, Pavement Design Parramatta, Temporary Works Verification, Slope Stability"
};

export default function ServicesHubPage() {
  return <ServicesClient />;
}
