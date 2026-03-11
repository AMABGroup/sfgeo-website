import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Geotechnical Engineering FAQs | SFGEO Sydney",
  description: "Answers to the most common questions about soil reports, site classifications, and construction support services in Sydney, Australia.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
