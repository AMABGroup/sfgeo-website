import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | SFGEO",
  description: "Terms and conditions for engaging Solid Foundation Geotechnical's consulting and drilling services.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
