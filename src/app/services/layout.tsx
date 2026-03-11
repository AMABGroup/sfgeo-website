import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Geotechnical Engineering Services | SFGEO Sydney",
  description: "Expert geotechnical investigations, soil reports, and construction support services for architects, builders, and standard residential developers across the Greater Sydney region.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
