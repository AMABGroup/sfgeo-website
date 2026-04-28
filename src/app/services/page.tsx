import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: "Geotechnical Services Sydney | SFGEO",
  description: "Specialist geotechnical services across Sydney. Principal-led site classifications, investigations, and construction support for residential and commercial builds.",
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: "Geotechnical Services Sydney | SFGEO",
    description: "Specialist geotechnical services across Sydney. Principal-led site classifications, investigations, and construction support for residential and commercial builds.",
    url: '/services',
  },
  twitter: {
    title: "Geotechnical Services Sydney | SFGEO",
    description: "Specialist geotechnical services across Sydney. Principal-led site classifications, investigations, and construction support for residential and commercial builds.",
  },
};

export default function ServicesHubPage() {
  return <ServicesClient />;
}
