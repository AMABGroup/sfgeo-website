import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Geotechnical Engineering Services | SFGEO Sydney",
  description: "Sydney site classifications (AS2870), soil reports, and geotechnical investigations. We provide precise soil parameters to support your engineer's design.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
