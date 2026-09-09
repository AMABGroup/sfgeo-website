import { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Privacy Policy | SFGEO",
  "How Solid Foundation Geotechnical (SFGEO) collects, uses, stores and protects the personal information you share through enquiries, quotes and site work.",
  "/privacy-policy",
);

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
