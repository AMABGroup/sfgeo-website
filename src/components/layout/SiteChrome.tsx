"use client";

import { usePathname } from "next/navigation";
import { SystemHeader, SystemFooter } from "./SystemChrome";
import ContactBubble from "@/components/ui/ContactBubble";
import CallBubble from "@/components/ui/CallBubble";
import ContactClickTracker from "@/components/analytics/ContactClickTracker";

type Props = {
  children: React.ReactNode;
};

export default function SiteChrome({ children }: Props) {
  const pathname = usePathname();
  const isApp = pathname?.startsWith("/docket");

  if (isApp) {
    return <main id="main" className="flex-grow">{children}</main>;
  }

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[110] focus:rounded-full focus:bg-forest-green focus:px-5 focus:py-2.5 focus:text-xs focus:font-semibold focus:tracking-wide focus:text-white"
      >
        Skip To Content
      </a>
      <SystemHeader />
      <main id="main" className="flex-grow">{children}</main>
      <SystemFooter />
      <ContactBubble />
      <CallBubble />
      <ContactClickTracker />
    </>
  );
}
