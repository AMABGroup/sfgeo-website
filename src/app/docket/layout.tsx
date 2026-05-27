import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "SFGEO Docket Book",
  description: "Internal SFGEO inspection docket app.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
  appleWebApp: {
    capable: true,
    title: "SFGEO Dockets",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#2D5A3A",
};

export default function DocketLayout({ children }: { children: React.ReactNode }) {
  return children;
}
