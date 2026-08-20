import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SFGEO",
  description: "How Solid Foundation Geotechnical collects, uses and protects personal information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
