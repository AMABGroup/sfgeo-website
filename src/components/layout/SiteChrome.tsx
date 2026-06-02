"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactBubble from "@/components/ui/ContactBubble";
import CallBubble from "@/components/ui/CallBubble";

type Props = {
  children: React.ReactNode;
};

export default function SiteChrome({ children }: Props) {
  const pathname = usePathname();
  const isApp = pathname?.startsWith("/docket");

  if (isApp) {
    return <main className="flex-grow">{children}</main>;
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <ContactBubble />
      <CallBubble />
    </>
  );
}
