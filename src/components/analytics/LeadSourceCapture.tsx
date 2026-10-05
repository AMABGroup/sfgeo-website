"use client";

import { useEffect } from "react";
import { captureLeadSource } from "@/lib/leadSource";

// Records the session's first-touch source (gclid, UTMs, landing page,
// referrer) so the enquiry forms can send it with the lead. Mounted once in
// SiteChrome; client-side navigation keeps it mounted, so this runs once per
// full page load and captureLeadSource ignores every load after the first.
export default function LeadSourceCapture() {
  useEffect(() => {
    captureLeadSource();
  }, []);

  return null;
}
