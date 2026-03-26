import { Metadata } from 'next';
import FaqClient from './FaqClient';

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Geotechnical Engineering Sydney | SFGEO",
  description: "Find answers to common questions about geotechnical reports, soil testing, site classifications, and construction support in Sydney.",
};

export default function FaqPage() {
  return <FaqClient />;
}
