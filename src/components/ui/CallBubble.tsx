"use client";

import { PhoneIcon } from "@heroicons/react/24/solid";

export default function CallBubble() {
  return (
    <a
      href="tel:0423483555"
      className="fixed bottom-6 left-6 z-50 bg-forest-green text-white p-4 rounded-full shadow-lg hover:bg-forest-green/90 hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Call Us"
    >
      <span className="absolute left-full ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-black text-white text-xs font-semibold py-1.5 px-3 rounded whitespace-nowrap pointer-events-none shadow-md">
        Call SFGEO
      </span>
      <PhoneIcon className="w-6 h-6 flex-shrink-0" />
    </a>
  );
}
