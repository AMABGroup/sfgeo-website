"use client";

import { useState } from "react";
import GoogleReviews from "@/components/ui/GoogleReviews";

/** Uniform, collapsed-by-default reviews band: fixed height with a fade,
 *  expanding on demand so the section never varies in size on load. */
export default function HomeReviews() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className={`relative overflow-hidden transition-all duration-700 ${open ? "max-h-[4000px]" : "max-h-[430px]"}`}>
        <GoogleReviews />
        {!open && <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />}
      </div>
      <div className="text-center mt-2">
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-forest-green hover:text-slate-950 transition-colors"
        >
          {open ? "Show Fewer Reviews" : "Show All Reviews"}
          <span className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>▾</span>
        </button>
      </div>
    </div>
  );
}
