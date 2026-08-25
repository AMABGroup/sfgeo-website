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
    return <main className="flex-grow">{children}</main>;
  }

  return (
    <>
      <SystemHeader />
      <main className="flex-grow">{children}</main>
      <SystemFooter />
      <ContactBubble />
      <CallBubble />
      <ContactClickTracker />
    </>
  );
}
