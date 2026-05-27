import type { Metadata, Viewport } from "next";
import { Carlito } from "next/font/google";

const carlito = Carlito({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-carlito",
  display: "swap",
});

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
  themeColor: "#236734",
};

export default function DocketLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={carlito.variable} style={{ fontFamily: "var(--font-carlito), Calibri, sans-serif" }}>
      {children}
    </div>
  );
}
