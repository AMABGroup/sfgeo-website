import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SFGEO | Boutique Engineers in Marrickville, Sydney",
  description: "Learn about Solid Foundation Geotechnical, our local expertise in the Sydney Basin, and our proprietary AGS framework ensuring highly-reliable construction reporting.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
