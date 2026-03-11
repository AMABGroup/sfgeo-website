import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Our Sydney Geotechnical Engineers | SFGEO",
  description: "Request a bespoke fixed-price fee proposal, site classification, or urgent construction inspection. Our team spans the entire Greater Sydney Metro area.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
