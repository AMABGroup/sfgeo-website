"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const PHONE_LABEL = "AW-18053070765/bl39CNLnkeIcEK3_r6BD";
const EMAIL_LABEL = "AW-18053070765/HilqCNXnkeIcEK3_r6BD";

// Fires a Google Ads conversion when any tel: or mailto: link is clicked,
// site-wide. SMS clicks and form submissions report separately via the
// "Website enquiry" label wired where those live.
export default function ContactClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as Element | null)?.closest?.("a[href]");
      if (!anchor || !window.gtag) return;
      const href = anchor.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) {
        window.gtag("event", "conversion", { send_to: PHONE_LABEL });
      } else if (href.startsWith("mailto:")) {
        window.gtag("event", "conversion", { send_to: EMAIL_LABEL });
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

return null;
}
