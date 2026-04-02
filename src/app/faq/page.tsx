import { Metadata } from 'next';
import FaqClient from './FaqClient';

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Geotechnical Engineering Sydney | SFGEO",
  description: "Everything you need to know about geotechnical investigations, AS2870 site classifications, NATA-accredited testing, and construction support in Sydney — answered in plain English.",
};

export default function FaqPage() {
  return <FaqClient />;
}
