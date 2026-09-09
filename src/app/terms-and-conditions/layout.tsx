import { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Terms & Conditions | SFGEO",
  "Terms and conditions for using the SFGEO website and engaging Solid Foundation Geotechnical for geotechnical consulting, drilling and inspections in Sydney.",
  "/terms-and-conditions",
);

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
