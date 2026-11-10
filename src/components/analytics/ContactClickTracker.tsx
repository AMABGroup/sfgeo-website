"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const PHONE_LABEL = "AW-18053070765/bl39CNLnkeIcEK3_r6BD";
const EMAIL_LABEL = "AW-18053070765/HilqCNXnkeIcEK3_r6BD";
const GA4 = "G-VXSTDPETHH";

// Where on the page a contact link sits: the nearest data-cta label (the call and
// text bubbles carry one), else the id of the section it is in, else its landmark.
function placement(anchor: Element): string {
  const tagged = anchor.closest("[data-cta]")?.getAttribute("data-cta");
  if (tagged) return tagged;
  const section = anchor.closest("section[id]")?.id;
  if (section) return section;
  return anchor.closest("header, footer, nav, section, main")?.tagName.toLowerCase() ?? "unlabelled";
}

// Every tel:, mailto: and sms: tap, site-wide:
// - tel: and mailto: fire their Google Ads conversion (unchanged) and a GA4 event;
// - sms: fires a GA4 event only (it was never an Ads conversion).
// GA4 events carry the placement so Analytics can show which part of which page
// produces calls. Form submissions report separately (generate_lead) where they live.
export default function ContactClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as Element | null)?.closest?.("a[href]");
      if (!anchor || !window.gtag) return;
      const href = anchor.getAttribute("href") ?? "";
      const link_placement = placement(anchor);
      if (href.startsWith("tel:")) {
        window.gtag("event", "conversion", { send_to: PHONE_LABEL });
        window.gtag("event", "phone_tap", { send_to: GA4, link_placement });
      } else if (href.startsWith("mailto:")) {
        window.gtag("event", "conversion", { send_to: EMAIL_LABEL });
        window.gtag("event", "email_tap", { send_to: GA4, link_placement });
      } else if (href.startsWith("sms:")) {
        window.gtag("event", "sms_tap", { send_to: GA4, link_placement });
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
